import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import adminImage from "./assets/images/homepage/admin.jpg";
import studentMonth from "./assets/images/homepage/student-month.jpg";
import teacherMonth from "./assets/images/homepage/teacher-month.jpg";
import oppor1 from "./assets/images/homepage/oppor1.png";
import oppor2 from "./assets/images/homepage/oppor2.png";
import oppor3 from "./assets/images/homepage/oppor3.png";
import about1 from "./assets/images/homepage/about-img-1.jpg";
import about2 from "./assets/images/homepage/about-img-2.jpg";
import abtIco from "./assets/images/homepage/abt-ico.png";
import director from "./assets/images/homepage/director-1.jpg";
import member1 from "./assets/images/homepage/member1.png";
import member2 from "./assets/images/homepage/member2.png";
import member3 from "./assets/images/homepage/member3.png";
import member4 from "./assets/images/homepage/member4.png";
import member5 from "./assets/images/homepage/member5.png";
import testimonial1 from "./assets/images/homepage/testi-1.jpg";
import centre1 from "./assets/images/homepage/centre-1.jpg";
import centre2 from "./assets/images/homepage/centre-2.jpg";
import asInstructor from "./assets/images/homepage/join-instructor.png";
import asStudent from "./assets/images/homepage/join-student.png";
import DivyanshiSingh from "./assets/images/homepage/staff/Divyanshi-singh-(Teacher).jpeg";
import PratishthaDwivedi from "./assets/images/homepage/staff/Pratishtha-Dwivedi (Evening-manager).jpeg";
import PrabhatKumarSharma from "./assets/images/homepage/staff/Prabhat-kumar Sharma-(Teacher).png";
import MukeshKumar from "./assets/images/homepage/staff/Mukesh-kumar-(Teacher).jpeg";
import KomalVerma from "./assets/images/homepage/staff/Komal-verma-(Morning-manager).jpeg";
import AnujSrivastava from "./assets/images/homepage/staff/Anuj-Srivastava-(Teacher).JPG";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const HomePage2 = () => {
  const [viewAcheiver, setViewAcheiver] = useState(false);
  const [viewAcheiver2, setViewAcheiver2] = useState(false);
  // const [studentOfMonth,]
  const navigate = useNavigate();

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
    <>
      <main>
        {/* Hero Section */}
        <section className=" hero-container mb-10 sm:mb-5 flex items-start pb-3">
          <div className='h-[140vh] px-5 sm:px-6 md:px-8 lg:px-10 before:absolute before:top-0 before:left-0 before:content-[""] before:bg-[var(--bg-dark-blue)] before:w-full before:h-[165vh] before:-z-10 hero-section w-full before:bg-cover before:bg-center before:opacity-100  flex justify-around items-start'>
            <div className="mt-36  flex sm:flex-row lg:flex-row items-center justify-around w-full flex-wrap space-x-5 sm:space-x-7 ">
              <div className="text-white max-w-2xl">
                <div data-aos="fade-down" data-aos-delay="100">
                  <h1 className="mb-2 text-4xl uppercase  sm:text-6xl font-bold text-center leading-snug">
                    SMS Education
                  </h1>
                  <h1 className="mb-2 text-xl   sm:text-3xl font-bold text-center leading-snug">
                    Nielit Computer Center
                  </h1>
                </div>

                <div
                  data-aos="fade-down"
                  data-aos-delay="500"
                  className="flex items-center justify-center flex-wrap my-5 "
                >
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
                <div
                  data-aos="fade-down"
                  data-aos-delay="1000"
                  className="flex items-center justify-center flex-wrap"
                >
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
                <div
                  data-aos="fade-up"
                  className="relative mt-36 px-5 sm:px-6 md:px-8 lg:px-10 bg-[#1c317c] w-fit max-w-xl py-10 leading-6 rounded-lg  shadow-lg"
                >
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

          {/* <img src={heroLeftImg} className="absolute bottom-0 left-5" alt="" /> */}
        </section>

        {/* About Us */}
        <section className="my-20 p-5">
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
                SMS Education is a well-diversified an autonomous institute in
                the field of computer literacy, governed by distinctive and
                highly qualified professionals. SMS Education involves in
                preparing skilled computer professional environment.
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

        {/* Location */}
        <section data-aos="fade-up" className="mt-20 mb-10 p-5">
          <h1 className="text-5xl text-center font-semibold my-10">
            Locations
          </h1>
          <div className="flex flex-col lg:flex-row flex-wrap justify-around mx-auto py-10">
            <Card
              data-aos="fade-right"
              className="flex-row w-full max-w-lg m-5"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="w-2/5 shrink-0 m-0 rounded-r-none"
              >
                <img
                  src={centre1}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h6"
                  color="blue"
                  className="uppercase mb-4"
                >
                  Branch
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  SMS - Sarojini nagar
                </Typography>
                <Typography color="gray" className="font-normal mb-8">
                  Kudrat Vihar Colony, Sarojini Nagar, Lucknow, Uttar Pradesh
                  226008
                </Typography>
                <a
                  href="https://goo.gl/maps/NKysRroC4qWoepn86"
                  target="_blank"
                  className="inline-block"
                >
                  <Button variant="text" className="flex items-center gap-2">
                    View on Map
                    <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                  </Button>
                </a>
              </CardBody>
            </Card>
            <Card data-aos="fade-left" className="flex-row w-full max-w-lg m-5">
              <CardHeader
                shadow={false}
                floated={false}
                className="w-2/5 shrink-0 m-0 rounded-r-none"
              >
                <img
                  src={centre2}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h6"
                  color="blue"
                  className="uppercase mb-4"
                >
                  Branch
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  SMS - Hajratganj
                </Typography>
                <Typography color="gray" className="font-normal mb-8">
                  Kudrat Vihar Colony, Sarojini Nagar, Lucknow, Uttar Pradesh
                  226008
                </Typography>
                <a href="#" className="inline-block">
                  <Button variant="text" className="flex items-center gap-2">
                    View on Map
                    <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* SPECIAL FEATURES */}
        <section data-aos="fade-up" className="mt-20 mb-10 p-5">
          <h1 className="text-5xl text-center font-semibold my-10">
            SPECIAL FEATURES
          </h1>
          <div className=" my-20">
            <ul class="w-fit mx-5 sm:mx-10 md:mx-20 space-y-4 text-left text-[var(--para-color)] flex flex-col md:flex-row md:justify-start md:flex-wrap ">
              <li class="flex items-center space-x-3 w-full md:w-1/2 p-2">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Highly qualified and dedicated faculty.</span>
              </li>
              <li class="flex items-center space-x-3 w-full md:w-1/2 p-2">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Most modern computer lab.</span>
              </li>
              <li class="flex items-center space-x-3 w-full md:w-1/2 p-2">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Latest hardware and software.</span>
              </li>
              <li class="flex items-center space-x-3 w-full md:w-1/2 p-2">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Courses are designed to impart job-oriented skills.</span>
              </li>
              <li class="flex items-center space-x-3 w-full md:w-1/2 p-2">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>
                  Specialized short-term courses for the executives, businessman
                  and educated housewives.
                </span>
              </li>
              <li class="flex items-center space-x-3 w-full md:w-1/2 p-2">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Internet access</span>
              </li>
              <li class="flex items-center space-x-3 w-full md:w-1/2 p-2">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>
                  Multimedia supported tutorial package based on "DO YOURSELF"
                </span>
              </li>
              <li class="flex items-center space-x-3 w-full md:w-1/2 p-2">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Special practical timing for meritorious students.</span>
              </li>
              <li class="flex items-center space-x-3 w-full md:w-1/2 p-2">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5 text-green-500  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>
                  Scholarship and fee concession for those having exceptional
                  academic record.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Our Pride */}
        <section data-aos="fade-up" className="my-10 p-5">
          <h1 className="text-5xl text-center font-semibold my-10">
            Our Pride
          </h1>

          {/* Monthly Acheivers */}
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start  my-10 py-20">
            {/* Instructor Of The Month */}
            <div
              onMouseEnter={() => setViewAcheiver(true)}
              onMouseLeave={() => setViewAcheiver(false)}
              className="relative w-64 h-40 rounded-2xl border hover:h-96 shadow-2xl transition-all  duration-500"
            >
              <div
                className={`${
                  viewAcheiver ? "-top-20" : ""
                } relative -top-10 transition-all left-4 z-20`}
              >
                <img
                  src={teacherMonth}
                  className="w-56 h-56 rounded-2xl"
                  alt=""
                />
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
              className="relative top-40 w-64 h-40 rounded-2xl border hover:h-96 shadow-2xl transition-all duration-500"
            >
              <div
                className={`${
                  viewAcheiver2 ? "-top-20" : ""
                } relative -top-10 transition-all left-4 z-20`}
              >
                <img
                  src={studentMonth}
                  className="w-56 h-56 rounded-2xl"
                  alt=""
                />
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

        {/* Success Mantra */}
        <section data-aos="fade-up" className="bg-white mt-32 md:mt-0">
          <h1 className="text-5xl text-center font-semibold my-10">
            Success Mantra
          </h1>

          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
            <div className=" text-gray-500 sm:text-lg ">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                Abhishek Singh
              </h2>
              <h3 className="text-[var(--bg-dark-blue)] text-xl font-bold mb-3">
                - CCNA
              </h3>
              <p className="mb-4 text-[var(--para-color)]">
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick, but big
                enough to deliver the scope you want at the pace you need. Small
                enough to be simple and quick, but big enough to deliver the
                scope you want at the pace you need.
              </p>
              <p className="text-[var(--para-color)]">
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
              <img
                className="mt-4 w-[70%] mx-auto h-96 lg:mt-10 rounded-lg"
                src={testimonial1}
                alt="office content 2"
              />
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
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="w-fit m-5 p-3"
            >
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
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="w-fit m-5 p-3"
            >
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
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="w-fit m-5 p-3"
            >
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
            <Card
              data-aos="fade-up"
              data-aos-delay="100"
              className="m-10 w-96 mx-auto"
            >
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
            <Card
              data-aos="fade-up"
              data-aos-delay="400"
              className="m-10 w-96 mx-auto"
            >
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
            <Card
              data-aos="fade-up"
              data-aos-delay="700"
              className="m-10 w-96 mx-auto"
            >
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
                necessitatibus cupiditate dolores corrupti odit ipsum vel
                sapiente maiores commodi veniam. Soluta a incidunt quos harum ut
                assumenda vero quidem quam.
              </p>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="mt-20 mb-10 p-5">
          <h3 className="text-[var(--bg-dark-blue)] text-xl text-center font-bold">
            Event & Program
          </h3>
          <h1 className="text-5xl text-center font-semibold my-10">
            Upcoming Events & Program
          </h1>
          {/* Events Container */}
          <div className="flex justify-around items-center flex-wrap">
            {/* Event - 1 */}
            <div
              data-aos="fade-up"
              className="mx-3 my-5 flex flex-col sm:flex-row items-center w-[95%] sm:w-fit shadow-xl rounded"
            >
              <div className="flex justify-between w-full sm:w-fit">
                <div className="mx-3 my-2 text-[var(--dash-text-color)] font-bold text-xl w-fit">
                  <div>Mar</div>{" "}
                  <div className="text-5xl text-black font-extrabold my-4">
                    03
                  </div>{" "}
                  <div>2023</div>
                </div>
                <div className="py-4 mx-3 h-32 w-32">
                  <img src={about2} className="h-32 w-32 rounded-full" alt="" />
                </div>
              </div>
              <div className="mx-3">
                {/* Address */}
                <div className="my-4 flex items-center text-[var(--dash-text-color)] text-lg ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="var(--golden)"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  55 Main Street, USA
                </div>
                <h3 className="max-w-sm my-4 text-3xl font-extrabold text-black hover:text-[var(--golden)] transition-colors duration-500">
                  Useful VS Code Extensions Front-End Developers
                </h3>
                <div className="flex items-center m-3 hover:text-[var(--golden)] transition-all duration-500 underline hover:no-underline cursor-pointer">
                  <div className="ml-3 font-semibold underline">Know More</div>
                  <div className="flex items-center justify-center  w-10 h-12 rounded-full">
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
            </div>
            {/* Event - 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mx-3 my-5 flex flex-col sm:flex-row items-center w-[95%] sm:w-fit shadow-xl rounded"
            >
              <div className="flex justify-between w-full sm:w-fit">
                <div className="mx-3 my-2 text-[var(--dash-text-color)] font-bold text-xl w-fit">
                  <div>Mar</div>{" "}
                  <div className="text-5xl text-black font-extrabold my-4">
                    03
                  </div>{" "}
                  <div>2023</div>
                </div>
                <div className="py-4 mx-3 h-32 w-32">
                  <img src={about2} className="h-32 w-32 rounded-full" alt="" />
                </div>
              </div>
              <div className="mx-3">
                {/* Address */}
                <div className="my-4 flex items-center text-[var(--dash-text-color)] text-lg ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="var(--golden)"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  55 Main Street, USA
                </div>
                <h3 className="max-w-sm my-4 text-3xl font-extrabold text-black hover:text-[var(--golden)] transition-colors duration-500">
                  Useful VS Code Extensions Front-End Developers
                </h3>
                <div className="flex items-center m-3 hover:text-[var(--golden)] transition-all duration-500 underline hover:no-underline cursor-pointer">
                  <div className="ml-3 font-semibold underline">Know More</div>
                  <div className="flex items-center justify-center  w-10 h-12 rounded-full">
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
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="mt-20 mb-10 p-5">
          <h1 className="text-5xl text-center font-semibold my-10">Join Us</h1>
          <div className="flex flex-col flex-wrap lg:flex-row justify-around mx-auto py-10">
            <Card
              data-aos="fade-right"
              className=" flex flex-col md:flex-row justify-center w-full max-w-lg m-5"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="w-[80%] sm:w-[70%] md:w-2/5 shrink-0 m-0 rounded-r-none"
              >
                <img
                  src={asInstructor}
                  alt="image"
                  className="w-full h-full object-contain"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Become An Instructor?
                </Typography>
                <Typography color="gray" className="font-normal mb-8">
                  Are you passionate about sharing your knowledge and expertise?
                  Join our team of instructors and become a part of our dynamic
                  learning community.
                </Typography>
                <button className="mx-3 text-white hover:text-[var(--golden)] bg-[var(--golden)] hover:bg-[#204ecf] text-md px-5 py-4 rounded-md transition-colors duration-500">
                  <div className="flex items-center justify-center uppercase">
                    Join Now
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
              </CardBody>
            </Card>
            <Card
              data-aos="fade-left"
              className=" flex flex-col md:flex-row justify-center w-full max-w-lg m-5"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="w-[80%] sm:w-[70%] md:w-2/5 shrink-0 m-0 rounded-r-none"
              >
                <img
                  src={asStudent}
                  alt="image"
                  className="w-full h-full object-contain"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Get Our Courses
                </Typography>
                <Typography
                  color="gray"
                  className="font-normal mb-8 leading-relaxed"
                >
                  Unlock your potential with our exceptional courses. Gain
                  access to a world of knowledge and expertise that will empower
                  you to achieve your goals.
                </Typography>
                <button className="mx-3 text-white hover:text-[var(--golden)] bg-[var(--golden)] hover:bg-[#204ecf] text-md px-5 py-4 rounded-md transition-colors duration-500">
                  <div className="flex items-center justify-center uppercase">
                    Learn Now
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
              </CardBody>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage2;
