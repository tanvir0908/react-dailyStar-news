import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function Login() {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((result) => {
        console.log(result);
        e.target.email.value = "";
        e.target.password.value = "";
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* Login Form */}
      <h2 className="text-4xl font-semibold text-center my-10">Please Login</h2>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-2/6 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
          />
          <label className="label ">
            <Link
              to={"/reset"}
              className="label-text-alt font-medium text-lg link link-hover"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6 ">
          <button className="bg-[#403F3F] text-white hover:text-black btn normal-case text-lg">
            Login
          </button>
        </div>
      </form>
      <p className="text-center my-5 text-[#706F6F] font-medium">
        Do not have an account?{" "}
        <Link className="font-medium text-[#F75B5F]" to={"/register"}>
          Register
        </Link>
      </p>
    </div>
  );
}
