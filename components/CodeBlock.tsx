"use client";

import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className="my-4 p-4 bg-gray-800 text-white rounded-md">
      <CopyBlock
        text={code}
        language={'jsx'}
        showLineNumbers={true}
        theme={dracula}
      />
    </div>
  );
};

export default CodeBlock;
