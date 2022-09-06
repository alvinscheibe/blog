import { ExperienceDuration } from './ExperienceDuration';
import { ExperienceDescription } from './ExperienceDescription';

type Experience = {
  company: string,
  duration: string,
  job: string,
  description: string,
  order: number,
  companyImage?: { __typename?: 'Asset', url: string } | null
};

type SectionExperienceProps = {
  data?: Array<Experience>
}

export function SectionExperience({ data }: SectionExperienceProps) {
  let loop = -1;

  return (
    <section className={'relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800'}>
      <div className={'container'}>
        <div className={'grid grid-cols-1 pb-8 text-center'}>
          <h6 className={'text-indigo-600 text-sm font-bold uppercase mb-2'}>Experience</h6>
          <h3 className={'mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'}>
            Work Experience
          </h3>
        </div>

        <div className={'grid grid-cols-1 mt-8'}>
          <div className={'timeline relative'}>
            {data?.map((experience) => {
              loop++;
              return (
                <div className={'timeline-item' + ((loop > 0)? ' mt-12' : '')} key={experience.order}>
                  <div className={'grid sm:grid-cols-2'}>
                    <div className={(loop > 0)? ((loop%2) === 1? 'md:order-1 order-2' : 'mt-4 mt-sm-0') : 'mt-4 md:mt-0'}>
                      {(loop%2) === 0?
                        <ExperienceDuration companyName={experience.company} duration={experience.duration} classFloat={'date-label-left md:text-right md:mr-8'} companyLogoPath={experience.companyImage? experience.companyImage.url : null} classImage={'md:ml-auto'} /> :
                        <ExperienceDescription title={experience.job} description={experience.description} classFloat={'event-description-left float-left text-right md:mr-8'} />
                      }
                    </div>

                    <div className={(loop > 0)? ((loop%2) === 1? 'md:order-2 order-1' : 'mt-4 mt-sm-0') : ''}>
                      {(loop%2) === 0?
                        <ExperienceDescription title={experience.job} description={experience.description} classFloat={'event-description-right float-left text-left md:ml-8'} /> :
                        <ExperienceDuration companyName={experience.company} duration={experience.duration} classFloat={'duration-right md:ml-8'} companyLogoPath={experience.companyImage? experience.companyImage.url : null} />
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}