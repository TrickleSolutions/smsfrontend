import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Drawer, Button, Input, Textarea } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import logo2 from "../assets/images/logo2.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "animate.css";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Drawer
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const navigate = useNavigate();

  const location = useLocation();
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(location.pathname.startsWith("/"));
  }, [location.pathname]);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="medium"
        color={page ? "white" : "black"}
        className={`p-1 font-semibold ${
          scrolled ? "text-[var(--secondary-color)]" : "text-white"
        } hover:underline hover:decoration-1 transition`}
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>

      <Typography
        as="li"
        variant="medium"
        color="white"
        className={`p-1 font-semibold ${
          scrolled ? "text-[var(--secondary-color)]" : "text-white"
        } hover:underline hover:decoration-1 transition`}
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="white"
        className={`p-1 font-semibold ${
          scrolled ? "text-[var(--secondary-color)]" : "text-white"
        } hover:underline hover:decoration-1 transition`}
      >
        <a href="#" className="flex items-center">
          Courses
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="white"
        className={`p-1 font-semibold ${
          scrolled ? "text-[var(--secondary-color)]" : "text-white"
        } hover:underline hover:decoration-1 transition`}
      >
        <a href="#" className="flex items-center">
          Blogs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="white"
        className={`p-1 font-semibold ${
          scrolled ? "text-[var(--secondary-color)]" : "text-white"
        } hover:underline hover:decoration-1 transition`}
      >
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar
        className={
          scrolled
            ? " bg-[white] !text-[var(--secondary-color)] backdrop-blur-lg sticky inset-0 z-30 h-24 max-w-full rounded-none py-1 pr-4 pl-2 lg:pr-8 lg:pl-2 lg:py-3 shadow-xl animate__animated animate__slideInDown animate__fast"
            : " sticky inset-0 z-30 h-24 max-w-full rounded-none py-2 pr-4 pl-2 lg:pr-8 lg:pl-2 lg:py-3 transition-all"
        }
        shadow={false}
        color={scrolled ? "" : "transparent"}
        blurred={true}
      >
        <div className="h-full flex items-center justify-between">
          {/* Logo */}
          <div
            className={`${
              scrolled ? "shadow-xl" : ""
            } relative top-5 flex items-center px-1 py-5 rounded-lg bg-white`}
          >
            <img src={logo2} alt="" className="mx-3 h-16 w-16 rounded-full" />
          </div>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            {/* ///////////////////////////////// Drawer //////////////////////////////////////// */}
            <div onClick={openDrawer} className="hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            {/* Drawer */}
            <Drawer
              placement="right"
              open={open}
              onClose={closeDrawer}
              className={`!bg-white ${open ? "block" : "hidden"} `}
              overlay={false}
            >
              <div className="mb-2 flex items-center justify-between p-4 !bg-white">
                <Typography variant="h5" color="blue-gray">
                  Contact Us
                </Typography>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={closeDrawer}
                >
                  <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
              </div>
              <form className="flex flex-col gap-6 p-4 !bg-white">
                <Input type="email" label="Email" />
                <Input label="Subject" />
                <Textarea rows={6} label="Message" />
                <Button>Send Message</Button>
              </form>
            </Drawer>
            {/* ///////////////////////////////// Drawer //////////////////////////////////////// */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Login/Register</span>
          </Button>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
