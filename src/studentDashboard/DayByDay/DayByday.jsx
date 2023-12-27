import React, { useEffect, useState } from 'react';
import baseurl from '../../Config';
import { useAuthContext } from '../../context/useStateContext';
import moment from 'moment/moment';

const DayByday = () => {
    const { currentUser } = useAuthContext();
    const [courseData, setCourseData] = useState([]);
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(true);
    const [courseName, setCourseName] = useState('');

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

    const getDaybyDayCourse = () => {
        fetch(baseurl + `/api/day-by-day/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setLoader(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getCourseNameById = (courseId) => {
        const course = courseData.find((course) => course._id === courseId);
        return course ? course.title : 'Course not found';
    };

    useEffect(() => {
        getCoursesList();
        getDaybyDayCourse();
    }, [currentUser?.course]); // Ensure useEffect dependencies are correct

    useEffect(() => {
        // Assuming you have an 'id' available, replace 'yourId' with the actual ID you want to check
        const yourId = currentUser?.course;
        const yourCourseName = getCourseNameById(yourId);
        setCourseName(yourCourseName);
    }, [currentUser?.course, courseData]);

    console.log(data)

    return (
        <section className="p-2 sm:p-5 md:p-10">
            <div className="w-full p-1">
                <div className="flex justify-between items-center p-1 pb-4">
                    <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start my-5 sm:my-7 md:my-10">
                        Day By day Syllabus
                    </h2>
                </div>

                <div className="w-full border border-black rounded-sm">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className='border border-black' >S. No.</th>
                                <th className='border border-black' >Day</th>
                                <th className='border border-black' >Theory Session</th>
                                <th className='border border-black' >Practical Session</th>
                                <th className='border border-black' >Start Date</th>
                                <th className='border border-black' >End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-black'>1</td>
                                <td className='border border-black'>Day-1</td>
                                <td className='border border-black'>Introduction of javaScript</td>
                                <td className='border border-black'></td>
                                <td className='border border-black'>{moment('2023-12-23T08:16:50.338Z').format('MMMM Do YYYY, h:mm:ss a')}</td>
                                <td className='border border-black'>{moment('2023-12-23T08:16:50.338Z').format('MMMM Do YYYY, h:mm:ss a')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default DayByday;
