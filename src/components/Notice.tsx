export const Notice = ({ text }: { text: string }) => {
  return (
    <div className="relative mx-auto mt-2 max-w-8xl px-5 opacity-70">
      <span className="text-xs md:text-sm">{text}</span>
    </div>
  );
};
