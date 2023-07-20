import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentProfile from "./profile/StudentProfile";
import Classes from "./Classes";
import StudentAcademics from "./academics/StudentAcademics";
import StudentMarks from "./StudentMarks";
import StudentAssignments from "./assignments/StudentAssignments";
import StudentPayments from "./payments/StudentPayments";
import StudentQueries from "./queries/StudentQueries";
import baseurl from "../Config";

const StudentDashboard = ({ auth }) => {
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  console.log(student);

  useEffect(() => {
    getStudentData();
  }, []);

  const getStudentData = () => {
    fetch(`${baseurl}/api/students/${auth}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setStudent(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goto = (url) => {
    navigate(url);
  };
  return (
    <>
      {student ? (
        <section className=" px-5 py-2 bg-[var(--body-color)]">
          <div className="bg-[var(--theme-color)] mt-5 mb-5">
            <h1 className="font-extrabold text-3xl text-center text-white px-2 py-5">
              Welcome to SMS Education
            </h1>
          </div>
          {/* Profile */}
          <StudentProfile auth={auth} />
          <hr />
          <Classes />
          <hr />
          <StudentAcademics auth={auth} />
          <hr />

          <StudentMarks auth={auth} />
          <hr />
          <StudentAssignments auth={auth} />
          <hr />
          <StudentPayments auth={auth} />
          <hr />
          <StudentQueries auth={auth} />

          {/* Footer */}
          <div className="bg-[var(--theme-color)] mt-5">
            <h1 className="font-extrabold text-sm text-center text-white px-2 py-3">
              &#169; 2023 SMS Education | All Rights Reserved
            </h1>
          </div>
        </section>
      ) : (
        <div className="text-xl font-semibold my-20 text-center">
          {" "}
          You are not authorized to view this page
        </div>
      )}
    </>
  );
};

export default StudentDashboard;
