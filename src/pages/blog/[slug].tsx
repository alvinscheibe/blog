import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import SeoPage from '../../components/SeoPage';
import { SectionHeader } from '../../components/Sections/SectionHeader';
import { client, ssrCache } from '../../lib/urql';
import { PostDocument, TagsDocument, usePostQuery, useTagsQuery } from '../../generated/graphql';
import { ContactMe } from '../../components/ContactMe';
import { BlogPostSideBar } from '../../components/Blog/BlogPostSideBar';

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

                <div className={'mt-6 text-slate-400'}>
                  <div dangerouslySetInnerHTML={{__html: data?.post?.content.html?? ''}} />
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