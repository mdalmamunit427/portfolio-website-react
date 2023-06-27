/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Youtube from "../assets/socials/youtube.svg";
import GitHub from "../assets/socials/github.svg";
import Books from "../assets/socials/book.svg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      {/* hero info */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center md:w-1/2">
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            HEY, I'M RAM MAHESHWARI
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Designing for the Future, One Website at a Time.",
              1000,
              "Designing for the Online Presence.",
              1000,
              "Designing for the Pixel Perfect Experiences.",
              1000,
              "We Create, You Conquer.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          {/* hero info */}
          <p className="text-light text-xl my-8">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <button className="btn py-4 px-16">PROJECTS</button>


        </div>
      </div>
      {/* hero socials */}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Twitter} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Youtube} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Books} alt="" className="w-10 h-10" />
          </a>
        </div>
      </div>

 
    </div>
  );
};

export default Home;
