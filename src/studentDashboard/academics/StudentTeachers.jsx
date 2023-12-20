import React, { useEffect, useState } from "react";
import baseurl from "../../Config";
import StudentSingleTeacher from "./StudentSingleTeacher";
import man from "../../assets/images/man.jpg";
import { FaQuestionCircle } from "react-icons/fa";
import { useAuthContext } from "../../context/useStateContext";

const StudentTeachers = ({ enrollData }) => {
  const [instructors, setInstructors] = useState([]);
  const [loader, setLoader] = useState(true);
  const { currentUser } = useAuthContext();

  console.log(instructors, 'AA')

  useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    try {
      setLoader(true);

      const response = await fetch(`${baseurl}/api/student/career/info/${currentUser?._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      setInstructors(result.data);
      setLoader(false);
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  };



  return (
    <>
      <div className="flex flex-row justify-around flex-wrap">
        {/* <StudentSingleTeacher enroll={enrollData} /> */}
        {/* <h2 className="text-lg text-center my-10">No Instructors</h2> */}
        {instructors?.instructors?.map((item) => (
          <div
            key={item?._id}
            className="m-3 bg-white rounded-lg border shadow-xl grid grid-cols-2 p-5 place-items-center relative"
          >
            {console.log(item)}
            <div className="w-2/5">
              <img src={man} className="h-full w-full rounded-full" alt="" />
            </div>
            <div className="grid grid-cols-2 w-full">
              <div className="p-5 grid grid-cols-2">
                <div className="font-bold">Name</div>
                <div>{item?.name}</div>
              </div>
              <div className="p-5 grid grid-cols-2">
                <div className="font-bold">Course</div>
                {/* <div>{console.log(instructors?.data[0]?.enrolled_courses?.find(x => x._id === item.course)?.title)}</div> */}
                <div>O-Level</div>
              </div>
              <div className="p-5 grid grid-cols-2">
                <div className="font-bold">Email</div>
                <div>{item?.email}</div>
              </div>
              <div className="p-5 grid grid-cols-2">
                <div className="font-bold">Mobile No.</div>
                <div>{item?.contact}</div>
              </div>
            </div>
            <div role="link" href='feedback'  className="absolute top-[-15px] right-[-15px]">
              <FaQuestionCircle  size={50} />

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentTeachers;
