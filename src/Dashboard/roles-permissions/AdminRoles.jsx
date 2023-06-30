import { Switch } from "@material-tailwind/react";
import React, { useState } from "react";

const AdminRoles = () => {
  const [enquiries, setEnquiries] = useState("");
  const [courseList, setCourseList] = useState("");
  const [categories, setCategories] = useState("");
  const [studentList, setStudentList] = useState("");
  const [instructorList, setInstructorList] = useState("");
  const [cashLedger, setCashLedger] = useState("");
  const [fees, setFees] = useState("");
  const [scheduleClasses, setScheduleClasses] = useState("");
  const [events, setEvents] = useState("");
  const [manageStudent, setManageStudent] = useState("");
  const [scheduleBatches, setScheduleBatches] = useState("");
  const [monthlyAchievers, setMonthlyAchievers] = useState("");
  const [rolesPermission, setRolesPermission] = useState("");
  const data = {
    enquiries,
    courseList,
    categories,
    studentList,
    instructorList,
    cashLedger,
    fees,
    scheduleClasses,
    events,
    manageStudent,
    scheduleBatches,
    monthlyAchievers,
    rolesPermission,
  };

  console.log(data);
  const roles = [
    {
      id: "enquiries",
      name: "Enquiries",
      value: enquiries,
      setvalue: (e) => setEnquiries(e.target.checked),
    },
    {
      id: "courseList",
      name: "CourseList",
      value: courseList,
      setvalue: (e) => setCourseList(e.target.checked),
    },
    {
      id: "categories",
      name: "Categories",
      value: categories,
      setvalue: (e) => setCategories(e.target.checked),
    },
    {
      id: "studentList",
      name: "Student List",
      value: studentList,
      setvalue: (e) => setStudentList(e.target.checked),
    },
    {
      id: "instructorList",
      name: "Instructor List",
      value: instructorList,
      setvalue: (e) => setInstructorList(e.target.checked),
    },
    {
      id: "cashLedger",
      name: "Cash Ledger",
      value: cashLedger,
      setvalue: (e) => setCashLedger(e.target.checked),
    },
    {
      id: "fees",
      name: "Fees",
      value: fees,
      setvalue: (e) => setFees(e.target.checked),
    },
    {
      id: "scheduleClasses",
      name: "Schedule Classes",
      value: scheduleClasses,
      setvalue: (e) => setScheduleClasses(e.target.checked),
    },
    {
      id: "events",
      name: "Events",
      value: events,
      setvalue: (e) => setEvents(e.target.checked),
    },
    {
      id: "manageStudent",
      name: "Manage Student",
      value: manageStudent,
      setvalue: (e) => setManageStudent(e.target.checked),
    },
    {
      id: "scheduleBatches",
      name: "Schedule Batches",
      value: scheduleBatches,
      setvalue: (e) => setScheduleBatches(e.target.checked),
    },
    {
      id: "monthlyAchievers",
      name: "Monthly Achievers",
      value: monthlyAchievers,
      setvalue: (e) => setMonthlyAchievers(e.target.checked),
    },
    {
      id: "rolesPermission",
      name: "Roles And Permissions",
      value: rolesPermission,
      setvalue: (e) => setRolesPermission(e.target.checked),
    },
  ];
  return (
    <>
      <section className="my-5 sm:my-10 grid grid-cols-2 gap-4">
        {roles.map((role) => (
          <div
            key={role.name}
            className="m-3 px-4 py-3 sm:p-5 mx-auto flex items-center justify-between border border-blue-500 w-full  max-w-sm xl:max-w-lg text-md sm:text-xl font-bold text-[var(--secondary-color)] shadow-lg rounded-sm"
          >
            <div>{role.name}</div>
            <div>
              <Switch
                id={role.id}
                ripple={false}
                checked={role.value}
                value={role.value}
                onChange={role.setvalue}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AdminRoles;
