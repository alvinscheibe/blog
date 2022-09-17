import { GetStaticProps, NextPage } from 'next';
import { SectionHeader } from '../components/Sections/SectionHeader';
import { client, ssrCache } from '../lib/urql';
import { ExperiencesDocument, PageDocument, useExperiencesQuery, usePageQuery } from '../generated/graphql';
import { ContactMe } from '../components/ContactMe';
import { SectionExperience } from '../components/Sections/Experience';
import SeoPage from '../components/SeoPage';
import siteConfig from '../../site.config';

const AboutMe: NextPage = () => {
  const [{ data: dataAboutMePage }] = usePageQuery({
    variables: {
      slug: 'about-me'
    }
  });
  const [{ data: dataExperiences }] = useExperiencesQuery();
  const title = 'About me';

  return (
    <>
      <SeoPage title={title} />

      <SectionHeader title={title} />

      <section className={'relative md:py-24 py-16'}>
        <div className={'container'}>
          <div className={'grid md:grid-cols-12 grid-cols-1 items-center gap-[60px]'}>
            <div className={'lg:col-span-5 md:col-span-6'}>
              <div className={'team p-12 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative'}>
                <div className={'absolute inset-0 bg-indigo-600/10 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] -z-1'}></div>
                <img src={'alvin-scheibe.jpg'} className={'h-32 w-32 rounded-full shadow-md dark:shadow-gray-800'} alt={'Alvin Scheibe'} />
                <div className={'content mt-4'}>
                  <a href="#" className={'text-lg font-medium hover:text-indigo-600 block'}>Alvin Scheibe</a>
                  <span className={'text-slate-400 block'}>Full Stack Web Developer</span>

                  <p className={'text-slate-400 mt-2'}>Follow me on the links bellow:</p>

                  <ul className={'list-none mt-4'}>
                    <li className={'inline mr-2'}>
                      <a href={siteConfig.urls.socials.github} target={'_blank'} className={'btn btn-icon btn-md border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white'} rel={'noreferrer'}>
                        <i className={'mdi mdi-github text-2xl'}></i>
                      </a>
                    </li>
                    <li className={'inline'}>
                      <a href={siteConfig.urls.socials.linkedin} target={'_blank'} className={'btn btn-icon btn-md border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white'} rel={'noreferrer'}>
                        <i className={'mdi mdi-linkedin text-2xl'}></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={'lg:col-span-7 md:col-span-6 mt-8 md:mt-0'}>
              <div className={'lg:ml-5'}>
                <div className={'flex mb-4'}>
                  <span className={'text-indigo-600 text-2xl font-bold mb-0'}>
                    <span className={'counter-value text-6xl font-bold'} data-target={'10'}>10</span>+
                  </span>
                  <span className={'self-end font-medium ml-2'}>Years <br /> Experience</span>
                </div>

                <h3 className={'mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold'}>Who am I?</h3>

                <p className={'text-slate-400 max-w-xl text-justify'}>
                  {dataAboutMePage?.page?.content.markdown}
                </p>

                <div className={'mt-6'}>
                  <a href={'mailto: alvin.scheibe@gmail.com'} className={'btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2'}>
                    <i className={'uil uil-envelope'}></i>Contact me</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={'container mt-8'}>
          <div className={'grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]'}>
            <div className={'mx-auto mt-8'}>
              <img src={'images/logos/laravel.svg'} className={'h-12'} alt={'Laravel'} />
            </div>

            <div className={'mx-auto mt-8'}>
              <img src={'images/logos/typescript.svg'} className={'h-12'} alt={'TypeScript'} />
            </div>

            <div className={'mx-auto mt-8'}>
              <img src={'images/logos/node-js.svg'} className={'h-12'} alt={'NodeJS'} />
            </div>

            <div className={'mx-auto mt-8'}>
              <img src={'images/logos/next-js.svg'} className={'h-12'} alt={'Next.js'} />
            </div>

            <div className={'mx-auto mt-8'}>
              <img src={'images/logos/react-js.svg'} className={'h-12'} alt={'ReactJS'} />
            </div>

            <div className={'mx-auto mt-8'}>
              <img src={'images/logos/postgresql.svg'} className={'h-12'} alt={'PostgreSQL'} />
            </div>
          </div>
        </div>
      </section>

      <SectionExperience data={dataExperiences?.experiences} />

      <section className={'relative md:pb-24 pb-16'}>
        <ContactMe />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await client.query(PageDocument, {
    slug: 'about-me'
  }).toPromise();
  await client.query(ExperiencesDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
};

export default AboutMe;