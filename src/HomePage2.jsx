import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminImage from "./assets/images/homepage/admin.jpg";
import amit from "./assets/images/homepage/amit.jpg";

const HomePage2 = () => {
  const [viewAcheiver, setViewAcheiver] = useState(false);
  const [viewAcheiver2, setViewAcheiver2] = useState(false);
  console.log(viewAcheiver);
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <section className=" hero-container mb-10 sm:mb-5 flex items-start pb-3">
        <div className='h-[140vh] before:absolute before:top-0 before:left-0 before:content-[""] before:bg-[var(--bg-dark-blue)] before:w-full before:h-[165vh] before:-z-10 hero-section w-full before:bg-cover before:bg-center before:opacity-100 px-10 flex justify-around items-start'>
          <div className="mt-36  flex sm:flex-row lg:flex-row items-center justify-around w-full flex-wrap space-x-5 sm:space-x-7 ">
            <div className="text-white max-w-2xl">
              <div>
                <h1 className="mb-2 text-6xl font-bold text-center leading-snug">
                  Build Bright Life?
                </h1>
                <h1 className="mb-2 text-6xl font-bold text-center leading-snug">
                  Learn Many Things Us
                </h1>
              </div>

              <div className="flex items-center justify-center my-5 ">
                <div className="m-3 flex items-center font-semibold">
                  <div className="w-7 h-7 flex justify-center items-center bg-[var(--golden)] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="mx-3 text-lg">Experts Advisors</span>
                </div>
                <div className="m-3 flex items-center font-semibold">
                  <div className="w-7 h-7 flex justify-center items-center bg-[var(--golden)] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="mx-3 text-lg">538+ Courses</span>
                </div>
                <div className="m-3 flex items-center font-semibold">
                  <div className="w-7 h-7 flex justify-center items-center bg-[var(--golden)] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="mx-3 text-lg">Events & Program</span>
                </div>
              </div>

              {/* Button and Play Button */}
              <div className="flex items-center justify-center">
                <button className="text-white hover:text-[var(--golden)] bg-[var(--golden)] hover:bg-[#204ecf] text-lg font-semibold px-10 py-4 rounded-md transition-colors duration-500">
                  <div className="flex items-center justify-center">
                    Get Started
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
                {/* Play */}
                <div className="flex items-center m-4">
                  <div className="flex items-center justify-center  w-12 h-12 rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#204ecf"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 font-semibold underline">
                    How it works
                  </div>
                </div>
              </div>

              {/* testimonial */}
              <div className="relative mt-36 bg-[#1c317c] max-w-xl py-10 px-10 leading-6 rounded-lg  shadow-lg">
                <div className=" opacity-70">
                  Sit amet consectetur adipiscing elit sed do eiusmod tempore
                  incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="flex items-center mt-7 opacity-70">
                  <div className="h-0.5 w-7 bg-[var(--golden)]"></div>
                  <span className="mx-3">Brendan E. Cote</span>
                </div>
                <img
                  src={adminImage}
                  className="absolute -top-8 -left-8 opacity-100 rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Price */}
      <section className="my-10 p-5">
        <h1 className="text-5xl text-center font-semibold my-10">Our Pride</h1>

        {/* Monthly Acheivers */}
        <div className="flex justify-around items-center my-10">
          {/* Instructor Of The Month */}
          <div
            onMouseEnter={() => setViewAcheiver(true)}
            onMouseLeave={() => setViewAcheiver(false)}
            className="relative w-64 h-40 rounded-2xl border bg-blue-500 hover:h-96 shadow-2xl transition-all"
          >
            <div
              className={`${
                viewAcheiver ? "-top-20" : ""
              } relative -top-10 transition-all left-4 z-20`}
            >
              <img src={amit} className="w-56 h-56 rounded-2xl" alt="" />
              <div className="text-xl font-bold my-1 ">
                Instructor Of The Month 🏆
              </div>
            </div>
            <div
              className={`${
                viewAcheiver ? "block" : "hidden"
              } relative -top-20 text-center p-3 animate__animated animate__fadeIn animate__slow`}
            >
              <h2 className="text-2xl font-extrabold text-center text-[black]">
                Amit Chauhan
              </h2>
              <p className="my-2">
                <span className="font-bold">Course :</span> CCC
              </p>
              <p>
                <span className="font-bold">Description :</span> Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Aliquid, fuga.
              </p>
            </div>
          </div>
          {/* Student Of The Month */}
          <div
            onMouseEnter={() => setViewAcheiver2(true)}
            onMouseLeave={() => setViewAcheiver2(false)}
            className="relative w-64 h-40 rounded-2xl border bg-blue-500 hover:h-96 shadow-2xl transition-all"
          >
            <div
              className={`${
                viewAcheiver2 ? "-top-20" : ""
              } relative -top-10 transition-all left-4 z-20`}
            >
              <img src={amit} className="w-56 h-56 rounded-2xl" alt="" />
              <div className="text-xl font-bold my-1 ">
                Student Of The Month 🏆
              </div>
            </div>
            <div
              className={`${
                viewAcheiver2 ? "block" : "hidden"
              } relative -top-20 text-center p-3 animate__animated animate__fadeIn animate__slow`}
            >
              <h2 className="text-2xl font-extrabold text-center text-[black]">
                Amit Chauhan
              </h2>
              <p className="my-2">
                <span className="font-bold">Course :</span> CCC
              </p>
              <p>
                <span className="font-bold">Description :</span> Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Aliquid, fuga.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage2;
