import Aos from "aos";
import React from "react";
import courseLearn from "../../assets/images/course-details/course-learn.jpg";
import pointingFinger from "../../assets/images/course-details/pointing-finger.png";

const CourseDetails = () => {
  Aos.init({
    delay: 300,
    duration: 1000,
    // easing: "ease-in",
    mirror: false,
  });
  return (
    <>
      {/* Course Details Heading */}
      <section className=" hero-container mb-10 sm:mb-5 flex items-start pb-3">
        <div className='h-[50vh] px-5 sm:px-6 md:px-8 lg:px-10 before:absolute before:top-0 before:left-0 before:content-[""] before:bg-[var(--bg-dark-blue)] before:w-full before:h-[70vh] before:-z-10 hero-section w-full before:bg-cover before:bg-center before:opacity-100  flex justify-around items-start'>
          <div className="mt-36  flex sm:flex-row lg:flex-row items-center justify-around w-full flex-wrap space-x-5 sm:space-x-7 ">
            <div className="text-white max-w-2xl">
              <div data-aos="fade-down" data-aos-delay="100">
                <h1 className="mb-2 text-4xl sm:text-6xl font-bold text-center leading-snug">
                  Course Details
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* <img src={heroLeftImg} className="absolute bottom-0 left-5" alt="" /> */}
      </section>

      {/* Course Details Container */}
      <section>
        <div className="max-w-[90%] mx-auto">
          {/* Left */}
          <div className="w-4/6">
            {/* Rating div */}
            <div className="flex items-center">
              <div className="mx-2 text-lg text-[var(--bg-dark-blue)] font-semibold">
                Web Design
              </div>
              <div className="mx-2 py-1 px-2 bg-[var(--golden)] text-white rounded-full">
                <span className="relative top-0.5">30% OFF</span>
              </div>
              <div className="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  id="star"
                >
                  <path
                    style={{ marker: "none" }}
                    fill="#f8b84e"
                    d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                    color="#000"
                    overflow="visible"
                    transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  id="star"
                >
                  <path
                    style={{ marker: "none" }}
                    fill="#f8b84e"
                    d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                    color="#000"
                    overflow="visible"
                    transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  id="star"
                >
                  <path
                    style={{ marker: "none" }}
                    fill="#f8b84e"
                    d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                    color="#000"
                    overflow="visible"
                    transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  id="star"
                >
                  <path
                    style={{ marker: "none" }}
                    fill="#f8b84e"
                    d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                    color="#000"
                    overflow="visible"
                    transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  id="star"
                >
                  <path
                    style={{ marker: "none" }}
                    fill="#f8b84e"
                    d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                    color="#000"
                    overflow="visible"
                    transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                  />
                </svg>{" "}
                (50)
              </div>
            </div>
            {/* Heading  */}
            <div className="my-5">
              <h1 className="text-5xl text-gray-900 font-extrabold">
                How to Learn Basic Web Design by Photoshop and Figma
              </h1>
            </div>

            {/* Instructor */}
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-gray-900 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 61.8 61.8"
                  id="avatar"
                  height={40}
                  width={40}
                  className="mr-2"
                >
                  <g data-name="Layer 2">
                    <g data-name="—ÎÓÈ 1">
                      <circle
                        cx="30.9"
                        cy="30.9"
                        r="30.9"
                        fill="#58b0e0"
                      ></circle>
                      <path
                        fill="#f9dca4"
                        fill-rule="evenodd"
                        d="m23.255 38.68 15.907.121v12.918l-15.907-.121V38.68z"
                      ></path>
                      <path
                        fill="#e6e6e6"
                        fill-rule="evenodd"
                        d="M43.971 58.905a30.967 30.967 0 0 1-25.843.14V48.417H43.97z"
                      ></path>
                      <path
                        fill="#e9573e"
                        fill-rule="evenodd"
                        d="M33.403 61.7q-1.238.099-2.503.1-.955 0-1.895-.057l1.03-8.988h2.41z"
                      ></path>
                      <path
                        fill="#677079"
                        fill-rule="evenodd"
                        d="M25.657 61.332A34.072 34.072 0 0 1 15.9 57.92a31.033 31.033 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 5.212 1.711 13.482 2.405 18.95z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M39.165 38.759v3.231c-4.732 5.527-13.773 4.745-15.8-3.412z"
                        opacity=".11"
                      ></path>
                      <path
                        fill="#ffe8be"
                        fill-rule="evenodd"
                        d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"
                      ></path>
                      <path
                        fill="#f9dca4"
                        fill-rule="evenodd"
                        d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.972 31.972 0 0 1-1.472-7.659zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 0 0 1.471-7.658z"
                      ></path>
                      <path
                        fill="#464449"
                        fill-rule="evenodd"
                        d="M21.931 14.328c-3.334 3.458-2.161 13.03-2.161 13.03l-1.05-.495c-6.554-25.394 31.634-25.395 25.043 0l-1.05.495s1.174-9.572-2.16-13.03c-4.119 3.995-14.526 3.974-18.622 0z"
                      ></path>
                      <path
                        fill="#677079"
                        fill-rule="evenodd"
                        d="M36.767 61.243a30.863 30.863 0 0 0 17.408-10.018l-1.09-2.631-13.924-6.212c0 5.212-1.7 13.393-2.394 18.861z"
                      ></path>
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="m39.162 41.98-7.926 6.465 6.573 5.913s1.752-9.704 1.353-12.378z"
                      ></path>
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="m23.253 41.98 7.989 6.465-6.645 5.913s-1.746-9.704-1.344-12.378z"
                      ></path>
                      <path
                        fill="#e9573e"
                        fill-rule="evenodd"
                        d="m28.109 51.227 3.137-2.818 3.137 2.818-3.137 2.817-3.137-2.817z"
                      ></path>
                      <path
                        fill="#434955"
                        fill-rule="evenodd"
                        d="M25.767 61.373a30.815 30.815 0 0 1-3.779-.88 2.652 2.652 0 0 1-.114-.093l-3.535-6.39 4.541-3.26h-4.752l1.017-6.851 4.11-2.599c.178 7.37 1.759 15.656 2.512 20.073zM36.645 61.266c.588-.098 1.17-.234 1.747-.384a56.83 56.83 0 0 0 2.034-.579l.134-.043 3.511-6.315-4.541-3.242h4.752l-1.017-6.817-4.11-2.586c-.178 7.332-1.758 15.571-2.51 19.966z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span className="relative top-0.5">Donald J. Miller</span>
              </div>
              <div className="font-light flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="backup"
                  fill="var(--bg-dark-blue)"
                  className="mr-2"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"></path>
                </svg>
                <span className="relative top-0.5">
                  Last Update February 15, 2022
                </span>
              </div>
              <div className="font-light flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  id="user"
                  fill="var(--bg-dark-blue)"
                  className="mr-2"
                >
                  <path d="M670.1 278.4c0 8.8-.6 17.6-1.7 26.3.5-3.5 1-7.1 1.4-10.6-2.4 17.4-7 34.3-13.7 50.5 1.3-3.2 2.7-6.4 4-9.6-6.7 15.8-15.3 30.6-25.8 44.2l6.3-8.1c-10.4 13.4-22.5 25.5-35.9 35.9l8.1-6.3c-13.6 10.4-28.4 19.1-44.2 25.8 3.2-1.3 6.4-2.7 9.6-4-16.2 6.7-33.1 11.3-50.5 13.7 3.5-.5 7.1-1 10.6-1.4-17.5 2.3-35.1 2.3-52.6 0 3.5.5 7.1 1 10.6 1.4-17.4-2.4-34.3-7-50.5-13.7 3.2 1.3 6.4 2.7 9.6 4-15.8-6.7-30.6-15.3-44.2-25.8l8.1 6.3c-13.4-10.4-25.5-22.5-35.9-35.9l6.3 8.1c-10.4-13.6-19.1-28.4-25.8-44.2 1.3 3.2 2.7 6.4 4 9.6-6.7-16.2-11.3-33.1-13.7-50.5.5 3.5 1 7.1 1.4 10.6-2.3-17.5-2.3-35.1 0-52.6-.5 3.5-1 7.1-1.4 10.6 2.4-17.4 7-34.3 13.7-50.5-1.3 3.2-2.7 6.4-4 9.6 6.7-15.8 15.3-30.6 25.8-44.2l-6.3 8.1c10.4-13.4 22.5-25.5 35.9-35.9l-8.1 6.3c13.6-10.4 28.4-19.1 44.2-25.8-3.2 1.3-6.4 2.7-9.6 4 16.2-6.7 33.1-11.3 50.5-13.7-3.5.5-7.1 1-10.6 1.4 17.5-2.3 35.1-2.3 52.6 0-3.5-.5-7.1-1-10.6-1.4 17.4 2.4 34.3 7 50.5 13.7-3.2-1.3-6.4-2.7-9.6-4 15.8 6.7 30.6 15.3 44.2 25.8l-8.1-6.3c13.4 10.4 25.5 22.5 35.9 35.9l-6.3-8.1c10.4 13.6 19.1 28.4 25.8 44.2-1.3-3.2-2.7-6.4-4-9.6 6.7 16.2 11.3 33.1 13.7 50.5-.5-3.5-1-7.1-1.4-10.6 1.1 8.7 1.6 17.5 1.7 26.3.1 20.9 18.3 41 40 40 21.6-1 40.1-17.6 40-40-.2-47.9-14.6-96.9-42.8-135.9-7.6-10.5-15.7-20.8-24.7-30.1-9.1-9.4-19.1-17.5-29.5-25.4-18.9-14.4-40-25-62.4-33.2-90.3-33.1-199.2-3.6-260.3 70.8-8.4 10.2-16.4 20.8-23.2 32.2-6.8 11.3-12.1 23.3-17 35.5-9.2 22.6-13.9 46.6-15.8 70.9-3.7 47.6 8.7 97.3 33.5 138.1 23.9 39.4 60 73.2 102.2 92.3 12.4 5.6 25.1 10.8 38.3 14.5 13.1 3.6 26.4 5.6 39.9 7.2 24.6 2.9 49.7.9 74-4 92.3-18.8 169.6-98.3 183.9-191.6 2.1-13.6 3.7-27.2 3.7-41 .1-20.9-18.5-41-40-40-21.6.7-39.8 17.3-39.8 39.7zm132.7 625.3H289.7c-22.7 0-45.4.2-68.1 0-2.5 0-5-.2-7.4-.5 3.5.5 7.1 1 10.6 1.4-4-.6-7.8-1.7-11.5-3.2 3.2 1.3 6.4 2.7 9.6 4-4-1.7-7.7-3.9-11.2-6.6l8.1 6.3c-3-2.5-5.8-5.2-8.2-8.2l6.3 8.1c-2.7-3.5-4.8-7.2-6.6-11.2 1.3 3.2 2.7 6.4 4 9.6-1.5-3.7-2.5-7.6-3.2-11.5.5 3.5 1 7.1 1.4 10.6-1.6-12.1-.5-24.9-.5-37.1v-42.8c0-10.7.6-21.3 2-31.9-.5 3.5-1 7.1-1.4 10.6 2.8-20.5 8.2-40.6 16.3-59.7-1.3 3.2-2.7 6.4-4 9.6 7.8-18.2 17.8-35.3 29.9-51l-6.3 8.1c12.1-15.5 26-29.5 41.6-41.6L283 673c15.7-12.1 32.8-22.1 51-29.9-3.2 1.3-6.4 2.7-9.6 4 19.1-8 39.1-13.5 59.7-16.3-3.5.5-7.1 1-10.6 1.4 14.8-1.9 29.5-2 44.4-2h183c16.5 0 32.9-.1 49.4 2-3.5-.5-7.1-1-10.6-1.4 20.5 2.8 40.6 8.2 59.7 16.3-3.2-1.3-6.4-2.7-9.6-4 18.2 7.8 35.3 17.8 51 29.9l-8.1-6.3c15.5 12.1 29.5 26 41.6 41.6l-6.3-8.1c12.1 15.7 22.1 32.8 29.9 51-1.3-3.2-2.7-6.4-4-9.6 8 19.1 13.5 39.1 16.3 59.7-.5-3.5-1-7.1-1.4-10.6 1.9 15.1 2 30.1 2 45.3v49.5c0 5.7.2 11.4-.5 17 .5-3.5 1-7.1 1.4-10.6-.6 4-1.7 7.8-3.2 11.5 1.3-3.2 2.7-6.4 4-9.6-1.7 4-3.9 7.7-6.6 11.2l6.3-8.1c-2.5 3-5.2 5.8-8.2 8.2l8.1-6.3c-3.5 2.7-7.2 4.8-11.2 6.6 3.2-1.3 6.4-2.7 9.6-4-3.7 1.5-7.6 2.5-11.5 3.2 3.5-.5 7.1-1 10.6-1.4-2.2.3-4.5.4-6.8.5-10.3.1-20.9 4.4-28.3 11.7-6.9 6.9-12.2 18.3-11.7 28.3 1 21.4 17.6 40.3 40 40 38.9-.6 73.1-26 84.5-63.3 4.5-14.8 3.5-30.7 3.5-45.9 0-34.8 1.1-69.3-4.9-103.8-8.8-50.5-34.2-98-69-135.3-34.8-37.3-81.6-64.7-131.1-76.9-28.4-7-57-8.1-86-8.1H422.4c-29.7 0-59.2 1.4-88.1 9.1-49.1 13-95.3 40.7-129.4 78.3-34.4 37.9-59.3 85.5-67.4 136.3-5.4 34.1-4.3 68.3-4.3 102.7 0 15.8-.9 32.3 4.8 47.4 7.4 19.4 19.2 34.7 36.5 46.2 13.5 8.9 30.6 13.2 46.6 13.4 7.8.1 15.6 0 23.4 0h558.4c20.9 0 41-18.4 40-40-1-21.8-17.6-40.1-40.1-40.1z"></path>
                </svg>
                <span className="relative top-0.5 w-fit">25 Enrolled</span>
              </div>
            </div>

            {/* course Image  */}
            <div className="my-10">
              <img src={courseLearn} className="w-full h-96 my-10" alt="" />
              <p className="text-[var(--para2)]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur autodit aut fugit sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                porro quisquam este qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modis
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem enim ad minima veniam quis nostrum exercitationem
                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commo
                quatur? Quis autem vel eum iure reprehenderit quin ea voluptate
                velit esse quam nihil molestiae consequatur vel illum qui
                dolorem eum fugiat quo voluptas nulla pariatur
              </p>
            </div>

            {/* Requirements */}
            <div className="my-10">
              <h2 className="text-3xl text-gray-900 font-extrabold">
                Requirements
              </h2>

              <div className="">
                <div className="flex items-center my-3">
                  <img src={pointingFinger} className="w-6 h-6 mr-2" alt="" />
                  <p className="text-[var(--para2)] relative top-0.5">
                    DevTools Debugging Tips And Shortcuts (Chrome, Firefox,
                    Edge)
                  </p>
                </div>
                <div className="flex items-center my-3">
                  <img src={pointingFinger} className="w-6 h-6 mr-2" alt="" />
                  <p className="text-[var(--para2)] relative top-0.5">
                    Front-End Performance Checklist 2021 (PDF, Apple Pages, MS
                    Word)
                  </p>
                </div>
                <div className="flex items-center my-3">
                  <img src={pointingFinger} className="w-6 h-6 mr-2" alt="" />
                  <p className="text-[var(--para2)] relative top-0.5">
                    A Smashing Guide To The World Of Search Engine Optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div className="my-10">
              <h2 className="text-3xl text-gray-900 font-extrabold">
                Target Audience
              </h2>

              <div className="">
                <div className="flex items-center my-3">
                  <img src={pointingFinger} className="w-6 h-6 mr-2" alt="" />
                  <p className="text-[var(--para2)] relative top-0.5">
                    Any Job Holders, Students
                  </p>
                </div>
                <div className="flex items-center my-3">
                  <img src={pointingFinger} className="w-6 h-6 mr-2" alt="" />
                  <p className="text-[var(--para2)] relative top-0.5">
                    Corporate Trainer
                  </p>
                </div>
                <div className="flex items-center my-3">
                  <img src={pointingFinger} className="w-6 h-6 mr-2" alt="" />
                  <p className="text-[var(--para2)] relative top-0.5">
                    Educators (Teachers, Lecturer, Faculty)
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div>right</div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
