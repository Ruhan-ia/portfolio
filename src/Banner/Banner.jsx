import React from "react";
import bgPro from "../assets/images/bg-pro.jpg";
import profile from "../assets/images/istiak-removebg.png";

import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bgPro || "../assets/images/bg-pro.jpg"})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-2 justify-items-end  hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl lg:text-5xl font-bold font-roboto">
              Assalamuala<span className="text-green-400 font-roboto">i</span>
              kum
            </h1>
            <div className=" flex justify-center items-baseline gap-2  ">
              <h2 className="font-extrabold font-roboto text-2xl">I am</h2>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  " Istiak Ahamad",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  " FrontEnd Developer",
                  1000,
                  " React Developer",
                  1000,
                ]}
                className="text-green-400 font-roboto"
                wrapper="span"
                speed={50}
                style={{
                  fontWeight: "bolder",
                  marginBottom: "1.25rem",
                  fontSize: "1.5rem",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </div>
                
            <p className="mb-5">
              <span className="font-semibold text-3xl font-roboto text-green-400">M</span>y self Ruhan .I am from Bangladesh.
               I have learned web
              development for the past one year. I have worked with html, css,
              javascript, react. And learned the basic uses of node js, express
              js. 
            </p>
           <div className="flex gap-3 justify-center">
            <button className="btn btn-circle border-none  hover:bg-black hover:text-green-500 transition ease-in-out delay-150 text-2xl hover:scale-110  duration-300  btn-3xl">
            <Link to='https://github.com/Ruhan-ia'><FaGithub></FaGithub></Link>   
            </button>
            <button className="btn btn-circle border-none  hover:bg-black hover:text-green-500 transition ease-in-out delay-150 text-2xl hover:scale-110  duration-300  btn-3xl">
            <Link to='https://www.linkedin.com/in/istiak-ahamad-35a99327b/'> <FaLinkedin></FaLinkedin> </Link>   
            </button>
           <button className="btn rounded-full border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  btn-3xl">
              
                <Link to='https://mail.google.com/mail/u/0/?hl=en/#inbox'>Hire Me!</Link>
            </button>
           </div>
          </div>
          <div className="relative">
            <div className="w-40 lg:w-72 animate-blob h-40 lg:h-72 opacity-50 absolute mix-blend-multiply filter blur-xl -left-2  lg:left-16 bg-purple-300 rounded-full  "></div>
            <div className="w-40 lg:w-72 animate-blob animation-delay-2000 h-40 lg:h-72 opacity-50 absolute mix-blend-multiply filter blur-xl right-10   lg:right-16 bg-teal-300 rounded-full  "></div>
            <div className="w-40 lg:w-72 animate-blob animation-delay-4000  h-40 lg:h-72 opacity-50 absolute mix-blend-multiply -bottom-10  -left-5 lg:-bottom-24 filter blur-xl   lg:-left-10 bg-rose-300 rounded-full  "></div>
            <div className="avatar relative">
              <div className="w-auto  lg:w-80 rounded-full">
                <img src={profile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
