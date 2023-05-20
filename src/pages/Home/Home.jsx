import Slider from "../Slider/Slider";
import Gallery from "./gallery/Gallery";
import Subscribe from "./subscribe/Subscribe";


const Home = () => {
  return (
    <div>
      {/* slider  */}
     <Slider></Slider>
       {/* gallery  */}
       <p className="md:text-6xl bg-zinc-50  text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-12">
        Gallery
      </p>
      <Gallery></Gallery>
     {/* subscribe  */}
     <Subscribe></Subscribe>
   

    </div>
  );
};

export default Home;