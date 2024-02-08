export const Person = ({ name, position, image }: { name: string; position: string; image: string }) => {
  return (
    <div className="flex flex-col">
      <img src={image} alt={name} />
      <div className="flex flex-col">
        <span className="mt-2 text-sm font-bold text-primary">{position}</span>
        <span className="-mt-1 text-2xl font-medium">{name}</span>
      </div>
    </div>
  );
};
