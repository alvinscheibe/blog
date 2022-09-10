import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import SeoPage from '../../components/SeoPage';
import { SectionHeader } from '../../components/Sections/SectionHeader';
import { client, ssrCache } from '../../lib/urql';
import { PostDocument, TagsDocument, usePostQuery, useTagsQuery } from '../../generated/graphql';
import { ContactMe } from '../../components/ContactMe';
import { BlogPostSideBar } from '../../components/Blog/BlogPostSideBar';
import ReactMarkdown from 'react-markdown';
import CustomCode from '../../components/CustomCode';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface IBlogPost {
  slug: string;
}

const BlogPost: NextPage<IBlogPost> = ({ slug }) => {
  const [{ data }] = usePostQuery({
    variables: { slug }
  });
  const [{ data: dataTags }] = useTagsQuery();

  const title = data?.post?.title?? '';
  const description = data?.post?.excerpt?? '';

  return (
    <>
      <SeoPage title={title} description={description} />

      <SectionHeader title={title} />

      <section className={'relative md:py-24 py-16'}>
        <div className={'container'}>
          <div className={'grid md:grid-cols-12 grid-cols-1 gap-[30px]'}>
            <div className={'lg:col-span-8 md:col-span-6'}>
              <div className={'p-6 rounded-md shadow dark:shadow-gray-800'}>

                <img src={data?.post?.coverImage?.url} className="rounded-md" alt={data?.post?.title} />
                {/*Colocar o dia da publicação*/}

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
                      strong: (props) => <strong className={'text-indigo-600 font-semibold'} {...props} />
                    }}
                  >
                    {data?.post?.content?? ''}
                  </ReactMarkdown>
                </div>
              </div>
            </div>

            <BlogPostSideBar
              author={{
                name: data?.post?.author?.name,
                pictureUrl: data?.post?.author?.picture?.url
              }}
              tags={{
                tags: dataTags?.__type?.enumValues
              }}
            />
          </div>
        </div>

        <ContactMe />
      </section>

    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await client.query(PostDocument, {
    slug: params?.slug
  }).toPromise();
  await client.query(TagsDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params?.slug
    },
    revalidate: 60 * 60 * 4 // 4 hours
  }
};

export default BlogPost;