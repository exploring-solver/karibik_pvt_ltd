import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black bg-opacity-95 text-gray-400 py-4 '>
      <div className='flex justify-between w-[80%] mx-auto'>
        <div id='reach'>
          <h1 className='font-semibold italic'>HOW TO REACH US</h1>
          <hr className='py-[0.5px] w-[40%] bg-yellow-500' />

        </div>
        <div id='quick-links' className='flex flex-col'>
          <h1 className='font-semibold italic'>QUICK LINKS</h1>
          <hr className='py-[0.5px] w-[40%] bg-yellow-500' />
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
        </div>
        <div id='campus' className='flex flex-col'>
          <h1 className='font-semibold italic'>QUICK LINKS</h1>
          <hr className='py-[0.5px] w-[40%] bg-yellow-500' />
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
        </div>
        <div id='contact' className='flex flex-col'>
          <h1 className='font-semibold italic'>QUICK LINKS</h1>
          <hr className='py-[0.5px] w-[40%] bg-yellow-500' />
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
        </div>
      </div>
      <br />
      <div id='copyright-text ' className='flex justify-between w-[80%] mx-auto'>
        <div>
          <h1>Copyright © Merchant Navy Institute & Training Center 2021. All rights reserved.</h1>
        </div>
        <div className='flex justify-between gap-2'>
          <p className='px-2 border-r-2'>Privacy Policy</p>
          <p className='px-2 border-r-2'>Privacy Policy</p>
          <p className='px-2 border-r-2'>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer