import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { client, ssrCache } from '../lib/urql';
import { LastestPostsDocument, PageDocument, useLastestPostsQuery, usePageQuery } from '../generated/graphql';
import Head from 'next/head';
import { ContactMe } from '../components/ContactMe';
import { LatestPosts } from '../components/LatestPosts';
import { Hero } from '../components/Hero';
import SeoPage from '../components/SeoPage';

const Home: NextPage = () => {
  const [{ data: dataHomePage }] = usePageQuery({
    variables: {
      slug: 'home'
    }
  });
  const [{ data }] = useLastestPostsQuery();

  return (
    <>
      <SeoPage title={'Home'} />

      <Hero data={dataHomePage} />

      <div className={'relative'}>
        <div className={'absolute block w-full h-auto bottom-[25px] z-1 left-0'}>
          <a href={'#latest-posts'}>
            <i className={'mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800'}></i>
          </a>
        </div>

        <div className={'shape overflow-hidden text-white dark:text-slate-900'}>
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <section className={'relative md:py-24 py-16'} id={'latest-posts'}>
        <div className={'container'}>
          <LatestPosts data={data} />
        </div>

        <ContactMe />
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await client.query(PageDocument, {
    slug: 'home'
  }).toPromise();
  await client.query(LastestPostsDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}

export default Home;
