import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseurl from "../../../Config";
import { Button, IconButton } from "@material-tailwind/react";
import { FaRegTrashAlt } from "react-icons/fa";
import ModalAddCourseDetail from "./ModalAddCourseDetail";
import { toast } from "react-toastify";

const StudentAcademics = () => {

  const [addCourseDetail, setAddCourseDetail] = useState(false)
  const [courseDetail, setCourseDetail] = useState("")
  const handleAddCourseDetail = () => {
    setAddCourseDetail(!addCourseDetail)
  }
  const [updateCourseDetail, setUpdateCourseDetail] = useState("")
  const handleUpdateCourseDetail = () => {
    setUpdateCourseDetail(!updateCourseDetail)
  }

  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  const getCourseDetails = () => {
    fetch(baseurl + `/api/course/lessions/get?course=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setCourseDetail(result);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCourseDetails();
  }, []);

  const deleteData = async (id) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this data?");

    if (userConfirmed) {
      try {
        await fetch(baseurl + `/api/course/lessions/delete/${id}`, {
          method: "DELETE",
        });
        toast.success("Delete successfully")
        getCourseDetails();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Deletion canceled by user.");
    }
  };


  return (
    <>
      <section className=" p-2 sm:p-5 md:p-10 ">
        <div className="w-full border border-black rounded-md p-1">
          <div className="flex justify-between items-center p-1 pb-2">
            <div className="text-center font-extrabold text-yellow-900 uppercase text-xl">Course Syllabus</div>
            <Button onClick={handleAddCourseDetail}>Add Course Detail</Button>
          </div>
          <div className="w-full border border-black rounded-sm">
            {
              courseDetail?.data?.map((item, index) => (
                <ul key={index} className="flex">
                  <li className="border-black border w-24 text-center p-1 grid place-items-center" >[{index + 1}]</li>
                  <li className="border-black border w-3/5 text-blue-500 uppercase font-bold p-1 grid place-items-left items-center" >{item.title}</li>
                  <li className="border-black border w-24 text-center p-1" >
                    {
                      item?.subtitle.map((item, index) => (
                        <li>{index + 1}</li>
                      ))
                    }
                  </li>
                  <li className="border-black border w-full text-blue-800 font-semibold p-1" >
                    {
                      item?.subtitle.map((title, index) => (
                        <li>{title} </li>
                      ))
                    }
                  </li>
                  <li className="border-black border w-1/3 p-1 flex items-center justify-around">

                    <IconButton color="red" onClick={() => deleteData(item._id)} variant="outlined">
                      <FaRegTrashAlt className="text-red-800" />
                    </IconButton>
                  </li>

                </ul>
              ))
            }
          </div>
          <ModalAddCourseDetail
            open={addCourseDetail}
            handleOpen={handleAddCourseDetail}
            courseId={id}
            getCourseDetails={getCourseDetails}
          />
        </div>
      </section>
      {/* Footer */}
      <div className="bg-[var(--theme-color)]">
        <h1 className="font-extrabold text-sm text-center text-white px-2 py-3">
          &#169; 2023 SMS Education | All Rights Reserved
        </h1>
      </div>
    </>
  );
};

export default StudentAcademics;
