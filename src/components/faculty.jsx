export const Faculty = () => {
  return (
    <div className="flex items-start pt-px px-3">
      <img
        src="/engi.svg"
        alt="Engineering Icon"
        className="px-[10px] py-[7px]"
      />
      <div className="pt-[11px] w-full pl-[10px]">
        <p className="text-2xl font-[600] text-grape-fruit leading-[0.67]">
          คณะวิศวกรรมศาสตร์
        </p>
        <p className="pt-2 pb-6 text-warm-gray leading-[0.8]">
          สาขาวิศวกรรมทั่วไป
        </p>
        <p className="text-warm-gray leading-[0.8]">จุฬาลงกรณ์มหาวิทยาลัย</p>
      </div>
      <img src="/heart.svg" alt="Heart" className="pt-[9px] pr-1" />
    </div>
  );
};
