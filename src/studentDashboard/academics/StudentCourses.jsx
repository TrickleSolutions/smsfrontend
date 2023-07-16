import React, { useEffect, useState } from "react";
import StudentSingleCourse from "./StudentSingleCourse";
import baseurl from "../../Config";

const StudentCourses = ({ enrollData }) => {
  const [courses, setCourses] = useState([]);
  const [iname, setIname] = useState("");
  const [cname, setCname] = useState("");

  console.log("Courses list", courses);

  useEffect(() => {
    setCourses(enrollData);
  }, [enrollData]);

  function getInstructorData(id) {
    fetch(baseurl + "/api/instructor/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setIname(result[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
    return iname;
  }
  function getCategoryData(id) {
    fetch(baseurl + "/api/category/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setCname(result[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
    return cname;
  }

  return (
    <>
      <div className="flex flex-row justify-around flex-wrap my-10">
        {courses ? (
          courses.map((course) => {
            return (
              <StudentSingleCourse
                courseId={course.course}
                getInstructorData={getInstructorData}
                getCategoryData={getCategoryData}
              />
            );
          })
        ) : (
          <h2 className="text-xl mt-10 font-semibold">No courses Enrolled</h2>
        )}
      </div>
    </>
  );
};

export default StudentCourses;
