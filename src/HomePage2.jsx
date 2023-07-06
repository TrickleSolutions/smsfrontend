import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminImage from "./assets/images/homepage/admin.jpg";
import amit from "./assets/images/homepage/amit.jpg";
import oppor1 from "./assets/images/homepage/oppor1.png";
import oppor2 from "./assets/images/homepage/oppor2.png";
import oppor3 from "./assets/images/homepage/oppor3.png";
import about1 from "./assets/images/homepage/about-img-1.jpg";
import about2 from "./assets/images/homepage/about-img-2.jpg";
import abtIco from "./assets/images/homepage/abt-ico.png";
import member1 from "./assets/images/homepage/member1.png";
import member2 from "./assets/images/homepage/member2.png";
import member3 from "./assets/images/homepage/member3.png";
import member4 from "./assets/images/homepage/member4.png";
import member5 from "./assets/images/homepage/member5.png";
import director from "./assets/images/homepage/director-1.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const HomePage2 = () => {
  const [viewAcheiver, setViewAcheiver] = useState(false);
  const [viewAcheiver2, setViewAcheiver2] = useState(false);
  console.log(viewAcheiver);
  const navigate = useNavigate();
  return (
    <>
      <main>
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

        {/* About Us */}
        <section className="my-20 p-5">
          {/* About Container */}
          <div className="flex flex-col lg:flex-row justify-around xl:max-w-[80%] mx-auto">
            {/* left */}
            <div className="w-full lg:w-5/12 md:w-10/12 sm:w-9/12 mx-auto">
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
            <div className="p-2">
              <h3 className="text-[var(--bg-dark-blue)] text-xl font-bold">
                About SMS
              </h3>
              <h1 className="text-5xl font-semibold my-5 lg:max-w-sm leading-tight">
                Experience To Learning Center
              </h1>
              <p className="lg:max-w-sm leading-7 mb-3 text-[var(--dash-text-color)]">
                SMS Education is a well-diversified an autonomous institute in
                the field of computer literacy, governed by distinctive and
                highly qualified professionals.
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
                {/* Play */}
                <div className="flex items-center m-4 hover:text-[var(--golden)] transition-all duration-500 underline hover:no-underline cursor-pointer">
                  <div className="ml-3 font-semibold underline">
                    How it works
                  </div>
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

        {/* Our Pride */}
        <section className="my-10 p-5">
          <h1 className="text-5xl text-center font-semibold my-10">
            Our Pride
          </h1>

          {/* Monthly Acheivers */}
          <div className="flex justify-around items-center flex-wrap my-10">
            {/* Instructor Of The Month */}
            <div
              onMouseEnter={() => setViewAcheiver(true)}
              onMouseLeave={() => setViewAcheiver(false)}
              className="relative w-64 h-40 rounded-2xl border hover:h-96 shadow-2xl transition-all"
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
              className="relative w-64 h-40 rounded-2xl border hover:h-96 shadow-2xl transition-all"
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

        {/* Opportunity For Learning */}
        <section className="mt-28 mb-10 p-5">
          <h3 className="text-[var(--bg-dark-blue)] text-xl text-center font-bold">
            How About SMS
          </h3>
          <h1 className="text-5xl text-center font-semibold my-10">
            Opportunity For Learning
          </h1>
          {/* Oppotunities Container */}
          <div className="flex justify-around mt-20 py-5  flex-wrap md:px-10">
            <div className="w-fit m-5 p-3">
              <img src={oppor1} alt="" />
              <h3 className="font-bold text-xl my-3">Courses From Experts</h3>
              <p className="max-w-xs text-[var(--para-color)] pr-5">
                Unlock your potential with our courses led by industry experts.
                Gain invaluable knowledge and skills from seasoned professionals
                who are at the forefront of their respective fields.
              </p>
              <div className="hover:text-[var(--golden)] transition-all my-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div className="w-fit m-5 p-3">
              <img src={oppor2} alt="" />
              <h3 className="font-bold text-xl my-3">Courses From Experts</h3>
              <p className="max-w-xs text-[var(--para-color)] pr-5">
                Unlock your potential with our courses led by industry experts.
                Gain invaluable knowledge and skills from seasoned professionals
                who are at the forefront of their respective fields.
              </p>
              <div className="hover:text-[var(--golden)] transition-all my-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div className="w-fit m-5 p-3">
              <img src={oppor3} alt="" />
              <h3 className="font-bold text-xl my-3">Courses From Experts</h3>
              <p className="max-w-xs text-[var(--para-color)] pr-5">
                Unlock your potential with our courses led by industry experts.
                Gain invaluable knowledge and skills from seasoned professionals
                who are at the forefront of their respective fields.
              </p>
              <div className="hover:text-[var(--golden)] transition-all my-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Browse Latest Courses */}
        <section className="my-10 p-5">
          <h3 className="text-[var(--bg-dark-blue)] text-xl text-center font-bold">
            Latest Courses
          </h3>
          <h1 className="text-5xl text-center font-semibold my-10">
            Browser Latest Courses
          </h1>
          {/* Oppotunities Container */}
          <div className="flex justify-around items-center mt-20 py-5  flex-wrap md:px-10">
            <Card className="m-10 w-96 mx-auto">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="img-blur-shadow"
                  layout="fill"
                />
                <div>Rs. 8K</div>
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="blue" className="mb-2">
                  Networking
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  ADCA - Advanced Diploma in Computer Applications
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <div className=" flex justify-between items-center text-center">
                  <div className="flex items-center text-sm m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                    <span>
                      By <span className="font-bold">Amit Singh</span>
                    </span>
                  </div>
                  <div className="flex items-center text-sm m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>

                    <span>13 Lessons</span>
                  </div>
                  <div className="flex items-center text-sm m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Rs. 6999/-</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="m-10 w-96 mx-auto">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="img-blur-shadow"
                  layout="fill"
                />
                <div>Rs. 8K</div>
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="blue" className="mb-2">
                  Networking
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  ADCA - Advanced Diploma in Computer Applications
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <div className=" flex justify-between items-center text-center">
                  <div className="flex items-center text-sm m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                    <span>
                      By <span className="font-bold">Amit Singh</span>
                    </span>
                  </div>
                  <div className="flex items-center text-sm m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>

                    <span>13 Lessons</span>
                  </div>
                  <div className="flex items-center text-sm m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Rs. 6999/-</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="m-10 w-96 mx-auto">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="img-blur-shadow"
                  layout="fill"
                />
                <div>Rs. 8K</div>
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="blue" className="mb-2">
                  Networking
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  ADCA - Advanced Diploma in Computer Applications
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <div className=" flex justify-between items-center text-center">
                  <div className="flex items-center text-sm m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                    <span>
                      By <span className="font-bold">Amit Singh</span>
                    </span>
                  </div>
                  <div className="flex items-center text-sm m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>

                    <span>13 Lessons</span>
                  </div>
                  <div className="flex items-center text-sm m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>Rs. 6999/-</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="mt-20 mb-10 p-5 bg-[var(--bg-dark-blue)] text-white">
          <div className="flex flex-col lg:flex-row justify-around items-center sm:px-5 lg:px-10 ">
            {/* left */}
            <div className="py-10">
              <h3 className="text-xl font-bold">Meet Our Team</h3>
              <h1 className="text-5xl font-bold my-5  md:max-w-xl lg:max-w-xl xl:max-w-2xl">
                We Have Thousands Of Experience Team Members
              </h1>
              <p className="text-[var(--para-color)] md:max-w-xl lg:max-w-xl xl:max-w-2xl">
                Allow us to introduce our remarkable team, a group of passionate
                individuals who are dedicated to delivering exceptional
                services.
              </p>
              {/* List */}
              <div className="my-10">
                <div className="flex items-center font-bold mx-3 my-5">
                  <div className="w-7 h-7 mr-5 flex justify-center items-center bg-[var(--golden)] rounded-full">
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
                  Experience Team Members
                </div>
                <div className="flex items-center font-bold mx-3 my-5">
                  <div className="w-7 h-7 mr-5 flex justify-center items-center bg-[var(--golden)] rounded-full">
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
                  Lot’s of Video Tutorials
                </div>
                <div className="flex items-center font-bold mx-3 my-5">
                  <div className="w-7 h-7 mr-5 flex justify-center items-center bg-[var(--golden)] rounded-full">
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
                  Events & Programs
                </div>
                <div className="flex items-center font-bold mx-3 my-5">
                  <div className="w-7 h-7 mr-5 flex justify-center items-center bg-[var(--golden)] rounded-full">
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
                  Free & Premium Courses
                </div>
              </div>
              <button className="mx-3 text-white hover:text-[var(--golden)] bg-[var(--golden)] hover:bg-[#204ecf] text-md px-5 py-4 rounded-md transition-colors duration-500">
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
            </div>

            {/* Right */}
            <div className="static lg:relative -top-32 flex items-center justify-center min-w-min">
              {/* 1st col */}
              <div>
                {/* image - 1  */}
                <div>
                  <img src={member1} className="h-64 w-56 m-2" alt="" />
                </div>
                {/* image - 2  */}
                <div>
                  <img src={member2} className="h-64 w-56 m-2" alt="" />
                </div>
              </div>
              {/* 2nd col */}
              <div>
                {/* image - 1  */}
                <div>
                  <img src={member3} className="h-64 w-56 m-2" alt="" />
                </div>
                {/* image - 2  */}
                <div>
                  <img src={member4} className="h-64 w-56 m-2" alt="" />
                </div>
                <div>
                  <img src={member5} className="h-64 w-56 m-2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Director */}
        <section className="mt-20 mb-10 p-5">
          <div className="flex flex-col lg:flex-row justify-around max-w-6xl mx-auto">
            {/* left */}
            <div className="mx-5 my-3">
              <img
                src={director}
                className="max-w-xl lg:max-w-sm w-full  lg:w-80 h-full lg:h-96 mx-auto"
                alt=""
              />
            </div>
            {/* Director message */}
            <div className="mx-auto lg:mx-5 my-10">
              <h1 className="text-4xl font-bold my-4  md:max-w-xl lg:max-w-xl xl:max-w-2xl">
                Saurabh Verma
              </h1>
              <h3 className="text-lg text-[var(--bg-dark-blue)]">
                Director - SMS Education
              </h3>
              <p className="text-3xl my-3 md:max-w-xl lg:max-w-xl xl:max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                necessitatibus cupiditate dolores corrupti odit ipsum vel
                sapiente maiores commodi veniam. Soluta a incidunt quos harum ut
                assumenda vero quidem quam.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage2;
