const Info = (
  { title, description }: { title: string; description: string },
) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-[28px] font-bold">
        {title}
      </h2>
      <p className="text-[17px] text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default Info;
