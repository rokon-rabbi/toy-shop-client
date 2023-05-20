import { useState } from "react";

const Addtoy = () => {
  const [pictureURL, setPictureURL] = useState('');
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or further processing here
    // You can access the form values in the form state variables
    // e.g., pictureURL, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description
    console.log('Form submitted:', {
      pictureURL,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
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
    <div className="flex relative flex-col p-6 mx-auto max-w-md  h-full ">
      <div className="bg-white  rounded  px-8 mt-5 mb-5 shadow-2xl pt-8">
        <div className="mb-4">
      <h1 className="text-3xl text-slate-600 font-bold text-center underline pb-8">Add Toy</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="pictureURL">
            Picture URL of the toy
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="pictureURL"
            value={pictureURL}
            onChange={(e) => setPictureURL(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="name">
            Name
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="sellerName">
            Seller Name
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="sellerName"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="sellerEmail">
            Seller Email
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="sellerEmail"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="subCategory">
            Sub-category
          </label>
          <select
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subCategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
          >
            <option value="Math Toys">Animation Characters</option>
            <option value="Language Toys">Frozen Dolls</option>
            <option value="Science Toys">Disney Princess</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="price">
            Price
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="rating">
            Rating
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="quantity">
            Available Quantity
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="description">
            Detail Description
          </label>
          <textarea
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};
export default Addtoy;
          