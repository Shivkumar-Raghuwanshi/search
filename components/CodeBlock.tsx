"use client";

import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

interface MyCodeBlockProps {
  code: string;
}

const MyCodeBlock: React.FC<MyCodeBlockProps> = ({ code }) => {
  return (
    <div className="my-4 p-4 bg-gray-800 text-white rounded-md overflow-x-scroll md:overflow-x-auto">
      <CopyBlock
        text={code}
        language={"jsx"}
        showLineNumbers={true}
        theme={dracula}
        copied={false}
      />
    </div>
  );
};

export default MyCodeBlock;
