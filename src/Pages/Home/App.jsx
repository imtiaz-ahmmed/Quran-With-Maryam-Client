import img1 from "/images/app.png";
import img2 from "/images/play-store.png";
import img3 from "/images/app-store.png";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto pt-8 mb-12 mt-12 px-6 bg-gradient-to-r from-[#53ed83] to-[#04a6f6] grid grid-cols-2 items-center justify-center rounded-2xl ">
      <div>
        <h2 className="text-2xl md:text-5xl text-black font-bold">
          Download our mobile app,
        </h2>
        <h2 className="text-2xl md:text-5xl text-black font-bold">
          {" "}
          start learning today
        </h2>
        <div className="flex gap-4 items-center mt-8">
          <Link to="/">
            {" "}
            <img className="rounded-2xl" src={img2} alt="" />
          </Link>
          <Link to="/">
            {" "}
            <img className="rounded-2xl" src={img3} alt="" />
          </Link>
        </div>
      </div>
      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default App;
