import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black bg-opacity-95 text-gray-400 py-4 '>
      <div className='flex flex-wrap justify-between w-[80%] mx-auto'>
        <div id='reach'>
          <h1 className='font-semibold italic'>HOW TO REACH US</h1>
          <hr className='py-[1px] w-[40%] mb-6 bg-orange-500' />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.7139973565565!2d77.02189762880936!3d28.4666546334174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d182d4d8f3085%3A0xf0b2597e3d8e4628!2sNew%20Colony%20%2F%20Subhash%20Nagar!5e0!3m2!1sen!2sin!4v1711214923167!5m2!1sen!2sin"
            width="200"
            height="150"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
        <div id='quick-links' className='flex flex-col gap-2'>
          <h1 className='font-semibold italic'>QUICK LINKS</h1>
          <hr className='py-[1px] w-[40%] mb-6 bg-orange-500' />
          <p>Home</p>
          <p>About Us</p>
          <p>Courses</p>
          <p>Placement</p>
          <p>Career</p>
        </div>
        <div id='campus' className='flex flex-col gap-2 text-white'>
          <h1 className='font-bold italic'>OUR CAMPUS</h1>
          <hr className='py-[1px] w-[40%] mb-6 bg-orange-500' />
          <p>Jaipur</p>
          <p>Gujarat</p>
          <p>Mumbai</p>
          <p>Chennai</p>
          <p>Delhi</p>
        </div>
        <div id='contact' className='flex flex-col gap-2'>
          <h1 className='font-semibold italic'>HOW TO REACH US ?</h1>
          <hr className='py-[1px] w-[20%] mb-6 bg-orange-500' />
          <p className='w-[150px]'><i class="fa fa-map-marker" aria-hidden="true"></i>  Mukund Pura Road, New Market, Bhakrota, Ajmer Road, Jaipur (Rajasthan) – 302026</p>
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