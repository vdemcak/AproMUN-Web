import { ReactElement, ReactNode, useState } from 'react';

export const FAQ = ({ children }: { children: ReactElement<typeof FAQItem>[] }) => {
  return (
    <div className="relative mx-auto mt-24 flex max-w-8xl flex-col px-5 md:mt-48">
      <span className="text-sm font-bold text-primary">INFORMATION</span>
      <span className="text-4xl md:text-7xl">Frequently Asked Questions</span>

      <div className="mt-12 flex flex-col gap-y-5">{children}</div>
    </div>
  );
};

export const FAQItem = ({ question, children }: { question: string; children: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="flex cursor-pointer justify-between " onClick={() => setExpanded(!expanded)}>
        <span className="pr-5 text-base font-bold md:text-lg">{question}</span>
        <img src={expanded ? '/icons/collapse.svg' : '/icons/expand.svg'} alt="Toggle answer" />
      </div>
      <p className="mt-1 w-full md:w-5/6">{expanded && children}</p>
    </div>
  );
};
