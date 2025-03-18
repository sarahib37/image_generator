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

export async function generateStaticParams() {
  const files = await fs.readdir("content"); // Get all markdown files
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings);

  try {
    const filePath = `content/${params.slug}.md`; // FIXED: Added backticks for string interpolation
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
              alt="Herbode"
              width={1000}
              height={100}
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
    console.log(error);
    return notFound();
  }
}
