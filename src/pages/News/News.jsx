/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import smallImage1 from "../../assets/1.png";
import smallImage2 from "../../assets/2.png";
import smallImage3 from "../../assets/3.png";
import SmallCard from "../Shared/LeftSideNav/SmallCard";
import { BiArrowBack } from "react-icons/bi";
import { useEffect } from "react";

export default function News() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 280,
    });
  }, []);

  const news = useLoaderData();
  const targetNews = news.find((data) => data._id == id);
  const { image_url, title, details, category_id } = targetNews;

  const navigate = useNavigate();
  const handleAllNews = () => {
    navigate("/");
  };

  return (
    <div>
      <div
        className="grid grid-cols-4 gap-5
      "
      >
        <div className="col-span-3">
          <h2 className="text-3xl font-medium mb-10">The Daily Star News</h2>
          <div className="py-5 rounded-lg border px-5">
            <img className="w-full" src={image_url} alt="" />
            <h2 className="my-5 text-3xl font-semibold">{title}</h2>
            <p className="text-xl text-[#706F6F] leading-relaxed">{details}</p>
            <button
              onClick={handleAllNews}
              className="btn bg-[#D72050] font-medium normal-case mt-5 text-white text-lg hover:text-black"
            >
              <BiArrowBack className="text-xl" />
              All news
            </button>
          </div>
          <div>
            <h2 className="text-3xl font-medium mt-10">Editors Insight</h2>
            <div className="grid grid-cols-3 gap-5">
              <SmallCard
                image={smallImage1}
                title={
                  "Bayern Slams Authorities Over Flight Delay to Club World Cup"
                }
                date={"Jan 4, 2022"}
                category={"Sport"}
              />
              <SmallCard
                image={smallImage2}
                title={
                  "Bayern Slams Authorities Over Flight Delay to Club World Cup"
                }
                date={"Jan 4, 2022"}
                category={"Sport"}
              />
              <SmallCard
                image={smallImage3}
                title={
                  "Bayern Slams Authorities Over Flight Delay to Club World Cup"
                }
                date={"Jan 4, 2022"}
                category={"Sport"}
              />
            </div>
          </div>
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}
