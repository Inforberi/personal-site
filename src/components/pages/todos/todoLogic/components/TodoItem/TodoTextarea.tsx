"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import { useEffect, useRef } from "react";

interface TodoTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

const TodoTextarea = ({ value, onChange }: TodoTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  const setCaretToEnd = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      const length = textarea.value.length;
      textarea.setSelectionRange(length, length);
      textarea.focus();
    }
  };

  useEffect(() => {
    setCaretToEnd();
  }, [onChange]);

  return (
    <textarea
      ref={textareaRef}
      className={cn(
        "block h-auto w-full resize-none overflow-hidden border-none bg-transparent p-0 text-black",
        "sm:text-lg",
        "lg:text-xl",
        "2xl:text-2xl",
      )}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TodoTextarea;
