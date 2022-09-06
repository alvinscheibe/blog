import { CodeIcon } from '@heroicons/react/solid';

type ExperienceDurationProps = {
  companyName: string;
  companyLogoPath?: string | null;
  duration: string;
  classFloat: string;
  classImage?: string | null;
}

export function ExperienceDuration(props: ExperienceDurationProps) {
  return (
    <div className={'duration ' + props.classFloat + ' relative'}>
      {props.companyLogoPath?
        <img src={props.companyLogoPath} className={'rounded-full h-9 w-9 ' + (props.classImage?? '')} alt={props.companyName} /> :
        <span className={'btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white'}>
          <CodeIcon className={'h-7 w-7'} />
        </span>
      }
      <h5 className={'my-2 font-semibold'}>{props.companyName}</h5>
      <h6 className={'text-slate text-sm mb-0'}>{props.duration}</h6>
    </div>
  );
}