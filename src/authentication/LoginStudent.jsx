import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseurl from "../Config";
import { toast } from "react-toastify";
import { useEffect } from "react";

const LoginStudent = ({ updateAuth, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log("user Logged In", auth);

  const navigate = useNavigate();

  const onLoginPress = (e) => {
    e.preventDefault();
    const data = { email, password };

    fetch(baseurl + "/api/studentlogin", {
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
          // console.log(result.data);
          window.localStorage.setItem("auth", JSON.stringify(result.data._id));
          // console.log(result.data);
          updateAuth();
          toast.success("Successfully LoggedIn");
          navigate(
            "/student/dashboard"
            // , {
            //   state: {
            //     _id: result.data._id,
            //     name: result.data.name,
            //     email: result.data.email,
            //     contact: result.data.contact,
            //   },
            // }
          );
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
      {auth ? (
        navigate("/student/dashboard")
      ) : (
        <section className=" p-5">
          <div className=" w-96 my-10 rounded-lg border shadow-xl mx-auto">
            <h1 className="px-5 sm:px-10 mt-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login
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
                    Enter Mobile No.
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="9999999999"
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
                    Enter Otp
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="gradient"
                    color="blue"
                    onClick={onLoginPress}
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

export default LoginStudent;
