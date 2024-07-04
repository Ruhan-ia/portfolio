import React from "react";
import pr1 from "../assets/images/OIP.jfif";
import pr2 from "../assets/images/toy-999.jpg";
import pr3 from "../assets/images/card-1010.jpg";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="mt-24" id="projects">
      <h3 className="text-green-400 font-thin font-roboto text-center">
        Browse Recent One
      </h3>
      <h1 className="mb-10 font-bold text-4xl text-center font-roboto text-green-700 ">
        <span className="border-b-4 border-b-green-700">Projects</span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-6 justify-items-center items-center">
        <div className="card border-solid border-2 border-green-400 w-72 h-auto shadow-lg rounded-3xl">
          <div className="avatar">
            <div className="p-5 w-auto h-auto rounded-xl">
              <img src={pr1}/>
            </div>
          </div>
          <h2 className="text-center text-xl font-semibold font-roboto">
            First-Project
          </h2>
          <p className="font-thin text-center text-green-400 font-roboto">Italian-Food</p>
           <div className="flex gap-3 justify-center pb-3">
            
          <button className="btn rounded-full border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  btn-3xl">
              <Link to='https://italian-food-recipe.web.app/home'>Live</Link>
            </button>
            <details className="dropdown">
              <summary className="btn btn-circle border-none  hover:bg-black hover:text-green-500 transition ease-in-out delay-150 text-2xl hover:scale-110  duration-300  btn-3xl">
              <FaGithub></FaGithub>
              </summary> 
               <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                 <li> 
                  <Link to='https://github.com/Ruhan-ia/chef-recipe-client'>client</Link>   
   
                 </li>
                  <li>
                    <Link to='https://github.com/Ruhan-ia/chef-recipe-server'>server</Link>   
                  </li>
                   </ul>
                  </details>
            </div>        
        </div>
        <div className="card border-solid border-2 border-green-400 w-72 h-auto shadow-lg rounded-3xl">
          <div className="avatar">
            <div className="p-5 w-auto h-auto rounded-xl">
              <img src={pr2}/>
            </div>
          </div>
          <h2 className="text-center text-xl font-semibold font-roboto">
            Second-Project
          </h2>
          <p className="font-thin text-center text-green-400 font-roboto">Action-Toys</p>
          <div className="flex gap-3 justify-center pb-3">
            
            <button className="btn rounded-full border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  btn-3xl">
                <Link to='https://toy-cars-e620b.web.app/'>Live</Link>
              </button>
              <details className="dropdown">
              <summary className="btn btn-circle border-none  hover:bg-black hover:text-green-500 transition ease-in-out delay-150 text-2xl hover:scale-110  duration-300  btn-3xl">
              <FaGithub></FaGithub>
              </summary> 
               <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                 <li> 
                  <Link to='https://github.com/Ruhan-ia/personal-project'>client</Link>   
   
                 </li>
                  <li>
                    <Link to='https://github.com/Ruhan-ia/personal-project-server'>server</Link>   
                  </li>
                   </ul>
                  </details>
             
              </div>        
        </div>
        <div className="card border-solid border-2 border-green-400 w-72 h-auto shadow-lg rounded-3xl">
          <div className="avatar">
            <div className="p-5 w-auto h-auto rounded-xl">
              <img src={pr3}/>
            </div>
          </div>
          <h2 className="text-center text-xl font-semibold font-roboto">
            Third-Project
          </h2>
          <p className="font-thin text-center text-green-400 font-roboto">BloodBond-Network</p>
          <div className="flex gap-3 justify-center pb-3">
            
            <button className="btn rounded-full border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  btn-3xl">
                <Link to='https://bloodbonds-network.vercel.app/'>Live</Link>
              </button>
              <button className="btn btn-circle border-none  hover:bg-black hover:text-green-500 transition ease-in-out delay-150 text-2xl hover:scale-110  duration-300  btn-3xl">
              <Link to='https://github.com/itscopebd/bloodbonds-network'><FaGithub></FaGithub></Link>   
              </button>
              </div>        
        </div>
      </div>
    </div>
  );
};

export default Projects;
