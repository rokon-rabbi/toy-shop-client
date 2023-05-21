import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const Mytoy = () => {

  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const [selectedOption, setSelectedOption] = useState('asc');
  
  const handleSortChange = (event) => {
    const value = event.target.value;
   
    if(value=="highToLow"){
      setSelectedOption('desc');
      

    }
    else{
      setSelectedOption('asc');
      
    }
    // Perform sorting logic here based on the selected option
  };


  useEffect(() => {
    document.title = "Toytopia | Mytoy"; // Update the title for the Home route
  }, []);



  useEffect(() => {
    if (user) {
      const url = `https://toy-marketplace.vercel.app/DisneyToys?sellerEmail=${user.email}&sort=${selectedOption}`;
      fetch(url)
        .then(res => res.json())
        .then(data => setToys(data));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [user,selectedOption]);
    

  const handleDelete = id => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`https://toy-marketplace.vercel.app/DisneyToys/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "Toy Deleted Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            const remaining = toys.filter(booking => booking._id !== id);
            setToys(remaining);
          }
        });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="bg-white rounded-lg shadow  overflow-x-auto md:px-20 py-6 px-2 md:py-10">
        <p className="md:text-5xl mb-5 bg-zinc-50 p-2  text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-12">
          My Toys
        </p>
        <div className="relative inline-block">
      <select
        value={selectedOption}
        onChange={handleSortChange}
        className="block font-bold text-black appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option className="font-bold text-black" value="default">Sort by Price</option>
        <option  className="font-bold text-black" value="lowToHigh">Low to High</option>
        <option className="font-bold text-black" value="highToLow">High to Low</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 12l-4-4h8l-4 4z"
          />
        </svg>
      </div>
    </div>
  );
        <table className="w-full table-auto shadow-2xl">
          <thead className="">
            <tr className="text-xs   font-bold  text-gray-900 border md:uppercase md:tracking-wide">
              <th className="md:py-3  md:px-4 md:text-left text-center">
                Seller
              </th>
              <th className="md:py-3 md:px-4 md:text-left text-center">
                Toy Name
              </th>
              <th className="md:py-3 md:px-4 md:text-left text-center">
                Sub-category
              </th>
              <th className="md:py-3 md:px-4 md:text-left text-center">
                Price
              </th>
              <th className="md:py-3 md:px-4 md:text-left text-center">
                Ratings
              </th>
              <th className="md:py-3 md:px-4 md:text-left text-center">
                Description
              </th>
              <th className="md:py-3 md:px-4 md:text-left text-center">
                Available Quantity
              </th>
              <th className="md:py-3 md:px-4 md:text-left text-center">
                Update
              </th>
              <th className="md:py-3 md:px-4 md:text-left text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className=" md:text-sm text-xs font-bold text-gray-500">
            {toys.map((toy, idx) => (
              <tr key={idx}>
                <td className="md:py-3 text-center px-1  md:px-4">
                  {toy.sellerName}
                </td>

                <td className="md:py-3 px-2 py-2  md:px-4">{toy.name}</td>
                <td className="md:py-3 px-2 py-2  md:px-4">
                  {toy.subCategory}
                </td>
                <td className="md:py-3  md:px-4">{toy.price}$</td>
                <td className="md:py-3 text-center ">{toy.rating}</td>
                <td className="md:py-3 text-center md:px-4">
                  {toy.description}
                </td>
                <td className="md:py-3 text-center md:px-4">{toy.quantity}</td>
                <td className="md:py-3  md:px-4">
                  <Link to={`/update/${toy._id}`}>
                    <button
                      className={`flex bg-white rounded border md:p-2 p-1  hover:bg-red-500 hover:text-white  items-center text-red-600 focus:outline-none `}
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td className="md:py-3  md:px-4">
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className={`flex bg-white rounded border md:p-2 p-1  hover:bg-red-500 hover:text-white  items-center text-red-600 focus:outline-none `}
                  >
                    Delete
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

export default Mytoy;
