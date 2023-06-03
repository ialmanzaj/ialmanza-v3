'use client';

import { useTheme } from 'next-themes';
import { BsMoon, BsMoonFill, BsSun } from 'react-icons/bs';

import useMounted from '@/hooks/use-mounted';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const iconCN = 'z-10 h-8 w-8 p-[0.4rem]';

  return (
    <>
    <button
     onClick={() =>
      setTheme(
        theme === 'light' ? 'dark' : theme === 'system' ? 'dark' : 'light'
      )
    }
    className='p-2 ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100'
    >
    {mounted && theme === 'light' ? (
             <BsMoonFill
             className={`${iconCN} text-black`}
             onClick={() => setTheme('dark')}
           />
        ) : (
      
            <BsSun
            className={`${iconCN} text-white`}
            onClick={() => setTheme('light')}
          />
        )}
    </button>
    </>
  );
}
