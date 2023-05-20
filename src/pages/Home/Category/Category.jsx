import { FaRegStar, FaStar } from "react-icons/fa";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Rating from "react-rating";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
const Category = () => {
  const [openTab, setOpenTab] = useState(1);
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Disney Princess");
  useEffect(() => {
    const url = `http://localhost:3000/DisneyToys?subCategory=${activeTab}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setToys(data));
  }, []);

  const handleTabClick = category => {
    setActiveTab(category);

    // Update the URL and fetch data
    const url = `http://localhost:3000/DisneyToys?subCategory=${category}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setToys(data));
  };

  //   const handleViewDetails = () => {
  //     if (!user) {
  //       Swal.fire({
  //         title: "Please log in",
  //         text: "You need to be logged in to view the details.",
  //         icon: "warning",
  //         showCancelButton: false,
  //         confirmButtonText: "OK",
  //       });
  //     } else {
  //       // User is present, do nothing or perform desired actions
  //     }
  //   };
  return (
    <div className="p-20 mx-auto mb-5 mt-5">
      <p className="md:text-5xl mb-5 text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-12">
      Products By Category
      </p>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-pink-600"
                    : "text-pink-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  handleTabClick("Disney Princess");
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Disney Princess
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-pink-600"
                    : "text-pink-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  handleTabClick("Frozen Dolls");
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Frozen Dolls
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-pink-600"
                    : "text-pink-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  handleTabClick("Animation Characters");
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Animation Characters
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="grid grid-cols-3 gap-10 px-10">
                    {toys.map(toy => (
                      <Card key={toy._id} className="w-auto ">
                        <CardHeader
                          shadow={false}
                          floated={false}
                          className="h-72 "
                        >
                          <img
                            src={toy.pictureURL}
                            className="w-full h-full object-cover"
                          />
                        </CardHeader>
                        <CardBody>
                          <div className="flex items-center justify-between mb-2">
                            <Typography
                              color="blue-gray"
                              className="font-medium h-5 overflow-hidden "
                            >
                              {toy.name}
                            </Typography>
                            <Typography
                              color="blue-gray"
                              className="font-medium bg-slate-200 rounded"
                            >
                              ${toy.price}
                            </Typography>
                          </div>
                          <p className="card-text">
                            Rating:{" "}
                            <Rating
                              placeholderRating={toy.rating}
                              readonly
                              emptySymbol={<FaRegStar></FaRegStar>}
                              placeholderSymbol={
                                <FaStar className="text-warning"></FaStar>
                              }
                              fullSymbol={<FaStar></FaStar>}
                            ></Rating>{" "}
                            ({toy.rating})
                          </p>
                        </CardBody>

                        <Button
                          ripple={false}
                          fullWidth={true}
                          className="bg-blue-gray-900/10 bg-pink-500 hover:bg-pink-600 text-white shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                        >
                          View Details
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
