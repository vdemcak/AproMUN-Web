import { useScrollPosition } from 'react-use-scroll-position';

export const Header = ({ dark }: { dark?: boolean }) => {
  const { y } = useScrollPosition();

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 py-6 transition-all duration-300 ease-in-out ${
        y != 0 || dark ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
      <div className="mx-auto flex max-w-8xl items-center justify-between">
        <a href="/">
          <img className={`w-40 ${y != 0 || dark ? 'invert' : ''}`} src="/icons/logo.svg" alt="AproMUN Logo" />
        </a>
        <nav className="hidden md:block">
          <ul className="flex justify-end space-x-10">
            <NavLink href="/" text="Home" dark={dark} />
            <NavLink href="/committees" text="Committees" dark={dark} />
            <NavLink href="/about" text="About Us" dark={dark} />
            {/* <NavLink href="#" text="Contact" dark={dark} /> */}
            <li>
              <a
                href="https://mymun.com/conferences/apromun-2023"
                className={`relative w-min rounded-full border-2 px-5 py-2 transition-all duration-300 ease-in-out ${
                  y != 0 || dark
                    ? 'border-black text-black hover:border-primary hover:bg-primary hover:text-white'
                    : 'border-white text-white'
                }`}>
                <span className={`relative z-10 whitespace-nowrap font-bold `}>SIGN UP NOW</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ href, text, dark }: { href: string; text: string; dark?: boolean }) => {
  const { y } = useScrollPosition();

  return (
    <li>
      <a
        href={href}
        className={`link link-underline pb-1 font-medium transition-all duration-300 ease-in-out ${
          y != 0 || dark ? 'text-black' : 'link-underline-white text-white'
        }`}>
        {text}
      </a>
    </li>
  );
};
