import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/styles/studentSidebar.css";
import StudentHeader from "./StudentHeader";

const StudentSidebar = ({ children, updateAuth, auth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [open, setOpen] = useState(0);

  const navigate = useNavigate();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  let justify = { justifyContent: isOpen ? "start" : "center" };

  return (
    <div className="flex relative h-[100vh] overflow-hidden">
      <main className=" relative  overflow-y-scroll scrollbar-hide grow flex flex-col">
        <div className="">
          {/* <StudentHeader updateAuth={updateAuth} auth={auth} /> */}
        </div>
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default StudentSidebar;
