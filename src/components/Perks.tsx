import { ReactElement } from 'react';

export const Perks = ({ children }: { children: ReactElement<typeof PerksItem>[] }) => {
  return (
    <div className="md:pt-12">
      <hr className="hidden md:block" />
      <div className="mx-auto -mt-12 flex max-w-8xl flex-col items-start gap-x-32 px-5 md:flex-row ">{children}</div>
    </div>
  );
};

export const PerksItem = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="mt-5 flex flex-1 flex-col items-start md:mt-0">
      <div className="-ml-3 bg-white p-3">
        <img src={icon} alt="Committees section icon" />
      </div>
      <span className="text-xl font-medium">{title}</span>
      <span className="md:mt-2">{description}</span>
    </div>
  );
};
