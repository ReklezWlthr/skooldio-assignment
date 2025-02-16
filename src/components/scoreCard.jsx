import { Faculty } from "./faculty";
import { Round } from "./round";
import { ScoreDetail } from "./scoreDetail";

export const ScoreCard = ({ data }) => {
  return (
    <div className="w-[442px] h-[493px] rounded-[5px] shadow-container m-4 py-3">
      <Faculty data={data} />
      <div className="h-[1px] bg-[#d8d8d8] mt-[13px] mb-[14px] mx-5" />
      <Round data={data.roundSeats} />
      <ScoreDetail data={data} />
      <div className="h-[1px] bg-[#d8d8d8] mt-[8px] mb-[17px] mx-5" />
      <div className="text-[#48b6a3] pl-[22.5px] cursor-pointer">
        {/* Missing asset */}
        <p className="font-[300]">ดูสัดส่วนคะแนน</p>
      </div>
      <div className="h-[1px] bg-[#d8d8d8] mt-[21px] mb-[10px] mx-5" />
      {/* Missing asset */}
      <div className="font-[300] text-warm-gray text-xs pl-[25px] flex items-center justify-between pr-[17px]">
        <p>
          {/* Cannot find data in JSON */}
          10 <i>คนที่สนใจ</i>
        </p>
        <img src="/share.svg" alt="Share" className="cursor-pointer" />
      </div>
    </div>
  );
};
