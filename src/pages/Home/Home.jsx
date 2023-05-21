import Slider from "../Slider/Slider";
import Category from "./Category/Category";
import Gallery from "./gallery/Gallery";
import Subscribe from "./subscribe/Subscribe";


const Home = () => {
  return (
    <div>
      {/* slider  */}
     <Slider></Slider>
       {/* gallery  */}
       <p className="md:text-6xl p-2 bg-zinc-50  text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-12">
        Gallery
      </p>
      <Gallery></Gallery>
      <p className="md:text-xl  text-xs  text-gray-900 text-center  ">We’ve picked few pieces we’re pretty sure you’ll love. <br />
Check back often and enjoy.</p>
     <Category></Category>
     {/* subscribe  */}
     <Subscribe></Subscribe>
   

    </div>
  );
};

export default Home;