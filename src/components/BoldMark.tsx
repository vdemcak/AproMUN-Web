import { ReactNode } from 'react';

export const BM = ({ children }: { children: ReactNode }) => {
  return <mark className="font-bold">{children}</mark>;
};
