import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import StudentCourses from "./StudentCourses";
import StudentTeachers from "./StudentTeachers";
import baseurl from "../../Config";
import Loader from "../../Components/Loader";
import { useNavigate } from "react-router-dom";

const StudentAcademics = ({ auth }) => {
  const [activeTab, setActiveTab] = useState("courses");
  const [enrollData, setEnrollData] = useState([]);
  const [loader, setLoader] = useState(true);
  const data = [
    {
      label: "Courses",
      value: "courses",
      desc: <StudentCourses enrollData={enrollData} />,
    },
    {
      label: "Teachers",
      value: "teachers",
      desc: <StudentTeachers enrollData={enrollData} />,
    },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    getEnrollData();
    console.log(enrollData);
  }, []);

  const getEnrollData = () => {
    fetch(baseurl + "/api/enroll/" + auth, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setEnrollData(result);
        setLoader(false);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {loader ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          {/* <div
            onClick={() => navigate("/student/dashboard")}
            className="cursor-pointer mt-10 px-10 text-[var(--secondary-color)] "
          >
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
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </div> */}
          <section className=" p-2 sm:p-5 md:p-10 ">
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-none mx-auto"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={activeTab === value ? "text-blue-500" : ""}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel
                    key={value}
                    value={value}
                    className="max-w-sm sm:max-w-md md:max-w-xl lg:max-w-none mx-auto"
                  >
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </section>
        </>
      )}
    </>
  );
};

export default StudentAcademics;
