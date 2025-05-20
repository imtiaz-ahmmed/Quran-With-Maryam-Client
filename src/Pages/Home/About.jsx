import img1 from "/images/about.png";
const About = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center px-32 pt-48 pb-20 bg-white text-black">
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <h3 className="text-2xl md:text-5xl mb-5 font-bold">
          About Quran with <br />
          Maryam
        </h3>
        <p>
          The Quran holds within its pages a timeless message that has shaped
          the course of human history. At Quran with Maryam, we believe that
          everyone should have access to this message, and that's why we've
          created this comprehensive online resource dedicated to the study and
          understanding of the Quran. Whether you're a seasoned scholar or a
          curious beginner, you'll find a wealth of information, resources, and
          interactive tools to guide you on your journey.
        </p>
      </div>
    </div>
  );
};

export default About;
