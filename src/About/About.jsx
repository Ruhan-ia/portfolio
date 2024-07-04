import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../assets/animation/Animation - 1719577094167.json";
import { BsFillMortarboardFill } from "react-icons/bs";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="mt-24" id="about">
      <h3 className="text-green-400 font-thin font-roboto text-center">
        Get to know more
      </h3>
      <h1 className="mb-10 font-bold text-4xl text-center font-roboto text-green-700 ">
        <span className="border-b-4 border-b-green-700">About Me</span>
      </h1>
      <div className="grid lg:grid-cols-2 justify-items-center w-[90%] mx-auto items-center ">
        <div>
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 400, height: 400 }}
          />
        </div>
        <div>
          <div className="grid justify-items-center lg:justify-items-start lg:grid-cols-2   gap-6">
            <div className="card  border-solid border-2 border-green-400 w-72 h-auto shadow-lg rounded-3xl">
            <div className="px-10">
              <div className="font-bold text-2xl flex justify-center pt-3">
                
                 <BsFillSuitcaseLgFill></BsFillSuitcaseLgFill>
                </div> 
               
              <h1 className="font-semibold text-lg text-center py-3">Experience</h1>
               <p className="font- text-center">1 + years</p>
               <p className="py-3 text-center">In Frontend Development</p>
               </div>
            </div>
            <div className="card  border-solid border-2 border-green-400 w-72 h-auto shadow-lg rounded-3xl">
                <div className="px-10">
              <div className="font-bold text-2xl flex justify-center pt-3">
                
                 <BsFillMortarboardFill></BsFillMortarboardFill>
                </div> 
               
              <h1 className="font-semibold text-lg text-center py-3">Education</h1>
               <p className="font- text-center">Studying in B.Sc Honors</p>
               <p className="py-3 text-center">National University of Bangladesh</p>
               </div>
            </div>
          </div>

          <p className="pt-5 text-center lg:text-start ">
          
              <span className="font-semibold text-3xl font-roboto text-green-400">M</span>y self Ruhan .I am from Bangladesh.
               I have learned web
              development for the past one year. I have worked with html, css,
              javascript, react. And learned the basic uses of node js, express
              js. 
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
