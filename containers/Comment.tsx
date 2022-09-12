import { useEffect, useRef } from "react";
import useUtterances from "../hooks/useUtterances";

const COMMENT_ID = "comment";
const REPO = "zuhanit/zuhanit-blog-utterances";

const Comment = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Im called!");
    const script = document.createElement("script");

    const config = {
      src: "https://utteranc.es/client.js",
      repo: "zuhanit/zuhanit-blog-utterances",
      "issue-term": "pathname",
      theme: "github-light",
      crossorigin: "anonymous",
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value as string);
    });

    setTimeout(() => {
      ref.current?.append(script);
    }, 300);
  }, []);

  return <div ref={ref} />;
};

export default Comment;
