interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <section className={'relative table w-full py-12 lg:py-16 bg-indigo-500 dark:bg-indigo-900 bg-blog-header-background bg-no-repeat bg-center'}>
      <div className={'container'}>
        <div className={'grid grid-cols-1 text-center mt-20 lg:mt-10'}>
          <h3 className={'md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white'}>
            {title}
          </h3>
        </div>
      </div>
    </section>
  );
}
