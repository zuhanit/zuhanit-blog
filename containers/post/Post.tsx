import ReactMarkdown from "react-markdown";
import { PostInterface } from "../../firebase/database/post";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import Tag from "../../components/Tag";
import Image from "next/image";

export interface PostProps extends PostInterface {}

const Components: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  h1: ({ ...props }) => (
    <h1 className="font-bold mt-5 mb-3 text-4xl" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="font-bold mt-5 mb-3 text-3xl" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="font-bold mt-5 mb-3 text-2xl" {...props} />
  ),
  h4: ({ ...props }) => <h4 className="font-bold my-2 text-xl" {...props} />,
  h5: ({ ...props }) => <h5 className="font-bold my-2 text-lg" {...props} />,
  h6: ({ ...props }) => <h6 className="font-bold my-2" {...props} />,
  blockquote: ({ ...props }) => (
    <blockquote className="ml-4 border-l pl-4" {...props} />
  ),
  ul: ({ ...props }) => <ul className="pl-10 mb-2" {...props} />,
  ol: ({ ...props }) => <ol className="pl-10 mb-2" {...props} />,
  li: ({ ordered, ...props }) => (
    <li
      className={`marker:text-gray-400 ${
        ordered ? "list-decimal" : "list-disc"
      }`}
      {...props}
    />
  ),
  code: ({ inline, ...props }) => {
    return inline ? (
      <code className="text-pink-600" {...props} />
    ) : (
      <SyntaxHighlighter style={githubGist} {...props}></SyntaxHighlighter>
    );
  },
  a: ({ ...props }) => (
    <a
      className="font-semibold underline underline-offset-4 decoration-cyan-400"
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-5" {...props} />,
  table: ({ ...props }) => <table className="table-fixed" {...props} />,
  th: ({ ...props }) => (
    <th
      className="border-b font-medium pt-0 pb-3 p-4 pl-8 text-left"
      {...props}
    />
  ),
  td: ({ ...props }) => (
    <td className="pt-0 pb-3 p-4 pl-8 text-left" {...props} />
  ),
  p: ({ node, ...props }) => <p className="pb-3" {...props} />,
  em: ({ ...props }) => <em className="text-gray-600" {...props} />,
  img: ({ alt, src, ...props }) => (
    <picture className="">
      <img src={src} alt={alt} className="shadow-2xl my-3" />
    </picture>
  ),
};

const Post = ({ id, title, body, date, tags }: PostProps) => {
  return (
    <div className="">
      <section className="mb-4 flex flex-col gap-1">
        <p>{date}</p>
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Tag value={tag} key={tag} />
          ))}
        </div>
      </section>
      <main>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={Components}>
          {body}
        </ReactMarkdown>
      </main>
      <p></p>
    </div>
  );
};

export default Post;
