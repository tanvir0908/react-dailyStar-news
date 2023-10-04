/* eslint-disable react/prop-types */
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export default function Rating({ rating }) {
  if (rating < 4.3) {
    return (
      <div className="flex text-2xl text-[#FF8C47]">
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStar></BsStar>
      </div>
    );
  } else if (rating == 4.5) {
    return (
      <div className="flex text-2xl text-[#FF8C47]">
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarHalf></BsStarHalf>
      </div>
    );
  } else if (rating > 4.5) {
    return (
      <div className="flex text-2xl text-[#FF8C47]">
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
      </div>
    );
  }
}
