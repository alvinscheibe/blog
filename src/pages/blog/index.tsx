import { GetStaticProps, NextPage } from 'next';
import { PostsDocument, usePostsQuery } from '../../generated/graphql';
import { client, ssrCache } from '../../lib/urql';
import PostCard from '../../components/PostCard';
import { SectionHeader } from '../../components/Sections/SectionHeader';
import SeoPage from '../../components/SeoPage';
import { ContactMe } from '../../components/ContactMe';

const Blog: NextPage = () => {
  const [{ data }] = usePostsQuery();
  const title = 'Blogs & Articles';

  return (
    <>
      <SeoPage title={title} />

      <SectionHeader title={'Blogs & Articles'} />

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

        <ContactMe />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await client.query(PostsDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}

export default Blog;
