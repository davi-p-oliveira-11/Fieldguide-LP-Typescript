import React from "react";

interface ButtonProps {
  text?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="bg-green-primary hover:bg-green-primary-hover px-6 py-3 md:px-10 md:py-4 rounded-lg font-medium text-base cursor-pointer">
      {props.text || "Send"}
    </button>
  );
}
