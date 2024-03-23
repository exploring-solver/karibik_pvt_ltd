import React from 'react';

const Apply = () => {
  return (
    <div className="mx-10 p-6">
      <h2 className="text-2xl font-bold mb-1">CANDIDATE ENROLLMENT FORM</h2>
      <div className='bg-yellow-500 w-[10%] py-[1px]'></div>
      <div className='flex flex-wrap justify-between'>
        <form className='md:w-[50%]'>
          <div className="mb-4">
            <label htmlFor="post_apply" className="block font-semibold">Programme to which admission is sought:</label>
            <select id="post_apply" name="post_apply" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1">
              <option value="">Programme to which admission is sought:</option>
              <option value="SDP-3">SDP-3</option>
              <option value="G. P. Rating">G. P. Rating</option>
              <option value="B.Tech Marine Engineering">B.Tech Marine Engineering</option>
              <option value="BSC Nautical Science">BSC Nautical Science</option>
              <option value="Graduate Marine Engineering">Graduate Marine Engineering</option>
              <option value="Electro Technical Officer">Electro Technical Officer</option>
              <option value="Diploma In Nautical Science">Diploma In Nautical Science</option>
              <option value="Certificate Course In Maritime Catering">Certificate Course In Maritime Catering</option>
              <option value="STCW">STCW</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="candidate_name" className="block font-semibold">Name:</label>
            <input type="text" id="candidate_name" name="candidate_name" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile_no" className="block font-semibold">Mobile:</label>
            <input type="text" id="mobile_no" name="mobile_no" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Mobile" />
          </div>
          <div className="mb-4">
            <label htmlFor="date_of_birth" className="block font-semibold">Date Of Birth (dd-mm-yyyy):</label>
            <input type="date" id="date_of_birth" name="date_of_birth" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Date Of Birth (dd-mm-yyyy)" />
          </div>
          <div className="mb-4">
            <label htmlFor="alternate_mobile_no" className="block font-semibold">Alternate No.:</label>
            <input type="text" id="alternate_mobile_no" name="alternate_mobile_no" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Alternate No." />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block font-semibold">Age:</label>
            <input type="number" id="age" name="age" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Age" readOnly />
          </div>
          <div className="mb-4">
            <label htmlFor="email_id" className="block font-semibold">Email Id:</label>
            <input type="email" id="email_id" name="email_id" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Email Id" />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block font-semibold">Select Gender:</label>
            <select id="gender" name="gender" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1">
              <option value="">Select Gender</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="TRANSGENDER">TRANSGENDER</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block font-semibold">Profile Picture (Size: 200*200 pixels):</label>
            <input type="file" id="photo" name="photo" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="10th_percentage" className="block font-semibold">10th Class Percentage Marks:</label>
            <input type="text" id="10th_percentage" name="10th_percentage" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="10th Class Percentage Marks" />
          </div>
          <div className="mb-4">
            <label htmlFor="12th_percentage" className="block font-semibold">12th Class Percentage Marks:</label>
            <input type="text" id="12th_percentage" name="12th_percentage" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="12th Class Percentage Marks" />
          </div>
          <br />
          <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border w-full border-gray-400 rounded shadow">Submit</button>
        </form>

        <div className='md:w-[30%] pt-0 md:pt-10'>
          <h1 className="text-3xl font-bold  mb-8">COURSES</h1>
          <div className='bg-yellow-500 w-[40%] py-[2px]'></div>
          <br />
          <div className='flex flex-col gap-2'>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>SEAFERERS DEVELOPMENT</p>
              <br />
              <p>PROGRAMMER(SDP)</p>
            </div>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>SEAFERERS DEVELOPMENT</p>
              <br />
              <p>PROGRAMMER(SDP)</p>
            </div>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>SEAFERERS DEVELOPMENT</p>
              <br />
              <p>PROGRAMMER(SDP)</p>
            </div>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>SEAFERERS DEVELOPMENT</p>
              <br />
              <p>PROGRAMMER(SDP)</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Apply;
