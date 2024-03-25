import React from 'react';
import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';

const CourseDetails = () => {
  const location = useLocation();
  const courseNumber = location.pathname.match(/\d+$/)?.[0];
  console.log(courseNumber)
  const courses = [
    {
      title: "Seafarers Development Programmer (SDP)",
      eligibility: [
        "Pass in 10th standard or above from recognized board.",
        "Medically and physically Fit",
        "(+) or (-) eye vision allowed",
        "No Visual aids",
        "No colour blindness",
        "Age 18 -28"
      ],
      description: "This is around 3 months merchant navy awareness program (Seafarers Development Program) along with mandatory STCW course approved by D.G. Shipping. This is specially designed for the candidates who are willing to make their career in merchant navy but having low budget. STCW is consist of shipping training courses that are given to ensure candidates and crew safety on board a ship and equips a seafarer with various types of situations that can arise on a ship along with ways to deal with them. Through this specialized course, we are preparing a new breed of well-trained, highly qualified merchant mariners who are skilled with technical as well as soft skills needed to launch successful careers in the Merchant Navy. Under this program we sponsor & train the seafarers and after the successful completion of training we place the crew on board on the vessels under our management.",
      certificates: [
        "SDP Certificate approved by NSDC",
        "STCW course certificate issued by the academy approved by Director General of Shipping",
        "INDOS & CDC (Continuous Discharge Certificate)"
      ],
      careerFlowChart: [
        "Join as Trainee Ordinary Seaman in Deck / Trainee Wiper in Engine for minimum period of 18 months [STIPEND: 200$ - 400$]",
        "After getting watch keeping certificate, Sail as AB / OILER for 12 to 18 months [SALARY: 400$ - 800$ / 800$ - 1200$ respectively]",
        "After total sea time of 24 months, appear for NCV 2nd mate (Deck)/appear for class 4 NCV (Engine)",
        "Upon obtaining 2nd mate, sail as 2nd Officer or obtaining class 4 certificate, sail as 4th engineer [SALARY: 3500$ - 5500$]",
        "Further sea experience & passing exam, can rise up to the rank of Master Mariner/Chief engineer [SALARY: 8500$ - 12000$]"
      ]
    },
    {
      title: "Orientation Course For Catering Personnel (OCCP)",
      eligibility: [
        "Pass in 10th standard or above from recognized board with 40% aggregate and 40% in English subject either in 10th or (10+2) and Diploma/Degree Certificate in Hotel Management.",
        "Medically and physically Fit",
        "(+) or (-) 2.5 eye vision allowed",
        "No Visual aids",
        "No color blindness",
        "Age 18 -28"
      ],
      description: "This is 2 months residential course approved by Director General of Shipping, Govt. of India. This Pre Sea training course is likely designed for the aspirants who hold a Degree in Hotel management and are expert cooks. Once taken admission, these aspirants learn about the techniques and ways they should be working with as a Marine Catering Personnel.",
      certificates: [
        "OCCP Course certificate approved by the academy approved by Director General of Shipping, Ministry of surface and Transport govt. of India.",
        "STCW course certificate will be issued by the academy approved by Director General of Shipping, Ministry of surface and Transport govt. of India.",
        "INDOS & CDC (Continuous Discharge Certificate)"
      ],
      careerFlowChart: [
        "2 month pre-sea training (In academy, approved by D. G. Shipping Govt. of India)",
        "Join as Steward [STIPEND: 300$ - 400$]",
        "Assistant Cook  [SALARY: 1000$]",
        "Cook [SALARY: 1400$]",
        "Chief Cook [SALARY: 1700$]"
      ]
    },
    {
      title: "GP Rating",
      eligibility: [
        "Pass in 10th standard or above from recognised board with 40% aggregate and 40% in English subject either in 10th or (10+2)",
        "Medically and physically Fit",
        "6/6 Eye vision",
        "No Visual aids",
        "No colour blindness",
        "Age 17.5 -25 years"
      ],
      description: "This is 6 months residential course approved by Director General of Shipping, Govt. of India. GP Rating course focuses on training cadets in two main roles of shipping sector- Deck crew and engine crew. Deck and Engine Rating programs are available as Individual courses but GP Rating combines them both and trains candidate Deck as well as Engine Rating aspects!",
      certificates: [
        "GPR Course certificate and the STCW course certificate will be issued by the academy approved by Director General of Shipping, Ministry of surface and Transport govt. of India.",
        "INDOS & CDC (Continuous Discharge Certificate)"
      ],
      careerFlowChart: [
        "6 month pre-sea training (In academy, approved by D. G. Shipping Govt. of India)",
        "Join as Trainee Ordinary Seaman in Deck / Trainee Wiper in Engine for minimum period of 12 months [STIPEND: 200$ - 400$]",
        "After getting watch keeping certificate, Sail as AB / Oiler for 12 to 18 month [SAL: 400$ - 800$ / 800$ - 1200$ respectively]",
        "After total sea time of 24 months, appear for NCV/FG 2nd mate(Deck)/appear for class 4 NCV/FG (Engine)",
        "Upon obtaining 2nd mate, sail as 2nd Officer or obtaining class 4 certificate, sail as 4th engineer [SAL: 3500$ - 5500$]",
        "Further sea experience & passing exam, can rise up to the rank of Master Mariner/Chief engineer [SAL: 8500$ - 12000$]"
      ]
    },
    {
      title: "Certificate Course in Maritime Catering",
      eligibility: [
        "Pass in 10th standard or above from recognised board with 40% aggregate and 40% in English subject either in 10th or (10+2)",
        "Medically and physically Fit",
        "Eye Glasses Permitted",
        "No Visual aids",
        "Good Communication Skills",
        "Age 17.5 -25 years"
      ],
      description: "This is 6 months residential course approved by Director General of Shipping, Govt. of India. CCMC course focuses on training cadets in maritime food and beverage services. Catering personnel takes care of Ship’s food, provision stores, general hygiene and housekeeping.",
      certificates: [
        "Certificate of competence as cook in merchant navy",
        "STCW course certificate issued by the academy approved by Director General of Shipping, Ministry of shipping govt. of India",
        "INDOS & CDC (Continuous Discharge Certificate)"
      ],
      careerFlowChart: [
        "6 month pre-sea training (In academy, approved by D. G. Shipping Govt. of India)",
        "Join as Assistant Cook [STIPEND:400$ - 600$]",
        "With further sea experience, sail as Cook [Sal: 800$ - 1500$]",
        "Can rise up to the rank of Chief Cook/ Catering Officer [Sal: 2000$ - 3500$]"
      ]
    },
    {
      title: "Electro Technical Officer",
      eligibility: [
        "Pass in B.E. (or) B. Tech in (Elect) / EEE and or Diploma (Elect)/ EEE with minimum 50% in final year & 50% in English in 10th or 12th STD or in the Degree Course conducted by any State or Central Government or the AICTE",
        "Fluent in English",
        "Medically and physically fit",
        "(+) or (-) 2.5 eye vision permitted",
        "No Visual aids",
        "No Colour blindness",
        "Age: 17.5 to 28 years"
      ],
      description: "This is 4 months residential course designed to equip the candidates with adequate skill and knowledge in Electrical and Electronics in the ships.",
      certificates: [
        "STCW course certificate issued by the academy approved by Director General of Shipping, Ministry of shipping  govt. of India",
        "INDOS & CDC (Continuous Discharge Certificate)",
        "Course certificate will be issued by the academy approved by D.G. Shipping, Govt. of India which will make the candidates eligible to join Merchant Ships as Trainee Electrical Officer"
      ],
      careerFlowChart: [
        "4 month specialised training program along with mandatory 4 STCW courses approved by D.G. Shipping, Govt. of India",
        "As a junior electro technical officer on board a ship(salary 900-2000 $ usd month)",
        "With further sea experience, get promoted as Electro Technical Officer board a ship [SAL: 2000$ -5000$)"
      ]
    },    
    {
      title: "Diploma in Nautical Science",
      eligibility: [
        "Pass in (10+2) or equivalent examination with Physics, Chemistry, Mathematics and English as separate subjects with a PCM average of not less than 60% and 50% marks in English in 10th or (10+2)",
        "Fluent in English",
        "Medically and physically fit",
        "6/6 eye vision",
        "No Visual aids",
        "No Colour blindness",
        "Age: 17.5 to 25 years"
      ],
      description: "This is 1 year residential course (Divided into two semesters) approved by Indian Maritime University and Director General of Shipping, Govt. of India. DNS Course is a course leading to B.Sc., Nautical Science after 18 months of sea service and also leading to 2nd Mate Foreign going Certificate of competency awarded by the Ministry of Shipping, Government of India, enabling the cadets to become Navigating officers on board Merchant Naval Ships anywhere in the world.",
      certificates: [
        "Diploma in Nautical Science certificate awarded by Indian Maritime University (IMU)"
      ],
      careerFlowChart: [
        "After completion of 12 months Diploma in Nautical Science (Semester 1 & 2 - IMU) along with mandatory STCW courses at academy, approved by D. G. Shipping Govt. of India",
        "Join as Deck Cadet/Junior Officer for 18 months on-board ship training comprising of semester 3, 4 and 5 (With Distance Learning Programme by IMU), Awarded of Advance Diploma in Nautical Science by IMU [STIPEND: 400$ - 600$]",
        "4 months preparatory Post-sea course, Obtain 2nd Mate Certificate of Competency by Director General of Shipping, Govt. of India, Sail as 3rd / 2ndNavigating Officer on merchant ships [SALARY: 3500$ - 5500$]",
        "6 months preparatory post sea course, Obtain 1st mate Certificate of Competency, complete 18 months sea service as Navigating Officer/ Chief Officer [SALARY: 5500$ - 8500$]",
        "Advance Ship Management Course followed by exam, Written & Oral Examination, Obtain Master Certificate of Competency and sail as Master / Captain of the ship [SALARY: 8500$ - 12000$]"
      ]
    },
    {
      title: "BSc Nautical Science",
      eligibility: [
        "Pass in (10+2) or equivalent examination with Physics, Chemistry, Mathematics and English as separate subjects with a PCM average of not less than 60% and 50% marks in English in 10th or (10+2)",
        "Fluent in English",
        "Medically and physically fit",
        "6/6 eye vision",
        "No Visual aids",
        "No Colour blindness",
        "Age: 17.5 to 25 years"
      ],
      description: "This is 3 years degree course approved by Director General of Shipping, Govt. of India. Upon completion of 1 year residential training, candidate undertakes the sea phase for 12 months on board ship residential training in Nautical Science, Trainee is also required to undergo 4 months post-sea training in any training institute (2nd mate Function) approved by Director General of Shipping, Govt. of India. After Successful completion of the training & Passing the exam candidate will be awarded with a Certificate of Competency by Director General of Shipping and B.Sc. Degree in (Nautical Science) by IMU.",
      certificates: [
        "B.Sc. in Nautical Science degree awarded by Indian Maritime University (IMU)"
      ],
      careerFlowChart: [
        "12 months pre sea training (semester 1 & 2 - IMU) program along with mandatory 4 STCW courses, approved by d. G. Shipping govt. Of India",
        "Join as deck cadet onboard a vessel for minimum period of 12 months [SAL: 300$ -500$)",
        "4 months preparatory post-sea training, obtain 2nd mate Certificate of Competency, Sail as 3rd / 2nd Navigating officer for 12 months [SAL: 3500$ - 5500$)",
        "6 months preparatory post sea training, obtain 1st mate Certificate of Competency, Complete 18 months sea time as 1st navigating officer/ Chief Officer [SAL: 5500$ - 8500$)",
        "Obtain Master Certificate of Competency and sail as Master/ Captain of the ship [SAL: 8500$- 12000$)"
      ]
    },
    {
      title: "Marine Engineering",
      eligibility: [
        "Pass in (10+2) or equivalent examination with Physics, Chemistry, Mathematics and English as separate subjects with a PCM average of not less than 60% and 50% marks in English in 10th or (10+2)",
        "Fluent in English",
        "Medically and physically fit",
        "(+) or (-) 2.5 eye vision permitted",
        "No Visual aids",
        "No Colour blindness",
        "Age: 17.5 to 25 years"
      ],
      description: "This is 4 year degree course duly approved by D.G. Shipping, Govt. of India and AICTE. The Academy impart comprehensive training in Marine Engineering, shipboard practice and ship familiarization along with marine Workshop training (as per IMO modules).",
      certificates: [
        "Degree issued by the academy approved by D.G. Shipping, Govt. of India",
        "Class IV Certificate of Competency by the Mercantile Marine Department, Government of India"
      ],
      careerFlowChart: [
        "4 Year course along with mandatory STCW course training at academy approved by D.G. Shipping, Govt. of India",
        "Exempted from MEO Class (IV) Part A-Examination, Sea Service for 6 months as Junior / Trainee Engineer [STIPEND: 450$ -850$]",
        "Completion of 3 advanced Safety Training Courses (AFF, PSCRB & MFA), 3 months preparatory course including simulator, Obtain MEO Class (IV) Exam part (B) and Sail as 4th Engineerfor 12 months [SALARY: 3500$ - 5500$]",
        "4 months preparatory course including simulator, Obtain MEO Class II (Part A& B) Certificate of Competency and Sail as 3rd Engineer for 18 months [SALARY: 5500$ - 7500$]",
        "2 months preparatory course including simulator, Obtain MEO Class I Certificate of Competency, Join Ship as 2ndEngineer and later Chief Engineer [SALARY: 7500$ -12,000 $]"
      ]
    }    

    // Add more course details here
  ];

  const course = courses[parseInt(courseNumber) - 1];

  if (!course) {
    return <NotFound/>; // Course not found
  }

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold mb-8 border-b-[1px] border-black pb-5 w-fit">{course.title}</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Eligibility:</h2>
        <ul className="list-disc list-inside">
          {course.eligibility.map((eligibility, index) => (
            <li key={index}>{eligibility}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Course Description:</h2>
        <p>{course.description}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Certificates Provided:</h2>
        <ul className="list-disc list-inside">
          {course.certificates.map((certificate, index) => (
            <li key={index}>{certificate}</li>
          ))}
        </ul>
        <br />
        <p>After successful completion of the training, the OCCP Course certificate and the STCW course certificate will be issued by the academy approved by Director General of Shipping, Ministry of surface and Transport govt. of India. In addition to that candidate will be awarded with INDOS & CDC (Continuous Discharge Certificate).</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Career Flow Chart:</h2>
        <ul className="list-disc list-inside">
          {course.careerFlowChart.map((step, index) => (
            <li key={index}>{step} <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className='w-6 h-6 text-blue-700 m-2'
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
          </li>
            
          ))}
        </ul>
        <br />
        <p>2 month pre-sea training (In academy, approved by D. G. Shipping Govt. of India)</p>
        {/* Add more details for Career Flow Chart */}
      </div>
    </div>
  );
};

export default CourseDetails;
