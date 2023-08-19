import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Courses } from '../DummyData';

const TestSlider = ({ getCategoryName }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 3) % Courses.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? Courses.length - 3 : prevIndex - 3
        );
    };

    const autoPlayInterval = 5000; // Change this value to adjust the auto-play interval in milliseconds

    useEffect(() => {
        const autoPlayTimer = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => {
            clearInterval(autoPlayTimer);
        };
    }, []);


    return (
        <div className="slider-container relative">
            <div className="slider flex justify-evenly gap-5">
                {Courses &&
                    // [...courses, ...courses.sort(() => Math.random() - 0.5).map((e) => e)].sort(() => Math.random() - 0.5).map((course, index) => {
                    Courses.slice(activeIndex, activeIndex + 3).map((course, index) => {
                        return (
                            <div key={index} className="slide">
                                <Card
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    className="m-10 w-72 sm:w-64 md:w-80 lg:w-72 xl:w-96 mx-auto"
                                >
                                    <CardHeader color="blue-gray" className="relative h-56">
                                        <img
                                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                            alt="img-blur-shadow"
                                            layout="fill"
                                            className="h-full w-full"
                                        />
                                    </CardHeader>
                                    <CardBody className="pb-2">
                                        <Typography variant="h6" color="blue" className="mb-2">
                                            {course.category
                                                ? getCategoryName(course.category)
                                                : ""}
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            color="blue-gray"
                                            className="mb-2"
                                        >
                                            <Link
                                                to="/course/course-details"
                                                className="hover:text-[var(--golden)] transition-colors duration-300"
                                                state={course}
                                            >
                                                {course.title && course.title}
                                            </Link>
                                        </Typography>
                                        <Typography className="mb-2 h-14 overflow-hidden">
                                            {course.desc && course.desc}
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
                                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                    />
                                                </svg>

                                                <span className="text-start ">
                                                    {" "}
                                                    {course && course.lessons} Lessons
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
                                                        d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <span className="text-start ">
                                                    Rs. {course.price && course.price}/-
                                                </span>
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        );
                    })}
            </div>
            <button
                className="prev-button bg-gray-300 px-4 py-2 rounded-lg mr-2 absolute left-0 top-1/2 transform -translate-y-1/2"
                onClick={prevSlide}
            >
                &#60;
            </button>
            <button
                className="next-button bg-blue-500 text-white px-4 py-2 rounded-lg absolute right-0 top-1/2 transform -translate-y-1/2"
                onClick={nextSlide}
            >
                &#62;
            </button>
        </div>
    );
};

export default TestSlider;


{/* <Carousel
className="h-[80vh] w-full"
autoplay
prevArrow={false}
nextArrow={false}
navigation={false}
loop={true}
>
{courses &&
  courses.map((course) => {
    return (
      <Card
        data-aos="fade-up"
        data-aos-delay="100"
        className="m-10 w-72 sm:w-64 md:w-80 lg:w-72 xl:w-96 mx-auto"
      >
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="img-blur-shadow"
            layout="fill"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="pb-2">
          <Typography variant="h6" color="blue" className="mb-2">
            {course.category
              ? getCategoryName(course.category)
              : ""}
          </Typography>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2"
          >
            <Link
              to="/course/course-details"
              className="hover:text-[var(--golden)] transition-colors duration-300"
              state={course}
            >
              {course.title && course.title}
            </Link>
          </Typography>
          <Typography className="mb-2 h-14 overflow-hidden">
            {course.desc && course.desc}
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>

              <span className="text-start ">
                {" "}
                {course && course.lessons} Lessons
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
                  d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-start ">
                Rs. {course.price && course.price}/-
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>

    );
  })}
</Carousel> */}
