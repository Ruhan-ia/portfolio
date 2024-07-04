import React, { useEffect, useState } from "react";

import resume from '../assets/images/Resume of Istiak Ahamad  (2).pdf'
import { Link } from "react-scroll";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme'):'light');
  useEffect(()=>{
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])
    const handleTheme = (e) =>{
      if(e.target.checked){
        setTheme('dracula');
      }
      else{
        setTheme('light');
      }
    }
   
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-10 h-10 stroke-current font-extrabold text-5xl text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 bg-gradient-to-r from-gray-400 to-green-500"
            >
              <li className=" border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  rounded-xl">
                <Link to='/'>Home</Link>
              </li>
              <li className="border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  rounded-xl">
                <Link to='projects'   
      
      spy={true} 
      smooth={true} 
      offset={10} 
      duration={500}
    >Projects</Link>
              </li>
              <li className="border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  rounded-xl ">
                <Link to='skills'
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}>Skills</Link>
              </li>
              <li className="border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  rounded-xl">
                <Link to='about'
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}>About</Link>
              </li>
              <li className="border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  rounded-xl">
                <Link to='contact'
                
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
          <a className="btn btn-ghost font-bold text-xl ">Istiak <span className=" font-bold text-green-600">Ahamad</span></a>
        </div>
        </div>
       
        <div className="navbar-center hidden lg:flex">
    <ul  className="menu menu-horizontal px-1 ">
    <li className="font-bold font-spaceGrotest  text-green-700 border-b-4 border-b-green-700">
                <Link to='/'>Home</Link>
              </li>
              <li className="font-spaceGrotest font-semibold  ">
                <Link to='projects' 
                  spy={true} 
                  smooth={true} 
                  offset={-50} 
                  duration={500}
                  >Projects</Link>
              </li>
              <li className="font-spaceGrotest font-semibold  ">
                <Link to='skills' 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500}>Skills</Link>
              </li>
              <li className="font-spaceGrotest font-semibold">
                <Link to='about'
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}>About</Link>
              </li>
              <li className="font-spaceGrotest font-semibold">
                <Link to='contact'
                
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}>Contact</Link>
              </li>

    </ul>
    </div>
       
        <div className="navbar-end">
        <div>
        <label className="swap swap-rotate">
  
  
  <input type="checkbox" onChange={handleTheme}
          checked={theme === 'light'? false:true}
 className="theme-controller" value="synthwave" />
  
  
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
 
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
        </div>
        
        <div className="flex-none">
        <div className="dropdown  dropdown-end menu menu-lg ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square  m-1"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-10 h-10 stroke-current text-green-800 text-extrabold text-2xl"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52  bg-gradient-to-r from-gray-400 to-green-500"
            >
              <li className="border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  rounded-xl">
                <a href={resume} download={resume}>Download Resume</a>
              </li>
              <li className=" border-none font-semibold text-lg font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  rounded-xl">
                <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
};



export default Navbar;
