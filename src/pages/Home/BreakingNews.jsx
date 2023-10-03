import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function BreakingNews() {
  return (
    <div className="bg-[#F3F3F3] px-8 rounded-lg py-4 flex items-center">
      <button className="bg-[#D72050] w-2/12 text-white text-xl font-medium mr-8 px-5 py-5 rounded-lg ">
        Breaking News
      </button>
      <div className="w-full">
        <Marquee pauseOnHover={true} speed={100}>
          <Link className="text-xl font-medium mr-5">
            Match Highlights: Germany vs Spain — as it happened !
          </Link>
          <Link className="text-xl font-medium mr-5">
            Match Highlights: Germany vs Spain — as it happened !
          </Link>
          <Link className="text-xl font-medium mr-5">
            Match Highlights: Germany vs Spain — as it happened !
          </Link>
        </Marquee>
      </div>
    </div>
  );
}
