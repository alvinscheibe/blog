import { PageQuery } from '../../generated/graphql';

interface HeroProps {
  data?: PageQuery
}

export function Hero({ data }: HeroProps) {
  return (
    <section className={'md:h-screen py-36 h-auto relative flex items-center background-effect bg-index-hero-background 3xl:container overflow-hidden bg-no-repeat'}>
      <div className={'container relative z-1'}>
        <div className={'grid grid-cols-1 mt-5'}>
          <div className={'title-heading'}>
            <div className={'grid md:grid-cols-12 mt-12'}>
              <div className={'lg:col-span-4 md:col-span-6 order-2 lg:order-1 mt-6 md:mt-0'}>
                <div className={'rounded-md lg:shadow-md lg:dark:shadow-gray-800 lg:absolute lg:top-14 lg:bg-white lg:dark:bg-slate-900 lg:p-6'}>
                  <h5 className={'mb-3 text-2xl font-bold lg:text-black lg:dark:text-white text-white'}>{data?.page?.subtitle}</h5>

                  <p className={'para-desc lg:text-slate-400 text-slate-200 dark:text-slate-200 mb-0 text-justify'} style={{maxWidth: '400px'}}>
                    {data?.page?.content.markdown}
                  </p>

                  <div className={'mt-4'}>
                    <a href={'/about-me'} className={'btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md'}>Hire me</a>
                  </div>
                </div>
              </div>

              <div className={'lg:col-span-4 lg:block hidden lg:order-2'}></div>

              <div className={'lg:col-span-4 md:col-span-6 order-1 lg:order-3'}>
                <p className={'text-2xl text-white font-bold lg:text-black lg:dark:text-white'}>👋 Hey! I am</p>
                <h4 className={'lg:text-[64px] lg:leading-[1.1] text-[40px] font-bold lg:text-black lg:dark:text-white text-white mb-0'}>Alvin <br /> Scheibe</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={'absolute inset-0 bg-gradient-to-b lg:from-indigo-600/5 lg:to-indigo-600/20 from-indigo-600/10 to-indigo-600 lg:-z-2'}></div>
      <ul className={'circles p-0 mb-0'}>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
      </ul>
    </section>
  );
}