import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseurl from "../Config";
import { toast } from "react-toastify";
import { useEffect } from "react";

const LoginInstructor = ({ updateInstructorAuth, instructorAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLoginPress = (e) => {
    e.preventDefault();
    const data = { email, password };

    fetch(baseurl + "/api/instructorlogin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json();
        }
      })
      .then((result) => {
        //console.log(result);
        if (result.status === true && result.code === 200) {
          console.log(result.data._id);
          window.localStorage.setItem(
            "instructorAuth",
            JSON.stringify(result.data._id)
          );
          updateInstructorAuth();
          toast.success("Successfully LoggedIn");
          navigate("/instructor/instructor-dashboard");
        } else {
          toast.error(`${result.message}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mx-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-evenly py-5">
        <a href="login-student">
          <Button variant="gradient" color="blue" className="rounded-full">
            Student Login
          </Button>
        </a>
        <a href="login-instructor">
          <Button variant="gradient" color="blue" className="rounded-full">
            Instructor Login
          </Button>
        </a>
        <a href="login-admin">
          <Button variant="gradient" color="blue" className="rounded-full">
            Back Office Login
          </Button>
        </a>
        <a href="login-admin">
          <Button variant="gradient" color="blue" className="rounded-full">
            Admin Login
          </Button>
        </a>
        <a href="login-admin">
          <Button variant="gradient" color="blue" className="rounded-full">
            Super Admin Login
          </Button>
        </a>
      </div>
      {instructorAuth ? (
        navigate("/instructor/instructor-dashboard")
      ) : (
        <section className=" p-5">
          <div className=" w-96 my-10 rounded-lg border shadow-xl mx-auto">
            <h1 className="px-5 sm:px-10 mt-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Instructor Login
            </h1>
            {/* Form */}
            <form className="w-full px-5 sm:px-10 mt-5">
              <div className="flex flex-wrap -mx-3 mb-6">
                {/* email */}
                <div className="w-full px-3 mb-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Registered Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="rohan644@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                {/* password */}
                <div className="w-full px-3 mb-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  // onKeyDown={(e) => onEnterPress(e)}
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="gradient"
                    color="blue"
                    onClick={(e) => onLoginPress(e)}
                  >
                    <span>Login</span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginInstructor;
