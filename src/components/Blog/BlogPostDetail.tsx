import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CustomCode from '../CustomCode';
import React from 'react';

type BlogPostDetailProps = {
  coverImageUrl?: string;
  coverImageFileName?: string;
  tags?: Array<string>;
  publishedAt: Date;
  content?: string;
};

export function BlogPostDetail({ coverImageUrl, coverImageFileName, tags, publishedAt, content }: BlogPostDetailProps) {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }


  return (
    <div className={'lg:col-span-8 md:col-span-6'}>
      <div className={'p-6 rounded-md shadow dark:shadow-gray-800'}>
        <img src={coverImageUrl} className={'rounded-md'} alt={coverImageFileName} />

        <div className={'grid md:grid-cols-2 grid-cols-1 mt-4 md:gap-[30px] gap-[15px]'}>
          <div className={'col-span-1'}>
            <div className={'md:float-left text-center'}>
              {tags && tags.map((tag) => {
                return (
                  <a key={tag} href={`/tag/${tag}`} className={'bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mr-2 h-5'}>{tag}</a>
                );
              })}
            </div>
          </div>
          <div className={'col-span-1'}>
            <span className={'text-slate-400 block mx-2 md:float-right text-center'}>
              <i className={'mdi mdi-calendar'}></i>
              {new Date(publishedAt).toLocaleString('en-UK', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })}
            </span>
          </div>
        </div>

        <div className={'mt-6'}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: (props) => <h1 className={'mt-4 mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'} {...props} />,
              h2: (props) => <h2 className={'mt-4 mb-4 md:text-2xl md:leading-normal text-1xl leading-normal font-semibold'} {...props} />,
              p: (props) => <p className={'text-slate-400 pt-3 pb-3'} {...props} />,
              blockquote: (props) => <blockquote className={'text-slate-400 italic border-x-4 border-indigo-600 rounded-tl-xl rounded-br-xl mt-3 mb-3 pl-3 pr-3'} {...props} />,
              code: CustomCode,
              strong: (props) => <strong className={'text-indigo-600 font-semibold'} {...props} />,
              ul: (props) => <ul className={'list-none text-slate-400'} {...props} />,
              li: (props) => (
                <li className={'flex'} {...props}>
                  <i className={'mdi mdi-arrow-right text-black dark:text-white'}></i>&nbsp;{props.children}
                </li>
              )
            }}
          >
            {content?? ''}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}