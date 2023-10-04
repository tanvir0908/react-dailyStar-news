import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import moment from "moment";

export default function Header() {
  return (
    <div className="text-center my-8">
      <Link to={"/"}>
        <img className="w-96 mx-auto" src={logo} alt="" />
      </Link>
      <p className="my-3 text-lg text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium text-[#403F3F]">
        {moment().format("dddd, MMMM DD, YYYY")}
      </p>
    </div>
  );
}
