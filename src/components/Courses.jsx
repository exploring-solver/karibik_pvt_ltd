import React from 'react';

const Courses = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold  mb-8">COURSES</h1>
        <div className='bg-yellow-500 w-[40%] py-[2px]'></div>
        <br />
        <div className="flex flex-wrap gap-6">
          <Course
            title="Seafarers Development Programmer (SDP)"
            description="The PRE SEA TRAINING Course was introduced on request from the Shipping Industry, in order to ensure enhanced & multiple utility of ratings, on board vessels belonging to shipping companies, worldwide."
          />
          <Course
            title="Orientation Course For Catering Personnel (OCCP)"
            description="Pass in 10th standard or above from recognized board with 40% aggregate and 40% in English subject either in 10th or (10+2) and Diploma/Degree Certificate in Hotel Management."
          />
          <Course
            title="General Purpose Rating"
            description="Pass in 10th standard or above from recognised board with 40% aggregate and 40% in English subject either in 10th or (10+2)"
          />
        </div>
      </div>
    </div>
  );
}

const Course = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
      <div className="mr-4">
        <img src="Courses.jpg" alt="Course" className="mr-[10%]" />
      </div>
      <div className='w-[300px]'>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default Courses;
