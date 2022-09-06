import { useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/solid';

export function BackToTop() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  });

  const scrollFunction = () => {
    let backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton != null) {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopButton.classList.add('block');
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
        backToTopButton.classList.remove('block');
      }
    }
  }

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <a href="#"
       onClick={topFunction}
       id="back-to-top"
       className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9">
      <ArrowUpIcon className={'scale-50'} />
    </a>
  );
}