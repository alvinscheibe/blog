import siteConfig from '../../../site.config';

export function Footer() {
  let code = '</>';

  return (
    <footer className={'footer bg-dark-footer relative text-gray-200 dark:text-gray-200'}>
      <div className={'py-[30px] px-0 border-t border-slate-800'}>
        <div className={'container text-center'}>
          <div className={'grid md:grid-cols-2 items-center'}>
            <div className={'md:text-left text-center'}>
              <p className={'mb-0'}>{code} with <i className={'mdi mdi-heart text-indigo-600'}></i> by {siteConfig.author.name}.</p>
            </div>

            <div className={'md:text-right text-center mt-6 md:mt-0'}>
              <p className={'mb-0'}>v{siteConfig.siteVersion}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}