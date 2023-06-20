import Link from 'next/link';

import Logo from '@/components/header/logo';
import NavLink from '@/components/header/nav-link';
import ThemeToggle from '@/components/theme-toggle';

const NAV_ITEMS = [{ path: 'blog', name: 'Blog' }];

export default function Header() {
  return (
    <nav className="flex justify-between py-12 sm:flex-row">
      <Link href="/" className="my-auto mr-3.5 self-start md:self-auto">
        <Logo />
      </Link>
      <div className="my-auto flex space-x-8  md:self-auto">
        <ul className="flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="text-secondary hover:text-primary whitespace-nowrap py-2 text-lg font-medium transition-all duration-300"
            >
              <NavLink path={item.path}>{item.name}</NavLink>
            </li>
          ))}
          <li className="top-12">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
