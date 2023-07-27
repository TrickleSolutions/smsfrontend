import React from "react";

const SmartBar = () => {
  return (
    <>
      <div
        className="px-5 py-3 text-white  bg-[var(--bg-light-blue)] tracking-widest font-semibold flex items-center justify-center"
        style={{ fontFamily: "Nunito Sans" }}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#c29d00"
            className="w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>{" "}
        Working Hours : Monday - Sunday, 07am - 09pm
      </div>
    </>
  );
};

export default SmartBar;
