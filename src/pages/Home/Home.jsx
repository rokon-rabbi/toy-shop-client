import Slider from "../Slider/Slider";
import Category from "./Category/Category";
import Gallery from "./gallery/Gallery";
import Subscribe from "./subscribe/Subscribe";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Newarival from "./Newarrival/Newarival";

const Home = () => {
  useEffect(() => {
    document.title = "Toytopia | Home"; // Update the title for the Home route
  }, []);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 300,
    }); // Initialize AOS with desired options
  }, []);
  return (
    <div>
      {/* slider  */}
      <div data-aos="fade-up">
        <Slider></Slider>
      </div>
      {/* gallery  */}
      <div data-aos="fade-up">
        <p className="md:text-6xl p-2 bg-zinc-50  text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-12">
          Gallery
        </p>
        <Gallery></Gallery>
      </div>
      <p className="md:text-xl  text-md font-semibold  text-gray-900 text-center  ">
        We’ve picked few pieces we’re pretty sure you’ll love. <br />
        Check back often and enjoy.
      </p>
      <div data-aos="fade-up">
        <Category></Category>
      </div>
      <div data-aos="fade-up">
        <p className="md:text-5xl mb-2 p-2 bg-zinc-50 underline decoration-wavy decoration-cyan-300 text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-12">
          New Arrivals
        </p>

        <Newarival></Newarival>
      </div>
      {/* subscribe  */}
      <div data-aos="fade-up">
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
