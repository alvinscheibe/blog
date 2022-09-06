import React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export function Switcher() {
  const { theme, setTheme } = useTheme();

  const changeTheme = (event: React.MouseEvent<HTMLInputElement>) => {
    setTheme(theme === 'dark'? 'light' : 'dark');
  }

  return (
    <div className={'fixed top-1/4 -right-1 z-3'}>
      <span className={'relative inline-block rotate-90'}>
          <input type={'checkbox'} className={'checkbox opacity-0 absolute'} id={'chk'} onClick={changeTheme} />
          <label className={'label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8'} htmlFor={'chk'}>
              <MoonIcon className={'h-5 w-5 text-yellow-500'} />
              <SunIcon className={'h-5 w-5 text-yellow-500'} />
              <span className={'ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7'}></span>
          </label>
      </span>
    </div>
  );
}