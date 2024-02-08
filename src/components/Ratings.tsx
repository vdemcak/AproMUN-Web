import { ReactElement } from 'react';

export const Ratings = ({ children }: { children: ReactElement<typeof RatingsItem>[] }) => {
  return (
    <div className="mt-12 flex w-full flex-col px-5 md:mx-auto md:mt-80 md:max-w-8xl">
      <span className="text-4xl md:text-7xl">
        The ratings speak <br />
        <mark>for themselves</mark>
      </span>

      <div className="flex flex-col gap-x-5 md:flex-row">{children}</div>
    </div>
  );
};

export const RatingsItem = ({ text }: { text: string }) => {
  return (
    <div className="mt-5 flex-1 rounded-lg border-2 border-primary p-6 md:mt-24">
      <img src="/icons/stars.svg" alt="5 Stars" />
      <p className="mt-2 text-sm font-medium md:text-base">{text}</p>
    </div>
  );
};
