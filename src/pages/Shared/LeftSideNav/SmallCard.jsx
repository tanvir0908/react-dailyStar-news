/* eslint-disable react/prop-types */

import { BsCalendarEvent } from "react-icons/bs";

export default function SmallCard({ image, title, date, category }) {
  return (
    <div className="my-10">
      <img className="w-full" src={image} alt="" />
      <h3 className="text-2xl text-[#403F3F] font-semibold my-3">{title}</h3>
      <div className="flex">
        <p className="text-[#403F3F] font-medium text-lg">{category}</p>
        <div className="flex ml-48 items-center text-[#9F9F9F] gap-2">
          <BsCalendarEvent />
          <p className="text-lg font-medium ">{date}</p>
        </div>
      </div>
    </div>
  );
}
