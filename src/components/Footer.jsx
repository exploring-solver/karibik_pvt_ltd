import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black bg-opacity-95 text-gray-400 py-4 '>
      <div className='flex flex-wrap justify-between w-[80%] mx-auto'>
        <div id='reach'>
          <h1 className='font-semibold italic'>HOW TO REACH US</h1>
          <hr className='py-[1px] w-[40%] mb-6 bg-yellow-500' />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4774.7366983136135!2d77.02471721322075!3d28.465058144386123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19cd2136238f%3A0xe97c00e2a69c88fe!2sNew%20Railway%20Rd%2C%20Sector%2012%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1711651758317!5m2!1sen!2sin"
            width="200"
            title='location'
            height="150"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div id='quick-links' className='flex flex-col gap-2'>
          <h1 className='font-semibold italic'>QUICK LINKS</h1>
          <hr className='py-[1px] w-[40%] mb-6 bg-yellow-500' />
          <p>Home</p>
          <p>About Us</p>
          <p>Courses</p>
          <p>Placement</p>
          <p>Career</p>
        </div>
        <div id='campus' className='flex flex-col gap-2 text-white'>
          <h1 className='font-bold italic'>OUR CAMPUS</h1>
          <hr className='py-[1px] w-[40%] mb-6 bg-yellow-500' />
          <p>Jaipur</p>
          <p>Gujarat</p>
          <p>Mumbai</p>
          <p>Chennai</p>
          <p>Delhi</p>
        </div>
        <div id='contact' className='flex flex-col gap-2'>
          <h1 className='font-semibold italic'>HOW TO REACH US ?</h1>
          <hr className='py-[1px] w-[20%] mb-6 bg-yellow-500' />
          <p className='w-[150px]'><i className="fa fa-map-marker" aria-hidden="true"></i>  Office No.3 G.F- 571/1 Adrash nagar new railway road sector-12 Gurgaon Haryana 122001</p>
          <p className=''><i className="fa fa-phone" aria-hidden="true"></i>  +91 7048911197 , +91 8384038007</p>
          <p><i className="fa fa-envelope" aria-hidden="true"></i>  k.i.m.academy0001@gmail.com</p>
        </div>
      </div>
      <br />
      <div className='bg-gray-700 py-[1px]'></div>
      <br />
      <div id='copyright-text ' className='flex justify-between w-[80%] mx-auto flex-wrap gap-2'>
        <div>
          <h1>Copyright © Merchant Navy Institute & Training Center 2024. All rights reserved.</h1>
        </div>
        <div className='flex justify-between gap-2 text-white '>
          <p className='px-2 hover:text-[#00E6F6] hover:cursor-pointer hover:border-[#00E6F6] border-r-2 border-gray-400'>Privacy Policy</p>
          <p className='px-2 hover:text-[#00E6F6] hover:cursor-pointer hover:border-[#00E6F6] border-r-2 border-gray-400'>Refund & Cancellation</p>
          <p className='px-2 hover:text-[#00E6F6] hover:cursor-pointer hover:border-[#00E6F6] border-gray-400'>Terms & Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footer