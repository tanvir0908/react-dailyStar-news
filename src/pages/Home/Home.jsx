import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

export default function Home() {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1   lg:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-4xl">News coming soon...</h2>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}
