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
import { BlogPostDetail } from '../../components/Blog/BlogPostDetail';

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

      <section className={'relative md:py-12 py-8'}>
        <div className={'container'}>
          <div className={'grid md:grid-cols-12 grid-cols-1 gap-[30px]'}>
            <BlogPostDetail
              coverImageUrl={data?.post?.coverImage?.url}
              coverImageFileName={data?.post?.coverImage?.fileName}
              tags={data?.post?.tags}
              publishedAt={data?.post?.date}
              content={data?.post?.content}
            />

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