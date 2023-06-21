import React from "react";
import { useNavigate } from "react-router-dom";
import StudentHeader from "../Components/StudentHeader";

const StudentDashboard = ({ auth, updateAuth }) => {
  const navigate = useNavigate();

  const goto = (url) => {
    navigate(url);
  };
  return (
    <>
      <section className=" px-5 py-2">
        <div className="bg-[var(--theme-color)] mt-5 mb-10">
          <h1 className="font-extrabold text-3xl text-center text-white px-2 py-5">
            Welcome to SMS Education
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {/* div */}
          <div
            onClick={() => goto("/student/classes")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[#e74f4d] font-semibold text-center flex flex-col justify-center items-center bg-gray-200 border rounded-lg shadow-2xl hover:-translate-y-4 transition cursor-pointer ring-2 ring-[#e74f4d] ring-offset-1"
          >
            <div className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
            </div>
            <div>Classes</div>
          </div>
          <div
            onClick={() => goto("/student/academic")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[#18acb6] font-semibold text-center flex flex-col justify-center items-center bg-gray-200 border rounded-lg shadow-2xl hover:-translate-y-4 transition cursor-pointer ring-2 ring-[#18acb6] ring-offset-1"
          >
            <div className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div>Academics</div>
          </div>
          <div
            onClick={() => goto("/student/marks")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[#f1a81a] font-semibold text-center flex flex-col justify-center items-center bg-gray-200 border rounded-lg shadow-2xl hover:-translate-y-4 transition cursor-pointer ring-2 ring-[#f1a81a] ring-offset-1"
          >
            <div className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div>Marks</div>
          </div>
          <div
            onClick={() => goto("/student/library")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[#5c2c34] font-semibold text-center flex flex-col justify-center items-center bg-gray-200 border rounded-lg shadow-2xl hover:-translate-y-4 transition cursor-pointer ring-2 ring-[#5c2c34] ring-offset-1"
          >
            <div className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </div>
            <div>Library</div>
          </div>
          <div
            onClick={() => goto("/student/queries")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[#41ad6b] font-semibold text-center flex flex-col justify-center items-center bg-gray-200 border rounded-lg shadow-2xl hover:-translate-y-4 transition cursor-pointer ring-2 ring-[#41ad6b] ring-offset-1"
          >
            <div className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div>Queries (Q/A)</div>
          </div>
          <div
            onClick={() => goto("/student/assignments")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[#ee8ddd] font-semibold text-center flex flex-col justify-center items-center bg-gray-200 border rounded-lg shadow-2xl hover:-translate-y-4 transition cursor-pointer ring-2 ring-[#ee8ddd] ring-offset-1"
          >
            <div className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
            </div>
            <div>Assignments</div>
          </div>
          <div
            onClick={() => goto("/student/payments")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[#af7b94] font-semibold text-center flex flex-col justify-center items-center bg-gray-200 border rounded-lg shadow-2xl hover:-translate-y-4 transition cursor-pointer ring-2 ring-[#af7b94] ring-offset-1"
          >
            <div className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            </div>
            <div>Payments</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;
