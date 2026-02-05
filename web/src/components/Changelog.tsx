"use client";

import Markdown from "react-markdown";

interface ChangelogProps {
  content: string;
}

export function Changelog({ content }: ChangelogProps) {
  return (
    <div className="prose prose-slate prose-sm max-w-none">
      <Markdown>{content}</Markdown>
    </div>
  );
}
