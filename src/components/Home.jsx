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
    <div className="container mx-auto mt-5 bg-zinc-200">
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
      <div id='about' className=''>
        <div className='about-img'>

        </div>
        <div className='about-content'>

        </div>
      </div>
      <div id='courses' className=''>
        <div className="courses"></div>
        <div className="courses"></div>
        <div className="courses"></div>
        <div className="courses"></div>
      </div>
      <div id='apply' className=''>
        
      </div>
      <div id='services' className=''>

      </div>
    </div>
  );
}

export default Home;
