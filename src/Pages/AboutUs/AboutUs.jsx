import image1 from "../../../public/images/about.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div class="relative">
        <img src={image1} alt="Background" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-black text-5xl font-semibold">About Us</h1>
          <p className="text-black text-xl mt-4">
            Everything you need to simplify how work
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
