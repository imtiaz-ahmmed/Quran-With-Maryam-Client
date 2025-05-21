import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "/images/Banner-1.png";
import img2 from "/images/Banner-2.png";
import img3 from "/images/Banner-3.png";

import { AiFillLike } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";

const Banner = () => {
  const onClickItem = (index) => {
    console.log("Clicked item:", index);
  };

  const onClickThumb = (index) => {
    console.log("Clicked thumbnail:", index);
  };

  return (
    <div className="h-[240px] md:h-[543px]">
      <Carousel
        showArrows={true}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div className="relative ">
          <img
            src={img1}
            alt="Slide 1"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start pl-36 justify-center text-black w-5/12">
            <h2 className="text-2xl md:text-5xl font-bold mb-4  capitalize">
              Get all the premium
            </h2>
            <h2 className="text-2xl md:text-5xl font-bold mb-8  capitalize">
              features
            </h2>
            <button
              className="px-6 py-2 rounded-xl text-white font-semibold
             bg-gradient-to-r from-[#04a6f6] to-[#53ed83]
             hover:from-[#0391d4] hover:to-[#44d270]
             transition-colors duration-300"
            >
              Upgrade Now
            </button>
          </div>
        </div>
        <div className="relative ">
          <img
            src={img3}
            alt="Slide 1"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start pl-36 justify-center text-white w-5/12">
            <h2 className="text-2xl md:text-5xl font-bold mb-4  ">
              Visit our official
            </h2>
            <h2 className="text-2xl md:text-5xl font-bold mb-8  ">
              Facebook page
            </h2>
            <button
              className="px-6 py-2 rounded-xl text-white font-semibold
             bg-blue-600 flex  items-center gap-2"
            >
              <AiFillLike /> Follow Us
            </button>
          </div>
        </div>
        <div className="relative ">
          <img
            src={img2}
            alt="Slide 1"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start pl-36 justify-center text-black w-5/12">
            <h2 className="text-2xl md:text-5xl font-bold mb-4  ">
              Subscribe to Our
            </h2>
            <h2 className="text-2xl md:text-5xl font-bold mb-8  capitalize">
              Youtube Channel
            </h2>
            <button
              className="px-6 py-2 rounded-xl text-white font-semibold
             bg-red-600 flex  items-center gap-2"
            >
              <IoLogoYoutube /> SUBSCRIBE
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
