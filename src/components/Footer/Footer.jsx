import img2 from "/images/play-store.png";
import img3 from "/images/app-store.png";
import logo from "/images/logo-t.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto footer sm:footer-horizontal p-10">
      <aside>
        <img
          alt="Quran with Maryam"
          loading="lazy"
          width="207"
          height="42"
          decoding="async"
          data-nimg="1"
          class="rounded-lg"
          src={logo}
        ></img>
        <p class="text-lg text-gray-600 font-medium m-0">
          Download Our Mobile App
        </p>
        <div className="flex gap-4 items-center mt-8">
          <Link to="/">
            {" "}
            <img className="rounded-2xl w-[155px] h-[43px]" src={img2} alt="" />
          </Link>
          <Link to="/">
            {" "}
            <img className="rounded-xl w-[155px] h-[43px]" src={img3} alt="" />
          </Link>
        </div>
      </aside>
      <nav>
        <h6 className="text-xl font-semibold text-[#111827]">Links</h6>
        <a class="text-lg text-[#525252] hover:text-teal-600" href="">
          Quran
        </a>
        <a class="text-lg text-[#525252] hover:text-teal-600" href="">
          Dua
        </a>
        <a class="text-lg text-[#525252] hover:text-teal-600" href="">
          Scheduler
        </a>
        <a class="text-lg text-[#525252] hover:text-teal-600" href="">
          Features
        </a>
      </nav>
      <nav>
        <h6 className="text-xl font-semibold text-[#111827]">Others</h6>
        <a class="text-lg text-[#525252] hover:text-teal-600" href="">
          Quran
        </a>
        <a class="text-lg text-[#525252] hover:text-teal-600" href="">
          Dua
        </a>
        <a class="text-lg text-[#525252] hover:text-teal-600" href="">
          Scheduler
        </a>
        <a class="text-lg text-[#525252] hover:text-teal-600" href="">
          Features
        </a>
      </nav>
      <nav>
        <h6 className="text-xl font-semibold text-[#111827]">
          Keep up with us at
        </h6>
        <a class="text-lg text-[#525252] " href="">
          Email: admin@maryamandfatima.com
        </a>
        <div className="grid grid-flow-col gap-4">
          {/* social midia logo will add here */}
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
