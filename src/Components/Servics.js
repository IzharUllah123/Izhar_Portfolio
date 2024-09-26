import React from 'react';
import Slider from 'react-slick';
import '../App.css'; // Ensure the path is correct

const Servics = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    { id: 1, title: 'Full Stack Web Development', description: 'Comprehensive web development service covering both frontend and backend. I use React for engaging user interfaces and Node.js for robust server-side solutions, ensuring a seamless and compelling online experience.' },
    { id: 2, title: 'Frontend Development', description: 'Focused on creating interactive and responsive user interfaces using modern frameworks like React.' },
    { id: 3, title: 'Machine Learning Engineering', description: 'Delivering predictive analytics and AI solutions through machine learning models and algorithms.' },
  ];

  return (
    <div className='flex flex-col mt-8'>
      <h1 className='mx-auto mb-3 font-semibold'>Services</h1>
      <div className="w-[85%] max-w-6xl mx-auto ">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="p-2">
              <div className="card-container pb-5 ml-4">
                <div className="card   ">
                
                  <div className=" card-content ">
                    <h3 className="text-sm font-bold mb-2">{card.title}</h3>
                    <p className='text-justify text-sm'>{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Servics;
