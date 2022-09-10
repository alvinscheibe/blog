export type TagsCloudProps = {
  tags?: Array<{name: string}> | null;
}

export function TagsCloud({ tags }: TagsCloudProps) {
  return (
    <>
      <h5 className={'text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8'}>Tags Cloud</h5>

      <ul className={'list-none text-center mt-8'}>
        {tags && tags.map((tag) => (
          <li key={tag.name} className={'inline-block m-2'}>
            <a href="#" className={'px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out'}>
              {tag.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}