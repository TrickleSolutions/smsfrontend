import React, { useEffect, useState } from "react";
import baseurl from "../../../../Config";
import ModalAddVideo from "./ModalAddVideo";
import { Button } from "@material-tailwind/react";
import SingleVideo from "./SingleVideo";
import Loader from "../../../../Components/Loader";
import { useNavigate } from "react-router-dom";

const UploadVideos = ({ id }) => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getVideosData();
  }, [id]);

  const getVideosData = () => {
    fetch(baseurl + "/api/videocontent", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let filteredData = result.filter((video) => video.course === id);
        setVideos(filteredData);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center my-5">
        <div className="flex">
          <div className=" w-48 mx-2">
            <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="textarea"
                className="relative m-0 block w-[1%] min-w-0 pl-2 pr-8 py-2  flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-[var(--theme-color)] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                placeholder="Search by name"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <div
                className=" absolute bottom-1 right-1 input-group-text flex items-center whitespace-nowrap rounded px-1 py-1.5 text-center text-base font-normal text-neutral-700  cursor-pointer"
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Button onClick={handleOpen} className="h-fit">
            + Upload Video
          </Button>
        </div>
        <ModalAddVideo
          open={open}
          handleOpen={handleOpen}
          getVideosData={getVideosData}
          id={id}
        />
      </div>

      {loader ? (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-wrap justify-around">
          {videos.map((item) => {
            return <SingleVideo item={item} getVideosData={getVideosData} />;
          })}
        </div>
      )}
    </div>
  );
};

export default UploadVideos;
