import capture1 from "../../../assets/capture.png";
import capture2 from "../../../assets/1capture.png";
import capture3 from "../../../assets/2capture.png";
import capture4 from "../../../assets/3capture.png";
const Gallery = () => {
  return (
    <section className="p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {/* Card 1 */}
        <div className="bg-white rounded-lg ">
          <img
            src={capture1}
            alt="Card 1"
            className="w-full h-auto cursor-pointer object-cover rounded-xl"
          />
        </div>
        <div className="bg-white rounded-lg ">
          <img
            src={capture2}
            alt="Card 1"
            className="w-full h-auto object-cover cursor-pointer rounded-xl"
          />
        </div>
        <div className="bg-white rounded-lg">
          <img
            src={capture3}
            alt="Card 1"
            className="w-full h-auto object-cover cursor-pointer rounded-xl"
          />
        </div>
        <div className="bg-white rounded-lg ">
          <img
            src={capture4}
            alt="Card 1"
            className="w-full h-auto object-cover cursor-pointer rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
