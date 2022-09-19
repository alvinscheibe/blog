import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import SeoPage from '../../components/SeoPage';
import { SectionHeader } from '../../components/Sections/SectionHeader';
import { client, ssrCache } from '../../lib/urql';
import { PostsByTagDocument, usePostsByTagQuery } from '../../generated/graphql';
import PostCard from '../../components/PostCard';
import { ContactMe } from '../../components/ContactMe';

interface ITagPosts {
  name: string;
}

const TagPosts: NextPage<ITagPosts> = ({ name }) => {
  const [{ data }] = usePostsByTagQuery({
    variables: {
      tag: name
    }
  });
  const title = `Tag: ${name}`;

  return (
    <>
      <SeoPage title={title} />

      <SectionHeader title={title} />

      <section className={'relative md:py-12 py-8'}>
        <div className={'container'}>
          <div className={'grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]'}>
            {data?.posts.map((post) => (
              <PostCard key={post.slug} post={{
                title: post.title,
                description: post.excerpt,
                href: `/blog/${post.slug}`,
                imageUrl: post.coverImage?.url,
                tags: post.tags,
                date: new Date(post.date).toLocaleString('en-UK', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                }),
                author: {
                  name: post.author?.name,
                  imageUrl: post.author?.picture?.url
                }
              }} />
            ))}
          </div>
        </div>

        {data && data?.posts.length < 1?
          <div className={'container md:mt-12 mt-8'}>
            <div className={'grid grid-cols-1 text-center'}>
              <h3 className={'md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'}>
                No posts were found for this tag...
              </h3>
            </div>
          </div>
          : ''
        }

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
  await client.query(PostsByTagDocument, {
    tag: params?.name
  }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
      name: params?.name
    }
  }
};

export default TagPosts;