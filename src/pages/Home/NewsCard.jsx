/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function NewsCard({ singleNews }) {
  const { _id, title, image_url, details } = singleNews;
  return (
    <div className="border my-10">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <img className="w-full" src={image_url} alt="" />
        {/* <p className="text-lg">{details.length>200 ? }</p> */}
        {details.length > 500 ? (
          <p className="text-lg text-[#706F6F]">
            {details.slice(0, 500)}
            <Link
              to={`/news/${_id}`}
              className="block font-medium text-[#FF8C47]"
            >
              Read More
            </Link>
          </p>
        ) : (
          <p className="text-lg text-[#706F6F]"> {details}</p>
        )}
      </div>
    </div>
  );
}
