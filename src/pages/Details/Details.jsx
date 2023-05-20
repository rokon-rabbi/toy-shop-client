import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="bg-blue-200  text-gray-900 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-bold mb-6">Data Details</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <table className="w-full border-collapse border-2 ">
            <tbody className="">
              <tr  >
                <td className="py-3 px-6 bg-gray-200 font-semibold">Picture</td>
                <td className="py-3 px-6">
                  <img className="w-48 h-48 object-cover rounded mx-auto" src={data.pictureURL} alt="Product" />
                </td>
              </tr>
              <tr  >
                <td className="py-3 px-6 bg-gray-200 font-semibold">Seller Name</td>
                <td className="py-3 px-6 text-center">{data.sellerName}</td>
              </tr>
              <tr  >
                <td className="py-3 px-6 bg-gray-200 font-semibold">Seller Email</td>
                <td className="py-3 px-6 text-center">{data.sellerEmail}</td>
              </tr>
              <tr  >
                <td className="py-3 px-6 bg-gray-200 font-semibold">Subcategory</td>
                <td className="py-3 px-6 text-center">{data.subCategory}</td>
              </tr>
              <tr  >
                <td className="py-3 px-6 bg-gray-200 font-semibold">Price</td>
                <td className="py-3 px-6 text-center">${data.price}</td>
              </tr>
              <tr  >
                <td className="py-3 px-6 bg-gray-200 font-semibold">Rating</td>
                <td className="py-3 md:px-56 ">
                  <div className="flex items-center ">
                    <span className="text-yellow-500 text-xl  mr-1">&#9733;</span>
                    {data.rating}
                  </div>
                </td>
              </tr>
              <tr className="">
                <td className="py-3 px-6 bg-gray-200 font-semibold">Quantity</td>
                <td className="py-3 text-center px-6">{data.quantity}</td>
              </tr>
              <tr className="">
                <td className="py-3 px-6 bg-gray-200 font-semibold">Description</td>
                <td className="py-3 text-justify px-6">{data.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default Details;