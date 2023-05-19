
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Registerpage = () => {

  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    console.log(name, photo, email, password);
    if (password === "") {
      setError("your password field is empty");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
  
    createUser(name,photo,email, password)
     
  };
  return (
    <div className=" bg-slate-50 relative flex flex-col items-center justify-center   h-full">
       
      <div
        className="absolute inset-0  bg-cover bg-center"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/wooden-car-toys-blue-background-car-toys-background_423236-194.jpg?w=740")`,
          opacity: "0.7",
        }}
      ></div>
      <div className="bg-white relative rounded  px-8 mt-5 mb-5 shadow-2xl pt-8 w-80 md:w-96">
        <p className="text-3xl font-bold text-slate-700 text-center underline m-4">Register</p>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Name
            </label>
            <input
              className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Email
            </label>
            <input
              className="shadow  bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Password
            </label>
            <input
              required
              className="shadow  bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            <p className=" text-xs text-red-500">{error}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Photo URL
            </label>
            <input
            required
              className="shadow  bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photo"
              type="text"
              placeholder="Enter the URL of your photo"
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerpage;
