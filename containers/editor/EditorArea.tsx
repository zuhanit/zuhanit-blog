import React, { forwardRef } from "react";

interface EditorAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {}

const EditorArea = forwardRef<HTMLTextAreaElement, EditorAreaProps>(
  ({ onFocus, onBlur, className }: EditorAreaProps, ref) => {
    return (
      <>
        <textarea
          className={`min-h-full w-full grow focus:outline-none resize-none ${className}`}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="내용을 입력하세요."
          autoFocus
          ref={ref}
        ></textarea>
      </>
    );
  }
);

EditorArea.displayName = "EditorArea";

export default EditorArea;
