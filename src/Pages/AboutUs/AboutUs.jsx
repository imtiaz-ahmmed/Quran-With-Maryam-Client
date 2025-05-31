import image1 from "../../../public/images/about.jpeg";
import image2 from "../../../public/images/about2.jpeg";
import image3 from "../../../public/images/about3.jpeg";
import image4 from "../../../public/images/about4.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-white ">
      <div class="relative">
        <img src={image1} alt="Background" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-black text-5xl font-semibold">About Us</h1>
          <p className="text-black text-xl mt-4">
            Everything you need to simplify how work
          </p>
        </div>
      </div>
      <div className="mt-10 max-w-7xl mx-auto">
        <div>
          <p className="text-gray-700 text-base text-justify">
            Welcome to Maryam and Fatima - Inspiring Faith Through Knowledge and
            Recitation.
          </p>
          <p className="text-gray-700 text-base text-justify">
            At MaryamAndFatima.com, our mission is to make Islamic learning
            accessible and meaningful for Muslims worldwide. Founded with a
            passion for Quran recitation and Islamic education, this platform
            represents the shared vision of Maryam Masud and Fatima Masud, who
            aim to share the beauty and depth of the Quran and Sunnah with
            Muslims of all ages.
          </p>
          <p className="text-gray-700 text-base text-justify">
            Our platform offers a holistic learning experience with carefully
            curated features such as complete Quran recitation with translation,
            a collection of duas for every occasion, the 99 beautiful names of
            Allah, and a personalized Quran Planner. We believe that connecting
            to the Quran and Islamic teachings should be seamless, inspiring,
            and available to everyone.
          </p>
        </div>
        <div className="bg-slate-100 rounded-2xl shadow-lg border-1 mt-10">
          <div className="flex p-7">
            <div className="my-6 w-1/2 mt-20">
              <h1 className="text-black text-4xl font-semibold">
                Meet Maryam and Fatima
              </h1>
              <p className="text-gray-700 text-base mt-5 ">
                Maryam and Fatima are known worldwide for their heartfelt Quran
                recitations <br /> and devotion to Islamic teachings. Through their
                journey, they have inspired <br /> countless people to connect with
                their faith on a deeper level. With their <br /> unique voice and
                genuine love for Islam, they aim to help others experience <br /> the
                same beauty in learning and practicing their religion.
              </p>
            </div>
            <div className="w-1/2">
              <img className=" opacity-90 mix-blend-multiply" src={image3} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-2xl shadow-lg border-1 mt-10">
          <div className="flex p-7">
            <div className="w-1/2">
              <img className="rounded-lg opacity-90 mix-blend-multiply" src={image2} alt="" srcset="" />
            </div>
            <div className="w-1/2 mt-20 ml-20">
              <h1 className="text-black text-4xl font-semibold">
                Our Mission
              </h1>
              <p className="text-gray-700 text-base mt-5 ">
                Maryam and Fatima are known worldwide for their heartfelt Quran
                recitations <br /> and devotion to Islamic teachings. Through their
                journey, they have inspired <br /> countless people to connect with
                their faith on a deeper level. With their <br /> unique voice and
                genuine love for Islam, they aim to help others experience <br /> the
                same beauty in learning and practicing their religion.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-2xl shadow-lg border-1 mt-10">
          <div className="flex p-7">
            <div className="my-6 w-1/2 mt-20">
              <h1 className="text-black text-4xl font-semibold">
                Join Us
              </h1>
              <p className="text-gray-700 text-base mt-5 ">
                Maryam and Fatima are known worldwide for their heartfelt Quran
                recitations <br /> and devotion to Islamic teachings. Through their
                journey, they have inspired <br /> countless people to connect with
                their faith on a deeper level. With their <br /> unique voice and
                genuine love for Islam, they aim to help others experience <br /> the
                same beauty in learning and practicing their religion.
              </p>
            </div>
            <div className="w-1/2">
              <img className="rounded-lg opacity-90 mix-blend-multiply" src={image4} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-2xl shadow-lg border-1 mt-10">
          <h1 className="text-black text-center text-3xl font-semibold p-5">OUR TEAM</h1>
          <div className="flex justify-between gap-10 p-12">
            <div >
              <img className="rounded-full" src={image3} alt="" srcset="" />
               <h1 className="text-black text-xl font-semibold mt-5">Dr. Mohammad Monzur-E-Elahi</h1>
              <p className="text-gray-700 text-base mt-5 ">PhD in Islamic Shari'ah, Madinah Islamic University</p>
            </div>
            <div>
              <img className="rounded-full" src={image3} alt="" srcset="" />
               <h1 className="text-black text-xl font-semibold mt-5">Dr. Mohammad Monzur-E-Elahi</h1>
              <p className="text-gray-700 text-base mt-5 ">PhD in Aqeedah, Madinah Islamic University</p>
            </div>
            <div>
              <img className="rounded-full" src={image3} alt="" srcset="" />
               <h1 className="text-black text-xl font-semibold mt-5">Dr. Mohammad Monzur-E-Elahi</h1>
              <p className="text-gray-700 text-base mt-5 ">PhD in Fiqh, Madinah Islamic University</p>
            </div>
            <div>
              <img className="rounded-full object-cover" src={image3} alt="" srcset="" />
               <h1 className="text-black text-xl font-semibold mt-5">Dr. Mohammad Monzur-E-Elahi</h1>
              <p className="text-gray-700 text-base mt-5 ">PhD in Arabic, Islamic University Kustia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
