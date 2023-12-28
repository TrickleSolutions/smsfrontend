import { Button, IconButton } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import baseurl from '../../Config';
import { useAuthContext } from '../../context/useStateContext';

const Syllabus = () => {

    const { currentUser } = useAuthContext();
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState('')
    const [courseData, setCourseData] = useState([]);
    const [courseName, setCourseName] = useState('');




    const getCourseDetails = () => {

        fetch(baseurl + `/api/course/lessions/get?course=${courseName}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                setData(result);
                setLoader(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getCoursesList = () => {
        fetch(baseurl + `/api/course`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((result) => {
                setCourseData(result);
                setLoader(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getCourseNameById = (courseId) => {
        const course = courseData.find((course) => course?.title === courseId);
        return course ? course._id : 'Course not found';
    };

    useEffect(() => {
        getCourseDetails();
        getCoursesList();
    }, [currentUser?.course]);

    useEffect(() => {
        const yourId = currentUser?.course;
        const yourCourseName = getCourseNameById(yourId);
        setCourseName(yourCourseName);
    }, [currentUser?.course, courseData]);

    console.log(courseName)

    return (
        <section className=" p-2 sm:p-5 md:p-10 ">
            <div className="w-full p-1">
                <div className="flex justify-between items-center p-1 pb-4">
                    <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start my-5 sm:my-7 md:my-10">
                        Course Syllabus
                    </h2>
                </div>

                <div className="w-full border border-black rounded-sm">
                    {
                        data?.data?.map((item, index) => (
                            <ul className="flex">
                                <li className="border-black border w-24 text-center p-1 grid place-items-center" >[{index + 1}]</li>
                                <li className="border-black border w-3/5 text-blue-500 uppercase font-bold p-1 grid place-items-left items-center" >{item.title}</li>
                                <li className="border-black border w-24 text-center p-1" >
                                    {
                                        item?.subtitle.map((item, index) => (
                                            <li>{index + 1}</li>
                                        ))
                                    }
                                </li>
                                <li className="border-black border w-full text-gray-800 font-semibold p-1" >
                                    {
                                        item?.subtitle.map((title, index) => (
                                            <li>{title} </li>
                                        ))
                                    }
                                </li>
                                <li className="border-black border w-1/3 p-1 flex items-center justify-around">

                                    <Button variant="outlined">
                                        Download
                                    </Button>
                                </li>

                            </ul>
                        ))
                    }
                </div>
            </div>
        </section>)
}

export default Syllabus