import logo from "../../../assets/logo.png";
import moment from "moment";

export default function Header() {
  return (
    <div>
      <div className="text-center">
        <img className="w-3/4 mx-auto" src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className="text-xl">{moment().format("dddd, MMMM DD, YYYY")}</p>
      </div>
    </div>
  );
}
