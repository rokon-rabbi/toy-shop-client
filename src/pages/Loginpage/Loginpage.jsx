import  { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
const Loginpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";
  const { signIn,signInWithGoogle} = useContext(AuthContext);
  
  const [error, setError] = useState("");
 
  const handleGoogle = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    setError("Invalid Email and password");
    signIn(email, password)
      .then(result => {
        setError("");
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
       <div className=" bg-sky-200 relative">
      <div
        className="absolute inset-0  bg-contain bg-center"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/wooden-transportation-toys-blue-background-car-toys-background_423236-198.jpg")`,
          opacity: "0.2",
        }}
      ></div>
      <div className="flex relative flex-col p-6 items-center justify-center h-full ">
        <div className="bg-white  rounded  px-8 mt-5 mb-5 shadow-2xl pt-8">
          <div className="mb-4 text-black font-semibold">
            <p className="text-3xl text-slate-600 font-bold text-center underline pb-8">
              Login
            </p>
            <form className="text-black" onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow font-bold bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow font-bold bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <p className="text-xs text-red-500">{error}</p>
              <div className="mb-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            Don't Have an Account?
            <Link
              to="/register"
              className="mx-8  underline inline-block align-baseline font-bold text-lg text-blue-500 hover:text-blue-800"
            >
              Register
            </Link>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={handleGoogle}
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg md:text-sm  text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
