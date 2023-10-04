import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="mx-5 lg:mx-20">
      <Outlet />
    </div>
  );
}
