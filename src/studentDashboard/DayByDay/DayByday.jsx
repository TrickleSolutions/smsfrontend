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
        console.log(courseName)
        fetch(baseurl + `/api/day-by-day/get?course=${courseName}`, {
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
        const course = courseData.find((course) => course?.title === courseId);
        return course ? course._id : 'Course not found';
    };

    useEffect(() => {
        getCoursesList();
        getDaybyDayCourse();
    }, [currentUser?.course]);

    useEffect(() => {
        const yourId = currentUser?.course;
        const yourCourseName = getCourseNameById(yourId);
        setCourseName(yourCourseName);
    }, [currentUser?.course, courseData]);

    return (
        <section className="p-2 sm:p-5 md:p-10">
            <div className="w-full p-1">
                <div className="flex justify-between items-center p-1 pb-4">
                    <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start my-5 sm:my-7 md:my-10">
                        (<span className='text-blue-500'> {currentUser?.course} </span>) Day By day Syllabus
                    </h2>
                </div>

                <div className="w-full rounded-md">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className=' border border-black p-1' >S. No.</th>
                                <th className=' border border-black p-1' >Day</th>
                                <th className=' border border-black p-1' >Theory Session</th>
                                <th className=' border border-black p-1' >Practical Session</th>
                                <th className=' border border-black p-1' >Start Date</th>
                                <th className=' border border-black p-1' >End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data?.[0]?.plan?.map((item, index) => (
                                <tr key={index}>
                                    <td className="border border-black p-1">{index + 1}</td>
                                    <td className="border border-black p-1">Day {item?.day}</td>
                                    <td className="border border-black p-1">{item?.theory}</td>
                                    <td className="border border-black p-1">{item?.practical}</td>
                                    <td className="border border-black p-1">{moment(item?.startDate).format('MMMM Do YYYY')}</td>
                                    <td className="border border-black p-1">{moment(item?.endDate).format('MMMM Do YYYY')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </section >
    );
};

export default DayByday;
