import Link from 'next/link';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import { getContentForHeaderNav } from '@/content/queries';

export default async function Header() {
  const data = await getContentForHeaderNav();
  const links = data?.navigationCollection.items[0].linksCollection.items;
  return (
    <header className="absolute z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center">
              
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    className="mx-4 text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white lg:mx-5"
                    href={link.link}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end">
            <li>
              <Link
                className="whitespace-nowrap text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
                href="/signin"
              >
                Sign in
              </Link>
            </li>
            <li className="ml-6">
              <Link
                className="btn-sm group relative w-full text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/30 hover:text-white"
                href="/signup"
              >
                <span className="relative inline-flex items-center">
                  Sign up{' '}
                  <span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
