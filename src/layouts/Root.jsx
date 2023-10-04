import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Navbar from "../pages/Shared/Navbar/Navbar";

export default function Root() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="mx-5 lg:mx-20">
        <Outlet />
      </div>
    </>
  );
}
