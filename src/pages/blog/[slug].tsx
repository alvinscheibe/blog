import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import SeoPage from '../../components/SeoPage';
import { SectionHeader } from '../../components/Sections/SectionHeader';
import { client, ssrCache } from '../../lib/urql';
import { PostDocument, usePostQuery } from '../../generated/graphql';
import { ContactMe } from '../../components/ContactMe';

interface IBlogPost {
  slug: string;
}

const BlogPost: NextPage<IBlogPost> = ({ slug }) => {
  const [{ data }] = usePostQuery({
    variables: { slug }
  });
  console.log(data);
  const title = data?.post?.title?? '';
  const description = data?.post?.excerpt?? '';

  return (
    <>
      <SeoPage title={title} description={description} />

      <SectionHeader title={title} />


      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">

                <img src={data?.post?.coverImage?.url} className="rounded-md" alt={data?.post?.title} />
                {/*Colocar o dia da publicação*/}

                <div className="mt-6 text-slate-400">
                  <div dangerouslySetInnerHTML={{__html: data?.post?.content.html?? ''}} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
              <div className="sticky top-20">
                <h5
                  className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                <div className="text-center mt-8">
                  <img src={data?.post?.author?.picture?.url} className="h-24 w-24 mx-auto rounded-full shadow mb-4" alt={data?.post?.author?.name} />

                  <a href="" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">
                    {data?.post?.author?.name}
                  </a>
                </div>

                <h5
                  className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                <ul className="list-none text-center mt-8">
                  <li className="inline-block m-2"><a href=""
                                                      className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Business</a>
                  </li>
                  <li className="inline-block m-2"><a href=""
                                                      className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Finance</a>
                  </li>
                  <li className="inline-block m-2"><a href=""
                                                      className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Marketing</a>
                  </li>
                  <li className="inline-block m-2"><a href=""
                                                      className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Fashion</a>
                  </li>
                  <li className="inline-block m-2"><a href=""
                                                      className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Bride</a>
                  </li>
                  <li className="inline-block m-2"><a href=""
                                                      className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Lifestyle</a>
                  </li>
                  <li className="inline-block m-2"><a href=""
                                                      className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Travel</a>
                  </li>
                  <li className="inline-block m-2"><a href=""
                                                      className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Beauty</a>
                  </li>
                  <li className="inline-block m-2"><a href=""
                                                      className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Video</a>
                  </li>
                  <li className="inline-block m-2"><a href=""
                                                      className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Audio</a>
                  </li>
                </ul>
              </div>
            </div>
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

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params?.slug
    },
    revalidate: 60 * 60 * 4 // 4 hours
  }
};

export default BlogPost;