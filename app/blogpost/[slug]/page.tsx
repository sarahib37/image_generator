import React from "react";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Box } from "@chakra-ui/react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import Image from "next/image";
import BlogCtn from "@/components/BlogCtn";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypeStringify)
      .process(content);

    return (
      <BlogCtn>
        <Box as="article" maxW="full" mx="auto" p={4} className="text-primary dark:text-primary-dark">
          <h1 className="my-4 text-center text-3xl font-bold">{data.title}</h1>
          <p className="my-2 text-center uppercase text-sm">
            PUBLISHED BY <b>{data.author}</b> on{" "}
            <b>
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </b>
          </p>
          {data.imageUrl && (
            <Image
              src={data.imageUrl}
              alt={data.title}
              width={1000}
              height={500}
              className="mt-4 mb-8 rounded-lg"
            />
          )}
          <div className="text-justify w-full" dangerouslySetInnerHTML={{ __html: processedContent.toString() }}></div>
        </Box>
      </BlogCtn>
    );
  } catch (error) {
    console.error("Error fetching markdown file:", error);
    return notFound();
  }
}
