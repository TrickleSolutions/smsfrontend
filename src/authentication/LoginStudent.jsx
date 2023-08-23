import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseurl from "../Config";
import { toast } from "react-toastify";
import { useEffect } from "react";
import StudentImage from '../assets/images/StudentLogin.jpg'
import { MuiOtpInput } from "mui-one-time-password-input";

const LoginStudent = ({ updateAuth, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [MobileOtp, setMobileOtp] = useState(false)
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

  const [otp, setOtp] = React.useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

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

      {auth ? (
        navigate("/student/dashboard")
      ) : (
        <section className=" p-5">
          <div className="mx-2 md:mx-5 flex flex-col md:flex-row gap-2 md:gap-5 justify-center md:justify-start py-5" >
            <div className="grid place-items-center hidden md:block lg:block xl:block w-full">
              <img style={{ height: '560px', width: '670px' }} src={StudentImage} alt="" />
            </div>
            <div className="grid place-items-center w-full">
              <div className="w-full sm:px-0 lg:px-20">
                <h1 className="px-5 sm:px-10 mt-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Student Login
                </h1>
                {/* Form */}
                <form className="w-full px-5 sm:px-10 mt-5">
                  <div className="flex flex-wrap -mx-3 mb-6">

                    {/* password */}
                    {MobileOtp ? <div className="w-full px-3 mb-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="password"
                      >
                        Enter Otp
                      </label>
                      {/* <input
                        className="appearance-none block w-full my-5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      /> */}
                      <MuiOtpInput value={otp} onChange={handleChange} />
                      <div className="pt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
                        <Button
                          type="submit"
                          variant="text"
                          color="blue"
                        // onClick={onLoginPress}
                        >
                          <span> Resend Otp</span>
                        </Button>
                        <Button
                          type="submit"
                          variant="gradient"
                          color="blue"
                          onClick={() => setMobileOtp(!MobileOtp)}
                        // onClick={onLoginPress}
                        >
                          <span>Login</span>
                        </Button>
                      </div>
                    </div> :
                      <div className="w-full px-3 mb-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Enter Mobile No.
                        </label>
                        <input
                          className="appearance-none block w-full my-5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="email"
                          type="email"
                          placeholder="9999999999"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <div className="pt-5">
                          <Button
                            type="submit"
                            variant="gradient"
                            color="blue"
                            onClick={() => setMobileOtp(!MobileOtp)}
                          // onClick={onLoginPress}
                          >
                            <span>Continue</span>
                          </Button>
                        </div>
                      </div>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginStudent;
