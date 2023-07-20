import React, { useEffect } from "react";
import { toast } from "react-toastify";
import about1 from "../assets/images/homepage/about-img-1.jpg";
import abtIco from "../assets/images/homepage/abt-ico.png";
import AOS from "aos";
import "aos/dist/aos.css";
import director from "../assets/images/homepage/director-1.jpg";
import DivyanshiSingh from "../assets/images/homepage/staff/Divyanshi-singh-(Teacher).jpeg";
import PratishthaDwivedi from "../assets/images/homepage/staff/Pratishtha-Dwivedi (Evening-manager).jpeg";
import PrabhatKumarSharma from "../assets/images/homepage/staff/Prabhat-kumar Sharma-(Teacher).png";
import MukeshKumar from "../assets/images/homepage/staff/Mukesh-kumar-(Teacher).jpeg";
import KomalVerma from "../assets/images/homepage/staff/Komal-verma-(Morning-manager).jpeg";
import AnujSrivastava from "../assets/images/homepage/staff/Anuj-Srivastava-(Teacher).JPG";

const About = () => {
  // toast("Wow so easy!");

  AOS.init({
    delay: 300,
    duration: 1000,
    // easing: "ease-in",
    mirror: false,
  });

  const staff = [
    {
      img: DivyanshiSingh,
      name: "Divyanshi Singh",
      position: "Teacher",
    },
    {
      img: PratishthaDwivedi,
      name: "Pratishtha Dwivedi",
      position: "Evening Manager",
    },
    {
      img: PrabhatKumarSharma,
      name: "Prabhat Kumar Sharma",
      position: "Teacher",
    },
    {
      img: MukeshKumar,
      name: "Mukesh Kumar",
      position: "Teacher",
    },
    {
      img: KomalVerma,
      name: "Komal Verma",
      position: "Morning Teacher",
    },
    {
      img: AnujSrivastava,
      name: "Anuj Srivastava",
      position: "Teacher",
    },
  ];
  return (
    <main>
      {/* About Heading */}
      <section className=" hero-container mb-10 sm:mb-5 flex items-start pb-3">
        <div className='h-[50vh] px-5 sm:px-6 md:px-8 lg:px-10 before:absolute before:top-0 before:left-0 before:content-[""] before:bg-[var(--bg-dark-blue)] before:w-full before:h-[70vh] before:-z-10 hero-section w-full before:bg-cover before:bg-center before:opacity-100  flex justify-around items-start'>
          <div className="mt-36  flex sm:flex-row lg:flex-row items-center justify-around w-full flex-wrap space-x-5 sm:space-x-7 ">
            <div className="text-white max-w-2xl">
              <div data-aos="fade-down" data-aos-delay="100">
                <h1 className="mb-2 text-4xl sm:text-6xl font-bold text-center leading-snug">
                  About
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* <img src={heroLeftImg} className="absolute bottom-0 left-5" alt="" /> */}
      </section>
      {/* About Us */}
      <section className="my-20 p-5">
        {/* About Us  */}
        <div className="mb-20">
          {/* <h1 className="text-4xl  font-semibold mb-5">About Us</h1> */}
          <p className="text-lg">
            SMS Education is a well-diversified an autonomous institute in the
            field of computer literacy, governed by distinctive and highly
            qualified professionals. SMS Education involves in preparing skilled
            computer professional environment. The courses are structured with
            special emphasis on personal development and compatibility in
            information technology with excellent infrastructure, core facility
            and rich library. the schemes & planning formation are reserved with
            the erudite professional & promoters of the institute - it is
            prompted to spread the rich guidance in order to satisfy country's
            fast growing new technology requirements.
          </p>
        </div>

        {/* About Container */}
        <div className="flex flex-col lg:flex-row justify-around xl:max-w-[80%] mx-auto">
          {/* left */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-5/12 md:w-10/12 sm:w-9/12 mx-auto"
          >
            <div className="relative flex justify-end p-2">
              <img src={about1} className="w-80 h-64 rounded-2xl" alt="" />
              <div className="absolute top-24 left-0 px-5 py-3 rounded-full text-xl font-bold flex items-center bg-white h-fit w-fit">
                <img src={abtIco} className="mr-2" alt="" />
                Experience Advisor
              </div>
            </div>
            <div className="relative -top-16 flex justify-start p-2">
              <img src={about1} className="w-80 h-64 rounded-2xl" alt="" />
              <div className="absolute top-28 right-0 px-5 py-3 rounded-full text-xl font-bold flex items-center bg-white h-fit w-fit">
                <img src={abtIco} className="mr-2" alt="" />
                Experience Advisor
              </div>
            </div>
          </div>

          {/* Right */}
          <div data-aos="fade-up" className="p-2">
            <h3 className="text-[var(--bg-dark-blue)] text-xl font-bold">
              About SMS
            </h3>
            <h1 className="text-5xl font-semibold my-5 lg:max-w-sm leading-tight">
              Experience To Learning Center
            </h1>
            <p className="lg:max-w-sm leading-7 mb-3 text-[var(--dash-text-color)]">
              SMS Education is a well-diversified an autonomous institute in the
              field of computer literacy, governed by distinctive and highly
              qualified professionals. SMS Education involves in preparing
              skilled computer professional environment.
            </p>
            {/* Button and How it works*/}
            <div className="flex items-center justify-start">
              <button className="text-white hover:text-[var(--golden)] bg-[var(--golden)] hover:bg-[#204ecf] text-lg px-10 py-4 rounded-md transition-colors duration-500">
                <div className="flex items-center justify-center uppercase">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </button>
              {/* How it Works */}
              <div className="flex items-center m-4 hover:text-[var(--golden)] transition-all duration-500 underline hover:no-underline cursor-pointer">
                <div className="ml-3 font-semibold underline">How it works</div>
                <div className="flex items-center justify-center  w-10 h-12 rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-around items-center">
              {/* Counter 1 */}
              <div className="w-fit h-fit py-3 px-2 m-2 text-center">
                <span className="text-4xl text-[var(--bg-dark-blue)] font-extrabold">
                  25 +
                </span>
                <p className="text-[var(--dash-text-color)] font-semibold mt-2">
                  Enrolled Learner
                </p>
              </div>
              {/* Counter 2 */}
              <div className="w-fit h-fit py-3 px-2 m-2 text-center">
                <span className="text-4xl text-[var(--bg-dark-blue)] font-extrabold">
                  25 +
                </span>
                <p className="text-[var(--dash-text-color)] font-semibold mt-2">
                  Finished Session
                </p>
              </div>
              {/* Counter 3 */}
              <div className="w-fit h-fit py-3 px-2 m-2 text-center">
                <span className="text-4xl text-[var(--bg-dark-blue)] font-extrabold">
                  25 %
                </span>
                <p className="text-[var(--dash-text-color)] font-semibold mt-2">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Director */}
      <section className="mt-20 mb-10 p-5">
        <h1 className="text-5xl text-center font-semibold mb-20">
          Meet Our Director
        </h1>
        <div className="flex flex-col lg:flex-row justify-around max-w-6xl mx-auto">
          {/* left */}
          <div data-aos="fade-right" className="mx-5 my-3">
            <img
              src={director}
              className="max-w-xl lg:max-w-sm w-full  lg:w-80 h-full lg:h-96 mx-auto"
              alt=""
            />
          </div>
          {/* Director message */}
          <div data-aos="fade-up" className="mx-auto lg:mx-5 my-10">
            <h1 className="text-4xl font-bold my-4  md:max-w-xl lg:max-w-xl xl:max-w-2xl">
              Saurabh Verma
            </h1>
            <h3 className="text-lg text-[var(--bg-dark-blue)]">
              Director - SMS Education
            </h3>
            <p className="text-3xl my-3 md:max-w-xl lg:max-w-xl xl:max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              necessitatibus cupiditate dolores corrupti odit ipsum vel sapiente
              maiores commodi veniam. Soluta a incidunt quos harum ut assumenda
              vero quidem quam.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Meet Our Team
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Welcome</span>
              </span>{" "}
              our talented team of professionals
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Meet our exceptional team of skilled tech enthusiasts, dedicated
              to guiding you on a transformative learning journey. With their
              expertise and passion, they empower you to conquer the digital
              world with confidence
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((item) => {
              return (
                <div>
                  <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-contain w-full h-56 md:h-64 xl:h-80"
                      src={item.img}
                      alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-1 text-lg font-bold text-gray-100">
                        {item.name}
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        {item.position}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
