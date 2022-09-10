export function Footer() {
  let code = '</>';

  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid md:grid-cols-2 items-center">
            <div className="md:text-left text-center">
              <p className="mb-0">{code} with <i className="mdi mdi-heart text-indigo-600"></i> by Alvin Scheibe.</p>
            </div>

            <div className="md:text-right text-center mt-6 md:mt-0">
              <p className={'mb-0'}>v1.0.0</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}