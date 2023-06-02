import Link from 'next/link';

import NavLink from '@/components/header/nav-link';
import ThemeToggle from '@/components/theme-toggle';
import Logo from '@/components/header/logo';

const NAV_ITEMS = [
  { path: 'blog', name: 'Blog' },
  { path: 'about', name: 'About' },
];

export default function Header() {
  return (
    <nav className="flex justify-between py-12 sm:flex-row">
      <Link href="/" className="self-start md:self-auto my-6">
       <Logo />
      </Link>
      <div className="my-6 flex space-x-8  md:self-auto">
        <ul className="flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="text-secondary hover:text-primary whitespace-nowrap py-2 text-lg font-medium transition-all duration-300"
            >
              <NavLink path={item.path}>{item.name}</NavLink>
            </li>
          ))}
          <li>
          <ThemeToggle />
          </li>
        </ul>
        <div className="absolute right-[10vw] top-12 md:static">
         
        </div>
      </div>
    </nav>
  );
}
