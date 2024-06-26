import React, { useState } from 'react';

const Apply = () => {
  const [formData, setFormData] = useState({
    programme_to_apply: '',
    candidate_name: '',
    mobile_no: '',
    date_of_birth: '',
    alternate_mobile_no: '',
    age: '',
    email_id: '',
    gender: '',
    photo: null,
    'tenth_percentage': '',
    'twelfth_percentage': '',
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const pattern = new RegExp(/^\d{1,10}$/);
  const [isError, setIsError] = useState(false);
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (name === 'mobile_no') {
      if (!pattern.test(e.target.value) )
        setIsError("invalid");
      else if (value.length !== 10 || isNaN(value))
        setIsError("length");
      else setIsError(false);
    }
    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch('https://chanmeet.pythonanywhere.com/api/submit/', {
        method: 'POST',
        body: formDataToSend,
      });
      const data = await response.json();
      console.log('Form submitted:', data);
      if (response.status === 200) {
        setShowModal(true);
      }
      if (response.status === 400) {
        alert('Please re-check the details you are trying in submit.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Please check the details again.');
    } finally {
      setLoading(false);
    }
  };


  const closeModal = () => {
    setShowModal(false);
  };



  return (
    <div className="mx-10 p-6">
      <h2 className="text-2xl font-bold mb-1">CANDIDATE ENROLLMENT FORM</h2>
      <div className='bg-yellow-500 w-[10%] py-[1px]'></div>
      <br />
      <div className='flex flex-wrap justify-between'>
        {/* Form  */}
        {/* <form action="post" enctype="multipart/form-data" data-netlify="true" > */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="programme_to_apply" className="block font-semibold">Fill the form and receive your admit card in mail.
              <br />Programme to which admission is sought:</label>
            <select id="programme_to_apply" name="programme_to_apply" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" onChange={handleChange} required >
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
            <input type="text" id="candidate_name" name="candidate_name" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Name" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile_no" className="block font-semibold">Mobile:</label>
          <h3 className=''>
             
            {isError === "invalid" ? (
              <>
              Write valid mobile number:
              <span className='text-red-600 font-medium'> Invalid</span>
              </>
            ) : isError === "length" ? (
              <>
              Write valid mobile number:              
              <span className='text-red-500 font-medium'>{"+91 " + formData.mobile_no}</span>
              </>
            ) : (
              <>
              Looks good!
              <span className='text-green-500 font-medium'>{"+91 " + formData.mobile_no}</span>
              </>
            )}
          </h3>
            <input onChange={handleChange} required type="text" id="mobile_no" name="mobile_no" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Mobile" />
          </div>
          <br />
          <div className="mb-4">
            <label htmlFor="date_of_birth" className="block font-semibold">Date Of Birth (dd-mm-yyyy):</label>
            <input type="text" id="date_of_birth" name="date_of_birth" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Date Of Birth (dd-mm-yyyy)" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="alternate_mobile_no" className="block font-semibold">Alternate No.:</label>
            <input type="text" id="alternate_mobile_no" name="alternate_mobile_no" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Alternate No." onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block font-semibold">Age:</label>
            <input type="number" id="age" name="age" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Age" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="email_id" className="block font-semibold">Email Id:</label>
            <input type="email" id="email_id" name="email_id" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Email Id" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block font-semibold">Select Gender:</label>
            <select id="gender" name="gender" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" onChange={handleChange} required >
              <option value="">Select Gender</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="TRANSGENDER">TRANSGENDER</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block font-semibold">Profile Picture (Size: 200*200 pixels):</label>
            <input type="file" id="photo" name="photo" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="tenth_percentage" className="block font-semibold">10th Class Percentage Marks:</label>
            <input type="text" id="tenth_percentage" name="tenth_percentage" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="10th Class Percentage Marks" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="twelfth_percentage" className="block font-semibold">12th Class Percentage Marks:</label>
            <input type="text" id="twelfth_percentage" name="twelfth_percentage" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="12th Class Percentage Marks" onChange={handleChange} required />
          </div>
          <br />
          {/* <div data-netlify-recaptcha="true"></div> */}
          <button type="submit" disabled={loading} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border w-full border-gray-400 rounded shadow">
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.5A1.5 1.5 0 0113.5 1h-3A1.5 1.5 0 019 2.5V4a8 8 0 018 8h1.5a1.5 1.5 0 110 3H17a8 8 0 01-8 8v1.5a1.5 1.5 0 11-3 0V17a8 8 0 01-8-8H2.5a1.5 1.5 0 110-3H4z"></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </form>


        {/* Courses  */}
        <div className='md:w-[30%] pt-0 md:pt-10'>
          <h1 className="text-3xl font-bold  mb-8">COURSES</h1>
          <div className='bg-yellow-500 w-[40%] py-[2px]'></div>
          <br />
          <div className='flex flex-col gap-2'>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>ORIENTATION COURSE FOR </p>
              <br />
              <p>CATERING PERSONNEL (OCCP)</p>
            </div>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>GENERAL PURPOSE RATING</p>
            </div>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>SEAFERERS DEVELOPMENT</p>
              <br />
              <p>PROGRAMMER(SDP)</p>
            </div>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>CERTIFICATE COURSE IN MARITIME CATERING</p>
            </div>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>ELECTRO TECHNICAL OFFICER</p>
            </div>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>BSC NAUTICAL SCIENCE</p>
            </div>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>GRADUATE IN MARINE ENGINEERING</p>
            </div>
            <div className='bg-gray-300 text-black font-medium py-2 px-3 hover:bg-[#00E6F6] hover:cursor-pointer'>
              <p>MARINE ENGINEERING</p>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-lg text-center  flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>

            <p>Your application is submitted successfully. Our team will get back to you shortly. <br /> Please keep checking you mails. <br /> Thank you for choosing Karibik Maritime Academy.</p>
            <a href="/" className="block mt-4 text-blue-500 underline" onClick={closeModal}>Go to Home</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apply;
