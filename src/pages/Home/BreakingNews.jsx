import Marquee from "react-fast-marquee";

export default function BreakingNews() {
  return (
    <div className="bg-[#F3F3F3] px-8 rounded-lg py-5">
      <button className="bg-[#D72050] text-white font-medium px-5 py-3 rounded-lg text-xl">
        Breaking News
      </button>
      <Marquee pauseOnHover={true}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
}
