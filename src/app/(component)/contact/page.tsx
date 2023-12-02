import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill, BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io5';
import React from 'react';
import { FaTelegram } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <div id='contact' className="min-w-screen top-50% my-8">
        <div className="relative flex flex-col items-center justify-center text-center text-5xl h-[50vh] my-[3rem] py-[4rem] min-w-screen py-12 border-t-2 border-b-2  place-items-center">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl font-bold text-slate-400 bg-stone-950 px-2">Contact Me</div>
          <div className="flex">
            <div className="rounded-lg  h-12 w-80 mx-4 my-7 flex items-center justify-center">
              <div className="flex items-center">
                <a href="mailto:tamiratake@gmail.com" className="text-slate-400 text-xl px-3 py-3 flex items-center">
                  <MdEmail className=" text-4xl mr-2" />
                  <span>tamiratake@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="rounded-lg  h-12 w-60 mx-4 my-7 flex items-center justify-center">
              <div className="flex items-center">
                <a href="tel:+251954234576" className="text-slate-400 text-xl px-3 py-3 flex items-center">
                  <BsFillTelephoneFill className=" text-4xl mr-2" />
                  <span>+251954234576</span>
                </a>
              </div>
            </div>
            <div className="rounded-lg  h-12 w-60 mx-4 my-7 flex items-center justify-center">
              <div className="flex items-center">
                <a href='https://www.google.com/maps/d/viewer?mid=1l7_7snjVPATCA7b6tIBnneUTuHI&hl=en&ll=9.017043555584927%2C38.76176650000001&z=15' className="text-slate-400 text-xl px-3 py-3 flex items-center">
                  <IoLocation  className='text-4xl '/>
                  <span>Addis Ababa, Ethiopia</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-3xl px-3 font-bold bg bg-stone-950 text-slate-400">
                  <span className="flex space-x-4">
              <a href="https://www.facebook.com" className=" hover:text-yellow-900 transition-colors duration-300">
                <BsFacebook />
              </a>
              <a href="https://www.linkedin.com" className=" hover:text-gray-900 transition-colors duration-300">
                <BsLinkedin />
              </a>
              <a href="https://www.github.com" className=" hover:text-gray-900 transition-colors duration-300">
                <BsGithub />
              </a>
              <a href="https://www.telegram.org" className=" hover:text-gray-900 transition-colors duration-300">
                <FaTelegram />
              </a>
            </span>
        </div>
        </div>
<div className='1/2 items-end'>
      <div className="chat chat-start w-1/2">
        <div className="chat-bubble">Thanks for visiting! Hope your  <br/>stay was smoother than CSS transitions</div>
      </div>
      <div className="chat chat-end w-1/2">
        <div className="chat-bubble">smoother than a bug-free code! 😉<br/>Thanks for the chuckles</div>
      </div>
</div>

      </div>
    </>
  );
}

export default Contact;