import React from 'react';

const Navbar = () => {
    return (
        <nav className="">
            <div className=' bg-[#13314C]'>
                <div className='flex '>
                    <img src="logo.png" className='w-24' alt="" />
                    <a href="#" className="text-2xl px-3 py-2 my-2 w-[230px] text-white font-mono">Merchant Navy<span className=' text-cyan-400'> Institute & Training Center</span></a>
                </div>
                <div className=" flex justify-end text-xs  text-white ">
                    <a href="#" className=" hover:text-yellow-400 px-3 py-2 my-2 border-r-[1px] ">ADMIT CARD</a>
                    <a href="#" className=" hover:text-yellow-400 px-3 py-2 my-2 border-r-[1px] ">RESULT</a>
                    <a href="#" className=" hover:text-yellow-400 px-3 py-2 my-2 border-r-[1px] ">NEWS AND EVENTS</a>
                    <a href="#" className=" hover:text-yellow-400 px-3 py-2 my-2 border-r-[1px] ">CONTACT US</a>
                    <a href="#" className=" hover:text-yellow-400 px-3 py-2 my-2 border-r-[1px] ">PAY ONLINE</a>
                </div>
            </div>
            <div className='text-lg font-semibold text-black bg-zinc-200 pt-3 sticky top-0'>
                <div className="flex flex-wrap items-start ">
                    <a href="#" className=" hover:text-blue-500 px-3 border-r-[1px] border-dashed border-gray-700 my-2 ">HOME</a>
                    <a href="#" className=" hover:text-blue-500 px-3 border-r-[1px] border-dashed border-gray-700 my-2 ">ABOUT US</a>
                    <a href="#" className=" hover:text-blue-500 px-3 border-r-[1px] border-dashed border-gray-700 my-2 ">COURSES</a>
                    <a href="#" className=" hover:text-blue-500 px-3 border-r-[1px] border-dashed border-gray-700 my-2 ">PLACEMENT</a>
                    <a href="#" className=" hover:text-blue-500 px-3 border-r-[1px] border-dashed border-gray-700 my-2 ">FAQ'S</a>
                </div>
                <div className='flex justify-end '>
                    <a href="#" className=" bg-yellow-500  hover:bg-[#00E6F6] py-5 pr-6 pl-12 border-l-2 border-gray-700 mt-2 ">APPLY NOW</a>
                </div>
            </div>
        </nav>
    );
} 

export default Navbar;
