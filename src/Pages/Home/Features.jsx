import img1 from "/images/quran.png";
import img2 from "/images/dua.png";
import img3 from "/images/name.png";
import img4 from "/images/planner.png";
import img5 from "/images/scheduler.png";
import img6 from "/images/permium.png";
import img7 from "/images/fav.png";
import img8 from "/images/gift.png";

const Features = () => {
  return (
    <div className="bg-[#f7f6f6] py-8 px-32">
      <h2 className="text-2xl md:text-5xl font-bold text-black text-center">
        Our Awesome Features
      </h2>
      <div className="grid grid-cols-4 items-center justify-center gap-4 mt-12 ">
        <div
          className="p-10 text-black hover:text-white  border border-cyan-500 rounded-xl flex flex-col items-center justify-center gap-4 
              hover:bg-gradient-to-r hover:from-[#04a6f6] hover:to-[#53ed83] 
             transition-colors duration-300"
        >
          <img className="h-20 w-30" src={img1} alt="Quran" />
          <p className="text-2xl font-semibold  ">Quran</p>
        </div>
        <div
          className="p-10 text-black hover:text-white  border border-cyan-500 rounded-xl flex flex-col items-center justify-center gap-4 
              hover:bg-gradient-to-r hover:from-[#04a6f6] hover:to-[#53ed83] 
             transition-colors duration-300"
        >
          <img className="h-20 w-30" src={img2} alt="Dua" />
          <p className="text-2xl font-semibold  ">Dua</p>
        </div>
        <div
          className="p-10 text-black hover:text-white  border border-cyan-500 rounded-xl flex flex-col items-center justify-center gap-4 
              hover:bg-gradient-to-r hover:from-[#04a6f6] hover:to-[#53ed83] 
             transition-colors duration-300"
        >
          <img className="h-20 w-30" src={img3} alt="99 Names" />
          <p className="text-2xl font-semibold  ">99 Names</p>
        </div>
        <div
          className="p-10 text-black hover:text-white  border border-cyan-500 rounded-xl flex flex-col items-center justify-center gap-4 
              hover:bg-gradient-to-r hover:from-[#04a6f6] hover:to-[#53ed83] 
             transition-colors duration-300"
        >
          <img className="h-20 w-30" src={img4} alt="Planner" />
          <p className="text-2xl font-semibold  ">Planner</p>
        </div>
        <div
          className="p-10 text-black hover:text-white  border border-cyan-500 rounded-xl flex flex-col items-center justify-center gap-4 
              hover:bg-gradient-to-r hover:from-[#04a6f6] hover:to-[#53ed83] 
             transition-colors duration-300"
        >
          <img className="h-20 w-30" src={img5} alt="Schedule" />
          <p className="text-2xl font-semibold  ">Schedule</p>
        </div>
        <div
          className="p-10 text-black hover:text-white  border border-cyan-500 rounded-xl flex flex-col items-center justify-center gap-4 
              hover:bg-gradient-to-r hover:from-[#04a6f6] hover:to-[#53ed83] 
             transition-colors duration-300"
        >
          <img className="h-20 w-30" src={img6} alt="Premium" />
          <p className="text-2xl font-semibold  ">Premium</p>
        </div>
        <div
          className="p-10 text-black hover:text-white  border border-cyan-500 rounded-xl flex flex-col items-center justify-center gap-4 
              hover:bg-gradient-to-r hover:from-[#04a6f6] hover:to-[#53ed83] 
             transition-colors duration-300"
        >
          <img className="h-20 w-30" src={img7} alt="Favorite" />
          <p className="text-2xl font-semibold  ">Favorite</p>
        </div>
        <div
          className="p-10 text-black hover:text-white  border border-cyan-500 rounded-xl flex flex-col items-center justify-center gap-4 
              hover:bg-gradient-to-r hover:from-[#04a6f6] hover:to-[#53ed83] 
             transition-colors duration-300"
        >
          <img className="h-20 w-30" src={img8} alt="Buy & Gift" />
          <p className="text-2xl font-semibold  ">Buy & Gift</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
