import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import EditorArea from "./EditorArea";
import DataService from "../../firebase/database/index";
import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";

interface EditorProps extends React.HTMLAttributes<HTMLDivElement> {}
interface ErrorType {
  status: boolean;
  message: string;
}
const Editor = ({ className }: EditorProps) => {
  const [focused, setFocused] = useState(true);
  const [error, setError] = useState({
    title: false,
    body: false,
    tags: false,
  });
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const tagsInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const onClickUpload = async () => {
    const title = titleInputRef.current?.value as string;
    const body = editorRef.current?.value as string;
    const handleValidation = () => {
      const resultError = {
        title: false,
        body: false,
        tags: false,
      };
      if (title === "") resultError.title = true;
      if (body === "") resultError.body = true;
      setError(resultError);
      return Object.values(resultError).includes(true);
    };
    const hasError = handleValidation();
    if (!hasError) {
      await DataService.uploadPost({
        body: editorRef.current?.value as string, // Replace \n to multiline.
        title: title,
        tags: tagsInputRef.current?.value as string[],
      });
      router.push(`/posts/${title.replace(/ /gi, "-").toLowerCase()}`);
    } else {
      titleInputRef.current?.focus();
    }
  };
  return (
    <main className={`flex grow flex-col ${className}`}>
      <div className="mb-1 pb-2 flex">
        <button
          className="text-blue-400 font-bold flex items-center gap-1"
          onClick={onClickUpload}
        >
          <AiOutlinePlus /> Upload
        </button>
      </div>
      <div className="mb-4 w-full">
        <label className={`w-full `}>
          <input
            placeholder="제목을 입력해주세요."
            className={`focus:outline-none w-full border ${
              error.title ? "border-red-500 rounded" : "border-transparent"
            }`}
            ref={titleInputRef}
          />
          <CSSTransition
            in={error.title}
            timeout={300}
            classNames="write-error"
            unmountOnExit
          >
            <div className="text-red-500 origin-top-left">
              제목 값은 필수입니다.
            </div>
          </CSSTransition>
        </label>
        <label className={`w-full `}>
          <input
            placeholder="태그를 입력해주세요."
            className={`focus:outline-none w-full border ${
              error.title ? "border-red-500 rounded" : "border-transparent"
            }`}
            ref={titleInputRef}
          />
          <CSSTransition
            in={error.title}
            timeout={300}
            classNames="write-error"
            unmountOnExit
          >
            <div className="text-red-500 origin-top-left">
              태그 값은 필수입니다.
            </div>
          </CSSTransition>
        </label>
      </div>
      <div className="grow flex">
        <EditorArea
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`border min-h-full ${
            error.body ? "border-red-500 rounded" : "border-transparent"
          }`}
          ref={editorRef}
        />
        <CSSTransition
          in={error.body}
          timeout={300}
          classNames="write-error"
          unmountOnExit
        >
          <div className="text-red-500 origin-top-left">
            내용 값은 필수입니다.
          </div>
        </CSSTransition>
      </div>
    </main>
  );
};

export default Editor;
