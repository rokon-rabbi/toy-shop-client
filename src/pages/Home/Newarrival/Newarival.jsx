import { FaRegStar, FaStar } from "react-icons/fa";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Rating from "react-rating";
const Newarival = () => {
  return (
    <div className=" bg-zinc-50 md:h-auto relative h-full  ">
      <div
        className="absolute inset-0  bg-cover bg-center"
        style={{
          backgroundImage: `url("https://www.wallpaperflare.com/static/195/1015/646/minimalism-digital-art-simple-kite-wallpaper.jpg")`,
          opacity: "0.5",
        }}
      ></div>

      <div className="grid md:grid-cols-6 grid-cols-1 md:gap-4 gap-2 p-20 ">
        <Card className="w-auto h-72   shadow-xl border-slate-50 border-2 p-0">
          <CardHeader shadow={false} floated={false} className="h-auto ">
            <img
              src="https://images.pexels.com/photos/15474628/pexels-photo-15474628/free-photo-of-person-in-costume-of-a-genie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-48 cursor-pointer object-cover hover:scale-110  transition duration-1000 ease-in-out overflow-hidden"
            />
          </CardHeader>
          <CardBody className="py-4 px-1">
            <div className="flex items-center justify-between mb-2">
              <Typography color="blue-gray" className="  font-bold ">
                {"Disney zin"}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-bold bg-slate-50 rounded "
              >
                ${15.99}
              </Typography>
            </div>
            <p className="card-text text-center  font-bold ">
              <Rating
                placeholderRating={4.4}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning "></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>{" "}
              ({4.4})
            </p>
          </CardBody>
        </Card>
        <Card className="w-auto h-72   shadow-xl border-slate-50 border-2 p-0">
          <CardHeader shadow={false} floated={false} className="h-auto ">
            <img
              src="https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-48 cursor-pointer object-cover hover:scale-110  transition duration-1000 ease-in-out overflow-hidden"
            />
          </CardHeader>
          <CardBody className="py-4 px-1">
            <div className="flex items-center justify-between mb-2">
              <Typography color="blue-gray" className="  font-bold ">
                {"Disney Emoji"}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-bold bg-slate-50 rounded "
              >
                ${11.99}
              </Typography>
            </div>
            <p className="card-text text-center  font-bold ">
              <Rating
                placeholderRating={4.2}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning "></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>{" "}
              ({4.2})
            </p>
          </CardBody>
        </Card>
        <Card className="w-auto h-72   shadow-xl border-slate-50 border-2 p-0">
          <CardHeader shadow={false} floated={false} className="h-auto ">
            <img
              src="https://images.pexels.com/photos/10718305/pexels-photo-10718305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-48 cursor-pointer object-cover hover:scale-110  transition duration-1000 ease-in-out overflow-hidden"
            />
          </CardHeader>
          <CardBody className="py-4 px-1 ">
            <div className="flex items-center justify-between mb-2">
              <Typography color="blue-gray" className="  font-bold ">
                {"Disney Olaf"}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-bold bg-slate-50 rounded "
              >
                ${17.99}
              </Typography>
            </div>
            <p className="card-text text-center  font-bold ">
              <Rating
                placeholderRating={4.5}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning "></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>{" "}
              ({4.5})
            </p>
          </CardBody>
        </Card>
        <Card className="w-auto h-72   shadow-xl border-slate-50 border-2 p-0">
          <CardHeader shadow={false} floated={false} className="h-auto ">
            <img
              src=" https://images.pexels.com/photos/1364562/pexels-photo-1364562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-48 cursor-pointer object-cover hover:scale-110  transition duration-1000 ease-in-out overflow-hidden"
            />
          </CardHeader>
          <CardBody className="py-4 px-1">
            <div className="flex items-center justify-between mb-2">
              <Typography color="blue-gray" className="  font-bold ">
                {"Disney Micky"}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-bold bg-slate-50 rounded "
              >
                ${10.75}
              </Typography>
            </div>
            <p className="card-text text-center  font-bold ">
              <Rating
                placeholderRating={4.0}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning "></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>{" "}
              ({4.0})
            </p>
          </CardBody>
        </Card>
        <Card className="w-auto h-72   shadow-xl border-slate-50 border-2 p-0">
          <CardHeader shadow={false} floated={false} className="h-auto ">
            <img
              src="https://images.pexels.com/photos/2731820/pexels-photo-2731820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-48 cursor-pointer object-cover hover:scale-110  transition duration-1000 ease-in-out overflow-hidden"
            />
          </CardHeader>
          <CardBody className="px-1 py-4">
            <div className="flex items-center justify-between mb-2">
              <Typography color="blue-gray" className="  font-bold ">
                {"Mi"}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-bold bg-slate-50 rounded "
              >
                ${18.75}
              </Typography>
            </div>
            <p className="card-text text-center  font-bold ">
              <Rating
                placeholderRating={3.2}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning "></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>{" "}
              ({3.2})
            </p>
          </CardBody>
        </Card>
        <Card className="w-auto h-72   shadow-xl border-slate-50 border-2 p-0">
          <CardHeader shadow={false} floated={false} className="h-auto ">
            <img
              src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-48 cursor-pointer object-cover hover:scale-110  transition duration-1000 ease-in-out overflow-hidden"
            />
          </CardHeader>
          <CardBody className="py-4 px-1">
            <div className="flex items-center justify-between ">
              <Typography color="blue-gray" className="text-sm  font-bold ">
                {"Disney Dashing Doll"}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-bold bg-slate-50 rounded "
              >
                ${13.5}
              </Typography>
            </div>
            <p className="card-text text-center  font-bold ">
              <Rating
                placeholderRating={4.8}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning "></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>{" "}
              ({4.8})
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Newarival;
