import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">COURSES</h1>
        <div className='bg-yellow-500 w-[40%] py-[2px]'></div>
        <br />
        <div className="flex flex-wrap gap-6">
          <Course
            title="Seafarers Development Programmer (SDP)"
            description="The PRE SEA TRAINING Course was introduced on request from the Shipping Industry, in order to ensure enhanced & multiple utility of ratings, on board vessels belonging to shipping companies, worldwide."
            img='Courses1.jpg'
            to="/courses/1"
          />
          <Course
            title="Orientation Course For Catering Personnel (OCCP)"
            description="Pass in 10th standard or above from recognized board with 40% aggregate and 40% in English subject either in 10th or (10+2) and Diploma/Degree Certificate in Hotel Management."
            img='Courses4.jpg'
            to="/courses/2"
          />
          <Course
            title="General Purpose Rating"
            description="Pass in 10th standard or above from recognised board with 40% aggregate and 40% in English subject either in 10th or (10+2)"
            img='Courses5.jpg'
            to="/courses/3"
          />
          {/* Add the new courses here */}
          <Course
            title="Certificate Course In Maritime Catering"
            description="Pass in 10th standard or above from recognised board with 40% aggregate and 40% in English subject either in 10th or (10+2)"
            img='Courses6.jpg'
            to="/courses/4"
          />
          <Course
            title="Electro Technical Officer"
            description="Pass in B.E. (or) B. Tech in (Elect) / EEE and or Diploma (Elect)/ EEE with minimum 50% in final year & 50% in English in 10th or 12th STD or in the Degree Course conducted by any State or Central Government or the AICTE"
            img='Courses4.jpg'
            to="/courses/5"
          />
          <Course
            title="Diploma In Nautical Science"
            description="Pass in (10+2) or equivalent examination with Physics, Chemistry, Mathematics and English as separate subjects with a PCM average of not less than 60% and 50% marks in English in 10th or (10+2)"
            img='Courses1.jpg'
            to="/courses/6"
          />
          <Course
            title="Bsc Nautical Science"
            description="Pass in (10+2) or equivalent examination with Physics, Chemistry, Mathematics and English as separate subjects with a PCM average of not less than 60% and 50% marks in English in 10th or (10+2)"
            img='Courses5.jpg'
            to="/courses/7"
          />
          <Course
            title="Graduate Mechanical Engineer"
            description="BE or B.Tech. (Mechanical or Naval Arch) from AICTE approved college/university with minimum 50% marks and at least 50% in English in either 10th or 10+2."
            img='Courses6.jpg'
            to="/courses/8"
          />
          <Course
            title="Marine Engineering"
            description="Pass in (10+2) or equivalent examination with Physics, Chemistry, Mathematics and English as separate subjects with a PCM average of not less than 60% and 50% marks in English in 10th or (10+2)"
            img='Courses4.jpg'
            to="/courses/9"
          />
        </div>
      </div>
    </div>
  );
}

const Course = ({ title, description, img, to }) => {
  return (
    <Link to={to} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between hover:cursor-pointer hover:bg-zinc-100">
      <div className="mr-4">
        <img src={img} alt="Course" className="mr-[10%]" />
      </div>
      <div className='w-[400px]'>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}

export default Courses;
