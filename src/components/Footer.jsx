import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black bg-opacity-95 text-gray-400 py-4 '>
      <div className='flex justify-between w-[80%] mx-auto'>
        <div id='reach'>
          <h1 className='font-semibold italic'>HOW TO REACH US</h1>
          <hr className='py-[1px] w-[40%] mb-6 bg-orange-500' />

        </div>
        <div id='quick-links' className='flex flex-col gap-2'>
          <h1 className='font-semibold italic'>QUICK LINKS</h1>
          <hr className='py-[1px] w-[40%] mb-6 bg-orange-500' />
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
        </div>
        <div id='campus' className='flex flex-col gap-2 text-white'>
          <h1 className='font-semibold italic'>QUICK LINKS</h1>
          <hr className='py-[1px] w-[40%] mb-6 bg-orange-500' />
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
          <p>Courses</p>
        </div>
        <div id='contact' className='flex flex-col gap-2'>
          <h1 className='font-semibold italic'>QUICK LINKS</h1>
          <hr className='py-[1px] w-[40%] mb-6 bg-orange-500' />
          <p><i class="fa fa-map-marker" aria-hidden="true"></i>  Mukund Pura Road, New Market, Bhakrota, Ajmer Road, Jaipur (Rajasthan) – 302026</p>
          <p className=''><i class="fa fa-phone" aria-hidden="true"></i>  +91 8384038007</p>
          <p><i class="fa fa-envelope" aria-hidden="true"></i>  mail@gmail.com</p>
        </div>
      </div>
      <br />
      <div className='bg-gray-700 py-[1px]'></div>
      <br />
      <div id='copyright-text ' className='flex justify-between w-[80%] mx-auto flex-wrap gap-2'>
        <div>
          <h1>Copyright © Merchant Navy Institute & Training Center 2021. All rights reserved.</h1>
        </div>
        <div className='flex justify-between gap-2 text-white '>
          <p className='px-2 hover:text-[#00E6F6] hover:cursor-pointer hover:border-[#00E6F6] border-r-2 border-gray-400'>Privacy Policy</p>
          <p className='px-2 hover:text-[#00E6F6] hover:cursor-pointer hover:border-[#00E6F6] border-r-2 border-gray-400'>Privacy Policy</p>
          <p className='px-2 hover:text-[#00E6F6] hover:cursor-pointer hover:border-[#00E6F6] border-gray-400'>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer