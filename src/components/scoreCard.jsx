import { Faculty } from "./faculty";
import { Round } from "./round";
import { ScoreDetail } from "./scoreDetail";

export const ScoreCard = ({ data }) => {
  return (
    <div className="w-[442px] h-[493px] rounded-[5px] shadow-container m-4 py-3">
      <Faculty data={data} />
      <div className="h-[3px] bg-[#d8d8d8] mt-[13px] mb-[14px] mx-5" />
      <Round data={data.roundSeats} />
      <ScoreDetail data={data} />
    </div>
  );
};
