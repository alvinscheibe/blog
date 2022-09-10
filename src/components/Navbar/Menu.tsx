import { HeartIcon, CodeIcon } from '@heroicons/react/solid';

export function Menu() {
  return (
    <>
      <ul className="buy-button list-none mb-0 hidden md:block">
        <li className="inline mb-0">
          <a href="">
            <span className="login-btn-primary">
              <span className="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white">
                <i className={'mdi mdi-github text-2xl'}></i>
              </span>
            </span>
            <span className="login-btn-light">
              <span className="btn btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                <i className={'mdi mdi-github text-2xl'}></i>
              </span>
            </span>
          </a>
        </li>

        <li className="inline pl-1 mb-0">
          <a href="" target="_blank">
            <div className="login-btn-primary">
              <span className="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white">
                <HeartIcon className={'h-5 w-5'} />
              </span>
            </div>
            <div className="login-btn-light">
              <span className="btn btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                <HeartIcon className={'h-5 w-5'} />
              </span>
            </div>
          </a>
        </li>
      </ul>

      <div id={'navigation'}>
        <ul className={'navigation-menu'}>
          <li><a href={'/'} className={'sub-menu-item'}>Home</a></li>
          <li><a href={'/about-me'} className={'sub-menu-item'}>About me</a></li>
          <li><a href={'/blog'} className={'sub-menu-item'}>Blog</a></li>
        </ul>
      </div>
    </>
  );
}