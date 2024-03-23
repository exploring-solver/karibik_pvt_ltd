import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="">
      <div className=' bg-[#13314C]'>
        <div className='flex '>
          <img src="logo.png" className='w-24' alt="" />
          <Link to="/" className="text-2xl px-3 py-2 my-2 w-[230px] text-white font-mono">Merchant Navy<span className=' text-cyan-400'> Institute & Training Center</span></Link>
        </div>
        <div className=" flex justify-end text-xs  text-white ">
          <Link to="/admit-card" className=" hover:text-yellow-400 px-3 py-2 my-2 border-r-[1px] ">ADMIT CARD</Link>
          <Link to="/result" className=" hover:text-yellow-400 px-3 py-2 my-2 border-r-[1px] ">RESULT</Link>
          <Link to="/news-and-events" className=" hover:text-yellow-400 px-3 py-2 my-2 border-r-[1px] ">NEWS AND EVENTS</Link>
          <Link to="/contact-us" className=" hover:text-yellow-400 px-3 py-2 my-2 border-r-[1px] ">CONTACT US</Link>
          <Link to="/pay-online" className=" hover:text-yellow-400 px-3 py-2 my-2 border-r-[1px] ">PAY ONLINE</Link>
        </div>
      </div>
      <div className='text-lg font-semibold text-black bg-zinc-200 pt-3 sticky top-0'>
        <div className="flex flex-wrap items-start ">
          <Link to="/home" className=" hover:text-blue-500 px-3 border-r-[1px] border-dashed border-gray-700 my-2 ">HOME</Link>
          <Link to="/about-us" className=" hover:text-blue-500 px-3 border-r-[1px] border-dashed border-gray-700 my-2 ">ABOUT US</Link>
          <Link to="/courses" className=" hover:text-blue-500 px-3 border-r-[1px] border-dashed border-gray-700 my-2 ">COURSES</Link>
          <Link to="/placement" className=" hover:text-blue-500 px-3 border-r-[1px] border-dashed border-gray-700 my-2 ">PLACEMENT</Link>
          <Link to="/faqs" className=" hover:text-blue-500 px-3 border-r-[1px] border-dashed border-gray-700 my-2 ">FAQ'S</Link>
        </div>
        <div className='flex justify-end '>
          <Link to="/apply-now" className=" bg-yellow-500  hover:bg-[#00E6F6] py-5 pr-6 pl-12 border-l-2 border-gray-700 mt-2 ">APPLY NOW</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
