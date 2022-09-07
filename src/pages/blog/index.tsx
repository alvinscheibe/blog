import { GetStaticProps, NextPage } from 'next';
import { PostsDocument, usePostsQuery } from '../../generated/graphql';
import { client, ssrCache } from '../../lib/urql';
import PostCard from '../../components/PostCard';
import { SectionHeader } from '../../components/Sections/SectionHeader';
import SeoPage from '../../components/SeoPage';

const Blog: NextPage = () => {
  const [{ data }] = usePostsQuery();
  const title = 'Blogs & Articles';

  return (
    <>
      <SeoPage title={title} />

      <SectionHeader title={'Blogs & Articles'} />

      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {data?.posts.map((post) => (
              <PostCard key={post.slug} post={{
                title: post.title,
                description: post.excerpt,
                href: `/blog/${post.slug}`,
                imageUrl: post.coverImage?.url,
                tags: post.tags,
                date: new Date(post.publishedAt).toLocaleString('pt-br', {
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

          <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <a href="#"
                       className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-l-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                      <i className="uil uil-angle-left text-[20px]"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                       className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</a>
                  </li>
                  <li>
                    <a href="#"
                       className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</a>
                  </li>
                  <li>
                    <a href="#" aria-current="page"
                       className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</a>
                  </li>
                  <li>
                    <a href="#"
                       className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</a>
                  </li>
                  <li>
                    <a href="#"
                       className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</a>
                  </li>
                  <li>
                    <a href="#"
                       className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-r-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                      <i className="uil uil-angle-right text-[20px]"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
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