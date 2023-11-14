import React, { useEffect, useState } from "react";
import baseurl from "../../Config";
import StudentSingleTeacher from "./StudentSingleTeacher";

const StudentTeachers = ({ enrollData }) => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    setInstructors(enrollData);
  }, [enrollData]);

  return (
    <>
      <div className="flex flex-row justify-around flex-wrap">
        {instructors.length === 0 ? (
          instructors.map((enroll) => {
            return <StudentSingleTeacher enroll={enroll} />;
          })
        ) : (
          <h2 className="text-lg text-center my-10">No Instructors</h2>
        )}
      </div>
    </>
  );
};

export default StudentTeachers;
