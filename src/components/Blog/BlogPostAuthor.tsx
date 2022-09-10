export type BlogPostAuthorProps = {
  name?: string;
  pictureUrl?: string;
}

export function BlogPostAuthor({ name, pictureUrl }: BlogPostAuthorProps) {
  return (
    <>
      <h5 className={'text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center'}>Author</h5>
      <div className={'text-center mt-8'}>
        <img src={pictureUrl} className={'h-24 w-24 mx-auto rounded-full shadow mb-4'} alt={name} />

        <a href="#" className={'text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out'}>
          {name}
        </a>
      </div>
    </>
  );
}