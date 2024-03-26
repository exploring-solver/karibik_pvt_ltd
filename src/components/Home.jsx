import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true
  };

  return (
    <div className=" bg-zinc-200">
      {/* <h1 className="text-3xl font-bold mb-5">Welcome to CatalogCraft</h1> */}

      <Slider {...settings}>
        <div className=''>
          <div className=''>
            <img
              className=" w-full"
              src="merchant-1.jpg"
              alt="First slide"
            />
          </div>
        </div>
        <div>
          <img
            className=" w-full"
            src="merchant-2.jpeg"
            alt="Second slide"
          />
        </div>
        <div>
          <img
            className=" w-full"
            src="merchant-3.jpeg"
            alt="Third slide"
          />
        </div>
      </Slider>
      <br /><br />
      <div id='about' className='flex w-[80%] mx-auto flex-wrap'>
        <div className='about-img mr-[10%] '>
          <img src="SAILOR.jpg" alt="" className='' />
        </div>
        <div className='about-content w-[50%]'>
          <h1 className='text-2xl font-semibold border-b-2 py-3'>ABOUT MERCHANT NAVY INSTITUTE & TRAINING CENTER</h1>
          <hr className='py-[2px] w-[20%] bg-yellow-500' />
          <br /><p className='text-sm leading-[1.75]'>
            <span className='font-semibold text-base'>Its a Unit of Navigation Maritime Services</span>
            <br />
            MNITC is an India’s leading Maritime Education provider located in Jaipur Rajasthan and is gradually emerging as a leader. we are working successfully last 13 years. MNITC has created the market of trust and not illusions. we assure you the best placement at highest packages accompanied by raising graph. we have an active placement team.
          </p>
        </div>
      </div>

      <div id='courses' className=' w-[80%] mx-auto'>
        <div>
          <h1 className='text-2xl font-semibold border-b-2 py-3'>OUR COURSES</h1>
          <hr className='py-[2px] w-[5%] bg-yellow-500' />
        </div>
        <br />
        <div className='flex flex-col md:flex-row md:flex-wrap gap-2'>
          <div className="courses flex lg:w-[45%]">
            <div className='mr-[10%]'><img src="Courses1.jpg" className='' alt="" /></div>
            <div className='w-[70%]'>
              <h1 className='font-semibold text-lg'>SDP</h1>
              <p className='text-gray-700 text-sm w-[200px]'>The PRE SEA TRAINING Course was introduced on request from the shopping industry.</p>
              <br />
              <button className='bg-yellow-500 p-2 font-semibold'>READ MORE </button>
            </div>
          </div>
          <div className="courses flex lg:w-[45%]">
            <div className='mr-[10%]'><img src="Courses4.jpg" className='' alt="" /></div>
            <div className='w-[70%]'>
              <h1 className='font-semibold text-lg'>OCCP</h1>
              <p className='text-gray-700 text-sm w-[200px]'>Pass in 10th standard or above from recognised board with 40% aggregate and 40% in English subject either in 10th or (10+2)</p>
              <br />
              <button className='bg-yellow-500 p-2 font-semibold'>READ MORE </button>
            </div>
          </div>
          <div className="courses flex lg:w-[45%]">
            <div className='mr-[10%]'><img src="Courses5.jpg" className='' alt="" /></div>
            <div className='w-[70%]'>
              <h1 className='font-semibold text-lg'>CCMC</h1>
              <p className='text-gray-700 text-sm w-[200px]'>The PRE SEA TRAINING Course was introduced on request from the shopping industry.</p>
              <br />
              <button className='bg-yellow-500 p-2 font-semibold'>READ MORE </button>
            </div>
          </div>
          <div className="courses flex lg:w-[45%]">
            <div className='mr-[10%]'><img src="Courses6.jpg" className='' alt="" /></div>
            <div className='w-[70%]'>
              <h1 className='font-semibold text-lg'>GPR</h1>
              <p className='text-gray-700 text-sm w-[200px]'>The PRE SEA TRAINING Course was introduced on request from the shopping industry.</p>
              <br />
              <button className='bg-yellow-500 p-2 font-semibold'>READ MORE </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#183650] py-5 my-10'>
        <div id='apply' className=' w-[80%] mx-auto flex items-center justify-center'>
          <div className='mr-[15%] flex justify-center items-center'>
            <img src="full-man.jpg" className='' alt="" />
          </div>
          <div className='flex flex-wrap w-[85%]  text-white '>
            <div className='w-[300px]'>
              <div className='flex items-center gap-2 '>
                <i className="fa fa-book text-cyan-300" aria-hidden="true"></i>
                <div className=''>
                  <h1 className='font-semibold'>APPLY ONLINE</h1>
                  <hr className='py-[1px] w-[20%] bg-yellow-700' />
                </div>
              </div>
              <p className='text-sm w-[200px] text-gray-400'>Apply Online 10+ Years Of Experience. Approved Course. </p>

            </div>
            <div className='w-[300px]'>
              <div className='flex items-center gap-2 '>
                <i className="fa fa-book text-cyan-300" aria-hidden="true"></i>
                <div className=''>
                  <h1 className='font-semibold'>PAY ONLINE</h1>
                  <hr className='py-[1px] w-[20%] bg-yellow-700' />
                </div>
              </div>
              <p className='text-sm w-[200px] text-gray-400'>The fees is to be paid online with the general candidates..</p>

            </div>
            <div className='w-[300px]'>
              <div className='flex items-center gap-2 '>
                <i className="fa fa-book text-cyan-300" aria-hidden="true"></i>
                <div className=''>
                  <h1 className='font-semibold'>OUR COURSES</h1>
                  <hr className='py-[1px] w-[20%] bg-yellow-700' />
                </div>
              </div>
              <p className='text-sm w-[200px] text-gray-400'>Available courses are gp rating, gme, dns, btech, eto, etc.</p>

            </div>
            <div className='w-[300px]'>
              <div className='flex items-center gap-2 '>
                <i className="fa fa-book text-cyan-300" aria-hidden="true"></i>
                <div className=''>
                  <h1 className='font-semibold'>GET A QUERY</h1>
                  <hr className='py-[1px] w-[20%] bg-yellow-700' />
                </div>
              </div>
              <p className='text-sm w-[200px] text-gray-400'>Available courses are gp rating, gme, dns, btech, eto, etc.</p>

            </div>
          </div>

        </div>
      </div>
      <div id='services' className='w-[80%] mx-auto pb-[5%]'>
        <div>
          <h1 className='text-2xl font-semibold border-b-2 py-3'>OUR FEATURED SERVICES</h1>
          <hr className='py-[2px] w-[5%] bg-yellow-500' />
        </div>
        <br />
        <div className='flex flex-wrap gap-2'>
          <div className='bg-white hover:bg-[#00E6F6] hover:cursor-pointer flex lg:w-[45%] justify-between'>
            <img src="1.png" alt="" className='w-40 mr-[10%]' />
            <div className='flex flex-col justify-center pr-10 '>
              <h1 className=' font-semibold'>WHAT IS MERCHANT NAVY
              </h1>
              <p className='text-xs w-[80%]'>The term “merchant navy” means a fleet of commercial ships that are not used for military purpose.</p>
            </div>
          </div>
          <div className='bg-white hover:bg-[#00E6F6] hover:cursor-pointer flex lg:w-[45%] justify-between'>
            <img src="2.png" alt="" className='w-40 mr-[10%]' />
            <div className='flex flex-col justify-center pr-10 '>
              <h1 className=' font-semibold'>10 REASONS TO JOIN</h1>
              <p className='text-xs w-[80%]'>
Our people and culture are redefining what it means to be a professional services firm.</p>
            </div>
          </div>
          <div className='bg-white hover:bg-[#00E6F6] hover:cursor-pointer flex lg:w-[45%] justify-between'>
            <img src="3.png" alt="" className='w-40 mr-[10%]' />
            <div className='flex flex-col justify-center pr-10 '>
              <h1 className=' font-semibold'>TYPES OF SHIPS</h1>
              <p className='text-xs w-[80%]'>Detailed information and links regarding Container ships, Bulk carriers, Tankers, Ferries, Cruise ships, etc.</p>
            </div>
          </div>
          <div className='bg-white hover:bg-[#00E6F6] hover:cursor-pointer flex lg:w-[45%] justify-between'>
            <img src="4.png" alt="" className='w-40 mr-[10%]' />
            <div className='flex flex-col justify-center pr-10 '>
              <h1 className=' font-semibold'>CAREER COMPARISON
</h1>
              <p className='text-xs w-[80%]'>Working at sea is a very exciting experience; your life style will be entirely different.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
