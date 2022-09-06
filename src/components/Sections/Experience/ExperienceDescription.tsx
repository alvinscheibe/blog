type ExperienceDescriptionProps = {
  title: string;
  description: string;
  classFloat: string;
}

export function ExperienceDescription(props: ExperienceDescriptionProps) {
  return (
    <div className={'event ' + props.classFloat}>
      <h5 className={'title mb-1 font-semibold'}>{props.title}</h5>
      <p className={'timeline-subtitle mt-3 mb-0 text-slate-400'}>{props.description}</p>
    </div>
  );
}