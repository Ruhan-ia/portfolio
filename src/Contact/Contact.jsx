import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1crdyv9', 'template_xdjndfk', form.current, 'hYjA53wqQMQtmk1U5')
          .then((result) => {
              console.log(result.text);
              <div role="alert" className="alert alert-success">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Your Email sent successfully!</span>
    </div>
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div id="contact" className='mt-24'>
             
             <h3 className="text-green-400 font-thin font-roboto text-center">
        Get In Touch
      </h3>
      <h1 className="mb-10 font-bold text-4xl text-center font-roboto text-green-700 ">
        <span className="border-b-4 border-b-green-700">Contact Me</span>
      </h1>
          <div className='text-center pb-3'>
        <form ref={form} onSubmit={sendEmail}>
       <div className='lg:flex justify-center gap-3'>
       <input type="text" placeholder="Type Your Name" name="user_name" className="rounded-full input border-2 border-green-700  lg:w-full max-w-xs " />
        
        <input type="email" placeholder="Type Your Email" name="user_email" className=" rounded-full input border-2 border-green-700  lg:w-full max-w-xs " />
       </div>
         
        <textarea name="message" className="textarea textarea-lg border-2 border-green-700 rounded-full m-3 lg:w-full max-w-2xl" placeholder="message"></textarea>
        <br />
        <input className='btn rounded-full  font-semibold  font-roboto hover:bg-black hover:text-green-500 transition ease-in-out delay-150  hover:scale-110  duration-300  ' type="submit" value="Send" />
      </form>
      </div>
      
        </div>
    );
};

export default Contact;