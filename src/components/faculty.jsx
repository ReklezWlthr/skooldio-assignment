export const Faculty = ({ data }) => {
  return (
    <div className="flex items-start pt-px px-3">
      <img
        src={data.logo}
        alt="Engineering Icon"
        className="w-[100px] h-[100px] shrink-0"
      />
      <div className="pt-[11px] w-full px-[10px]">
        <p className="text-2xl font-[600] text-grape-fruit leading-[0.68]">
          {data.faculty.name}
        </p>
        <p className="pt-2 pb-6 text-warm-gray leading-[0.8] font-[500]">
          {data.name}
        </p>
        <p className="text-warm-gray leading-[0.8] font-[300]">
          {data.faculty.university.name}
        </p>
      </div>
      <img src="/heart.svg" alt="Heart" className="pt-[9px] pr-1" />
    </div>
  );
};
