import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Update = () => {
  const toys = new useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    pictureURL,
    name,
    subCategory,
    sellerName,
    price,
    description,
    sellerEmail,
    rating,
    quantity,
  } = toys;
  console.log(toys);
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const pictureURL = form.pictureURL.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updateToy = {
      pictureURL,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(updateToy);

    fetch(`https://toy-marketplace.vercel.app/DisneyToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        form.reset();
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Toy Updated Successfully!",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/mytoy"); // Navigate to "my-toys" page
          });
        }
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
            <h1 className="text-3xl text-slate-600 font-bold text-center underline pb-8">
              Add Toy
            </h1>
            <form className="text-black" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="pictureURL">
                  Picture URL of the toy
                </label>
                <input
                  className="shadow font-bold bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="pictureURL"
                  defaultValue={pictureURL}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow font-bold bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  defaultValue={name}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="sellerName">
                  Seller Name
                </label>
                <input
                  className="shadow font-bold bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="sellerName"
                  defaultValue={sellerName}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="sellerEmail">
                  Seller Email
                </label>
                <input
                  className="shadow font-bold bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  id="sellerEmail"
                  defaultValue={sellerEmail}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="subCategory">
                  Sub-category
                </label>
                <select
                  className="shadow bg-white font-bold appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subCategory"
                  defaultValue={subCategory}
                  required
                >
                  <option value="Animation Characters">
                    Animation Characters
                  </option>
                  <option value="Frozen Dolls">Frozen Dolls</option>
                  <option value="Disney Princess">Disney Princess</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="price">
                  Price
                </label>
                <input
                  className="shadow font-bold bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id="price"
                  defaultValue={price}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="rating">
                  Rating
                </label>
                <input
                  className="shadow font-bold bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  step="0.01"
                  id="rating"
                  defaultValue={rating}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="quantity">
                  Available Quantity
                </label>
                <input
                  className="shadow font-bold bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id="quantity"
                  defaultValue={quantity}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="description">
                  Detail Description
                </label>
                <textarea
                  className="shadow bg-white font-bold appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  defaultValue={description}
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

export default Update;
