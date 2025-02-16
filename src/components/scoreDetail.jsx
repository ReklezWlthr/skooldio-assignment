export const ScoreDetail = ({ data }) => {
  return (
    <div className="pr-4 mt-3">
      <div className="flex items-center justify-between pl-[23px]">
        <p className="font-[600] text-grape-fruit">รอบที่ 4 : Admission</p>
        <button className="flex items-center gap-x-[11px] text-grape-fruit text-xs font-[500] py-2 pl-5 pr-[10px] border border-grape-fruit rounded-[17.5px]">
          แก้ไขคะแนน
          <img src="/edit-icon.svg" alt="Edit Icon" />
        </button>
      </div>
      <div className="flex justify-between mt-[21px] pl-[50px]">
        <img src="/badge.svg" alt="Badge" />
        <div className="flex flex-col items-end text-[#4a4a4a]">
          <p className="font-[300] text-xs">คะแนนของคุณคือ</p>
          <p className="text-[43px] font-[300] -mt-[7px]">25,453</p>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x-[1.4px] divide-[#d8d8d8] text-[#5f5f5f] mt-[14px]">
        <div className="flex flex-col items-center">
          <p className="text-[19.6px]">
            {data.score?.min?.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            }) || "-"}
          </p>
          <p className="text-[11.2px]">คะแนนต่ำสุด 60</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[19.6px]">
            {data.score?.avg?.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            }) || "-"}
          </p>
          <p className="text-[11.2px]">คะแนนเฉลี่ย 60</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[19.6px]">
            {data.score?.max?.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            }) || "-"}
          </p>
          <p className="text-[11.2px]">คะแนนสูงสุด 60</p>
        </div>
      </div>
    </div>
  );
};
