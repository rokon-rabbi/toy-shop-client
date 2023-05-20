import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import "./Alltoys.css"
const Alltoys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const allToys = useLoaderData();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    filterToys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const filterToys = () => {
    if (!searchQuery) {
      setToys(allToys);
    } else {
      const filteredToys = allToys.filter(toy =>
        toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setToys(filteredToys);
    }
  };

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    filterToys();
  };
  const handleDetails = () => {
    if (user) {
      Swal.fire({
        title: "Please log in",
        text: "You need to be logged in to view the details.",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "OK",
      });
    } else {
      // User is present, do nothing or perform desired actions
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen ">
   
      <div className="bg-white rounded-lg shadow  overflow-x-auto md:px-20 py-6 px-2 md:py-10">
           {/* search  */}
      <div className="max-w-sm mb-10 mx-auto">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            className="w-full bg-zinc-200 border py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md"
          >
            Search
          </button>
        </form>
      </div>
      <p className="md:text-5xl mb-5 bg-zinc-50 p-2  text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-12">
        All Toys
      </p>
        <table className="w-full table-auto shadow-2xl">
          <thead className="" >
            <tr className="text-xs   md:font-semibold font-thin text-gray-500 border md:uppercase md:tracking-wide">
              <th className="md:py-3  md:px-4 md:text-left text-center" >Seller</th>
              <th className="md:py-3 md:px-4 md:text-left text-center" >Toy Name</th>
              <th className="md:py-3 md:px-4 md:text-left text-center" >Sub-category</th>
              <th className="md:py-3 md:px-4 md:text-left text-center" >Price</th>
              <th className="md:py-3 md:px-4 md:text-left text-center" >Available Quantity</th>
              <th className="md:py-3 md:px-4 md:text-left text-center" >Details</th>
            </tr>
          </thead>
          <tbody className=" md:text-sm text-xs md:font-normal text-gray-500">
            {toys.map((toy, idx) => (
              <tr key={idx}>
                <td className="md:py-3 text-center px-1  md:px-4">{toy.sellerName}</td>
               
                <td className="md:py-3 px-2 py-2  md:px-4">{toy.name}</td>
                <td className="md:py-3 px-2 py-2  md:px-4">{toy.subCategory}</td>
                <td className="md:py-3  md:px-4">{toy.price}$</td>
                <td className="md:py-3 text-center md:px-4">{toy.quantity}</td>
                <td className="md:py-3  md:px-4">
                  <button
                    onClick={() => handleDetails()}
                    className={`flex bg-white rounded border md:p-2 p-1  hover:bg-red-500 hover:text-white  items-center text-red-600 focus:outline-none `}
                    
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltoys;
