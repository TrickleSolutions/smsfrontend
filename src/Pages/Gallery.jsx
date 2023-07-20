import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import premise1 from "../assets/images/homepage/premises1/premise1.JPG";

const Gallery = () => {
  AOS.init({
    delay: 300,
    duration: 1000,
    // easing: "ease-in",
    mirror: false,
  });

  const centerPremises = [
    {
      img: premise1,
    },
  ];

  return (
    <main>
      {/* Blogs Heading */}
      <section className=" hero-container mb-10 sm:mb-5 flex items-start pb-3">
        <div className='h-[50vh] px-5 sm:px-6 md:px-8 lg:px-10 before:absolute before:top-0 before:left-0 before:content-[""] before:bg-[var(--bg-dark-blue)] before:w-full before:h-[70vh] before:-z-10 hero-section w-full before:bg-cover before:bg-center before:opacity-100  flex justify-around items-start'>
          <div className="mt-36  flex sm:flex-row lg:flex-row items-center justify-around w-full flex-wrap space-x-5 sm:space-x-7 ">
            <div className="text-white max-w-2xl">
              <div data-aos="fade-down" data-aos-delay="100">
                <h1 className="mb-2 text-4xl sm:text-6xl font-bold text-center leading-snug">
                  Gallery
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* <img src={heroLeftImg} className="absolute bottom-0 left-5" alt="" /> */}
      </section>

      {/* Center Premises */}

      <section className="my-10 p-5">
        <h3 className="my-10 text-teal-900 text-2xl uppercase text-center font-bold">
          Center Premises
        </h3>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          {centerPremises.map((item) => {
            return (
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src={item.img}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
