import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

export default function News() {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <Navbar/>
      <div
        className="grid grid-cols-4 gap-5
      "
      >
        <div className="col-span-3 border">
          <h2 className="text-5xl">News Details</h2>
          <p>{id}</p>
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}
