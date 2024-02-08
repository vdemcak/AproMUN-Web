import { ReactElement } from 'react';
import Marquee from 'react-fast-marquee';

export const Partners = ({ children }: { children: ReactElement<typeof PartnersItem>[] }) => {
  return (
    <>
      <div className="relative mx-auto mt-48 flex max-w-8xl flex-col items-center px-5">
        <span className="text-center text-sm font-bold text-primary">OUR PARTNERS</span>
        <span className="text-center text-4xl md:text-7xl">
          Partners, who support <br />
          <mark>our conference</mark>
        </span>
      </div>
      <Marquee className="mt-10">{children}</Marquee>
    </>
  );
};

export const PartnersItem = ({ logo, alt, className }: { logo: string; alt: string; className?: string }) => {
  return (
    <img
      className={
        'h-8 cursor-pointer px-5 grayscale transition duration-200 ease-in-out hover:grayscale-0 md:h-12 md:px-10 ' +
        className
      }
      src={logo}
      alt={alt}
    />
  );
};
