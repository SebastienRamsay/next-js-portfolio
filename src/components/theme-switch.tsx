'use client';

import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useThemeContext } from '../../context/theme-context';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      className="backdrop-blur-[0.5rem fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl transition-all hover:scale-[1.15] active:scale-105 dark:border-none dark:border-white/10 dark:bg-white/10"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
