import { ReactNode } from 'react';

export const ImageBox = ({
  title,
  subtitle,
  children,
  image,
  imageALT,
}: {
  title: ReactNode;
  subtitle: string;
  children: any;
  image: string;
  imageALT: string;
}) => {
  return (
    <div className="mx-auto flex max-w-8xl flex-col items-center gap-y-5 px-5 py-20 md:flex-row md:gap-x-5">
      {/* Left */}
      <div className="flex w-full flex-1 flex-col">
        <span className="text-sm font-bold text-primary">{subtitle}</span>
        <span className="text-5xl md:text-7xl">{title}</span>

        <div className="mt-5 flex gap-x-2">{children}</div>
      </div>

      {/* Right */}
      <div className="w-full flex-1">
        <img className="w-full rounded-lg" src={image} alt={imageALT} />
      </div>
    </div>
  );
};
