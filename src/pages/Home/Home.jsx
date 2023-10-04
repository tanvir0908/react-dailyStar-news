import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

export default function Home() {
  const news = useLoaderData();

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1   lg:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        {/* News Container */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-semibold">The Daily Star News Home</h2>
          {news.map((singleNews) => (
            <NewsCard key={singleNews._id} singleNews={singleNews} />
          ))}
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}
