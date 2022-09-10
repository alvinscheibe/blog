import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CustomCode = ({ node, className, children, ...props }:  Pick<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "key" | keyof HTMLAttributes<HTMLElement>> & ReactMarkdownProps) => {
  const match = /language-(\w+)/.exec(className || '');

  return match ? (
    <SyntaxHighlighter
      style={dracula}
      language={match[1]}
      showLineNumbers={match && match[1] !== 'bash'}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={'text-red-600'} {...props}>
      {children}
    </code>
  );
};

export default CustomCode;