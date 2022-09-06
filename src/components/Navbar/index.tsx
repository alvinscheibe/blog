import { useEffect } from 'react';
import { Menu } from './Menu';
import { ToggleMenu } from './ToggleMenu';

export function Navbar() {
  useEffect(() => {
    window.addEventListener('scroll', (ev) => {
      ev.preventDefault();
      windowScroll();
    });
  });

  const windowScroll = () => {
    const navbar = document.getElementById('topnav');

    if (navbar != null) {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      )
        navbar.classList.add('nav-sticky');
      else
        navbar.classList.remove('nav-sticky');
    }
  }

  return (
    <nav id={'topnav'} className={'defaultscroll is-sticky'}>
      <div className={'container'}>
        <a href={'/'} className={'logo'}>
          <p className={'font-bold text-black dark:text-white'} style={{minHeight: '17px', padding: '25px 0'}}>
            <span className={'font-bold text-indigo-700'}>&lt;</span>alvinscheibe<span className={'text-indigo-700'}>&nbsp;/&gt;</span>
          </p>
        </a>

        <ToggleMenu />
        <Menu />
      </div>
    </nav>
  );
}