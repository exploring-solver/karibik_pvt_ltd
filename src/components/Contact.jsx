import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl p-6">
      <h1 className="text-3xl font-semibold mb-4">GET IN TOUCH</h1>
      <div className='flex justify-between gap-5 flex-wrap md:flex-nowrap'>
        <div>
          <p className="mb-4 w-[80%]">
            You can talk to our online representative at any time. Please use our Live Chat System on our website or fill up below instant messaging programs.
          </p>
          <div className="mb-4">
            {/* <label htmlFor="name" className="block">Name</label> */}
            <input type="text" id="name"  placeholder='Name' className="w-full border border-gray-300 rounded-md px-3 py-2   " />
          </div>
          <div className="mb-4">
            {/* <label htmlFor="phone" className="block">Phone</label> */}
            <input type="text" id="phone"  placeholder='Phone' className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            {/* <label htmlFor="email" className="block">Email</label> */}
            <input type="email" id="email"  placeholder='Email' className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            {/* <label htmlFor="message" className="block">Message</label> */}
            <textarea id="message"  placeholder='Message' className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black font-bold ">SUBMIT NOW &rarr;</button>

        </div>
        <div className="mt-6 w-[30%]">
          <p className="mb-2">Office No.3 G.F- 571/1 Adrash nagar new railway road sector-12 Gurgaon Haryana 122001</p>
          <hr className="border-t border-gray-300 my-2" />
          <p className="mb-2">karibikindiamaritimeacademy0001@gmail.com</p>
          <hr className="border-t border-gray-300 my-2" />
          <p className="mb-2">+91 7048911197 , +91 8384038007</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
