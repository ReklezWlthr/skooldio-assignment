export const Round = ({ data }) => {
  return (
    <div className="px-5 space-x-[23px] flex items-center">
      <p className="font-[300] text-[#5f5f5f]">รอบที่เปิด</p>
      <div className="flex gap-x-2">
        {[1, 2, 3, 4, 5].map((number, index) => (
          <div
            className={`rounded-full w-[29px] h-[29px] flex items-center justify-center text-white text-[18.4px] font-[500] ${
              data[index] >= 0 ? "bg-greenish-teal" : "bg-[#d8d8d8]"
            }`}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};
