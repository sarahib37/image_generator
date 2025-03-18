import { Box } from "@chakra-ui/react";
import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import matter from "gray-matter";
import fs from "fs/promises";
import Image from "next/image";
import BlogCtn from "@/components/BlogCtn";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Define the expected structure of the props
interface PageProps {
  params: {
    slug: string;
  };
}

// Generate dynamic paths for static site generation
export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const files = await fs.readdir("content"); // Get all markdown files
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const filePath = `content/${params.slug}.md`;
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title || "Blog Post",
      description: data.description || "Read the latest article",
      openGraph: {
        title: data.title,
        description: data.description,
        images: [
          {
            url: data.imageUrl,
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
      },
    };
  } catch (error) {
    return { title: "Not Found", description: "This post does not exist." };
  }
}

// Main component
export default async function Page({ params }: PageProps) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings);

  try {
    const filePath = `content/${params.slug}.md`;
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const htmlContent = (await processor.process(content)).toString();

    return (
      <div>
        <BlogCtn>
          <Box>
            <h1 className="my-[1em] text-center">{data.title}</h1>
            <p className="my-[1em] text-center uppercase">
              PUBLISHED BY <b>{data.author}</b> on{" "}
              <b>
                {new Date(data.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </b>
            </p>
            <Image
              src={data.imageUrl}
              alt={data.title}
              width={1000}
              height={500}
              className="mt-[2em] mb-[5em]"
            />
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></div>
          </Box>
        </BlogCtn>
      </div>
    );
  } catch (error) {
    console.error("Error fetching markdown file:", error);
    return notFound();
  }
}
