import  bg1 from '../assets/images/Html 5.svg'
import  bg2 from '../assets/images/CSS3.svg'
import  bg3 from '../assets/images/JavaScript.svg'
import  bg4 from '../assets/images/Node Js.svg'
import  bg5 from '../assets/images/React.svg'
import  bg6 from '../assets/images/Next.js.svg'

const Skills = () => {
    
    return (
        <div className='mt-24' id='skills'>
            <h3 className='text-green-400 font-thin font-roboto text-center'>Explore My</h3>
            <h1 className='mb-10 font-bold text-center text-4xl text-green-700 font-roboto'>
                <span className='border-b-4 border-b-green-700'>Skills</span>
            </h1>
       <div className='  items-center grid lg:grid-cols-3  justify-items-center gap-6'>
       <div className='relative group'>
        <div className='animate-tilt  group-hover:opacity-100 duration-1000 transition group-hover:duration-200 absolute -inset-0.5 rounded-lg blur bg-gradient-to-tr from-green-700 to-white opacity-75 '>

        </div>
       <div className='h-auto card w-32 bg-black relative'>
                <img src={bg1} alt="" />
       </div>
       </div>
      
      <div className='relative group'>
        <div className='animate-tilt group-hover:opacity-100 duration-1000 transition group-hover:duration-200 absolute -inset-0.5 rounded-lg blur bg-gradient-to-tr from-green-700 to-white opacity-75 '>

        </div>
        <div className='h-auto card w-32  relative bg-black'>
                <img src={bg2} alt="" />
            </div>
      </div>
        
        <div className='relative group'>
            <div className='animate-tilt group-hover:opacity-100 duration-1000 transition group-hover:duration-200 absolute -inset-0.5 rounded-lg blur bg-gradient-to-tr from-green-700 to-white opacity-75 '></div>
         
            <div className='h-full card w-32 bg-black relative'>
                <img src={bg3} alt="" />
            </div>
        </div>
        
        <div className='relative group'>
            <div className='animate-tilt group-hover:opacity-100 duration-1000 transition group-hover:duration-200 absolute -inset-0.5 rounded-lg blur bg-gradient-to-tr from-green-700 to-white opacity-75 '></div>
        
            <div className='h-full card w-32 bg-black relative'>
                <img src={bg4} alt="" />
            </div>
        </div>
        

        <div className='relative group'> 
            <div className='animate-tilt group-hover:opacity-100 duration-1000 transition group-hover:duration-200 absolute -inset-0.5 rounded-lg blur bg-gradient-to-tr from-green-700 to-white opacity-75 '></div>
        
            <div className='h-full card w-32 bg-black relative'>
                <img src={bg5} alt="" />
            </div>
        </div>
   
        <div className='relative group'> 
            <div className="animate-tilt group-hover:opacity-100 duration-1000 transition group-hover:duration-200 absolute -inset-0.5 rounded-lg blur bg-gradient-to-tr from-green-700 to-white opacity-75 "></div>
            <div className='h-full card w-32 bg-black relative'>
                <img src={bg6} alt="" />
            </div>
        </div>
        
       </div>
        </div>
    );
};

export default Skills;