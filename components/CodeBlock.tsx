
"use client";

import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

interface MyCodeBlockProps {
  code: string;
}

const MyCodeBlock: React.FC<MyCodeBlockProps> = ({ code }) => {
  return (
    <div className="my-4 p-4 bg-gray-800 text-white rounded-md">
      <CopyBlock
        text={code}
        language={"jsx"}
        showLineNumbers={true}
        theme={dracula}
      />
    </div>
  );
};

export default MyCodeBlock;
