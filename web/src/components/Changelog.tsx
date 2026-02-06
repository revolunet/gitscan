"use client";

import Markdown from "react-markdown";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function prefixPath(path: string | undefined): string | undefined {
  if (
    typeof path === "string" &&
    path.startsWith("/") &&
    !path.startsWith("//")
  ) {
    return `${basePath}${path}`;
  }
  return path;
}

interface ChangelogProps {
  content: string;
}

export function Changelog({ content }: ChangelogProps) {
  return (
    <div className="prose prose-slate prose-sm max-w-none">
      <Markdown
        components={{
          a: ({ href, children, ...props }) => (
            <a {...props} href={prefixPath(href)}>
              {children}
            </a>
          ),
          img: ({ src, alt, ...props }) => (
            <img
              src={prefixPath(typeof src === "string" ? src : undefined)}
              alt={alt}
              {...props}
            />
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
