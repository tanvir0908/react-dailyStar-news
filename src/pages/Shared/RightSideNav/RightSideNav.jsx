import { BsFacebook, BsGoogle, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

export default function RightSideNav() {
  return (
    <div>
      {/* Login With Section */}
      <div>
        <h2 className="text-3xl font-medium">Login With</h2>
        <div className="flex flex-col gap-5 mt-5">
          <button className="btn btn-outline normal-case text-lg">
            <BsGoogle className="text-xl" />
            Login with Google
          </button>
          <button className="btn btn-outline normal-case text-lg">
            <AiFillGithub className="text-2xl" />
            Login with Github
          </button>
        </div>
      </div>
      {/* Find Us On Section */}

      <div className="my-10">
        <h2 className="text-3xl font-medium">Find Us On</h2>
        <div className="mt-5">
          <a
            href=""
            className="flex gap-2 text-lg p-4 font-medium items-center border border-[#E7E7E7] rounded-t-lg"
          >
            <BsFacebook className="text-2xl" />
            <span className="text-[#706F6F]">Facebook</span>
          </a>
          <a
            href=""
            className="flex gap-2 p-4 text-lg font-medium border-[#E7E7E7] border-x items-center"
          >
            <AiFillTwitterCircle className="text-2xl" />
            <span className="text-[#706F6F]">Twitter</span>
          </a>
          <a
            href=""
            className="flex gap-2 p-4 text-lg font-medium border-[#E7E7E7] items-center border rounded-b-lg"
          >
            <BsInstagram className="text-xl" />
            <span className="text-[#706F6F]">Instagram</span>
          </a>
        </div>
      </div>
      {/* Q-Zone Section */}
      <div className="my-10 p-5 bg-[#F3F3F3] rounded-lg">
        <h2 className="text-3xl font-medium">Q-Zone</h2>
        <div className="my-5">
          <img className="w-5/6 mx-auto" src={qZone1} alt="" />
          <img className="w-5/6 my-2 mx-auto" src={qZone2} alt="" />
          <img className="w-5/6 mx-auto" src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
}
