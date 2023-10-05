import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

export default function Home() {
  const news = useLoaderData();
  const [categoryId, setCategoryID] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const filteredData = news.filter((data) => {
    if (data.category_id === categoryId) {
      return data.category_id;
    }
  });

  return (
    <div>
      <div className="mb-10">
        <BreakingNews />
      </div>

      <div className="grid grid-cols-1   lg:grid-cols-4 gap-6">
        <div>
          <LeftSideNav setCategoryID={setCategoryID} />
        </div>
        {/* News Container */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-semibold">The Daily Star News Home</h2>
          {categoryId == 0
            ? news.map((singleNews) => (
                <NewsCard key={singleNews._id} singleNews={singleNews} />
              ))
            : filteredData.map((singleNews) => (
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
