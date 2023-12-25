import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import InstructorAttendance from "../manage-student/InstructorAttendance";
import InstructorMapedStudents from "./InstructorStudents";
import InstructorStudents from "../../InstructorDashboard/InstructorStudents/InstructorStudents";
import baseurl from "../../Config";
import Loader from "../../Components/Loader";

const ModalOneViewProfile = ({ open, handleOpen, instructor }) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true);


    const getInstructorDetailById = (instructor) => {
        console.log(instructor)
        fetch(baseurl + `/api/instructor/${instructor}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then((result) => {
                console.log(result)
                setData(result[0]);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };
    useEffect(() => {
        getInstructorDetailById(instructor);
    }, [instructor]);


    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                className="min-w-[80%] md:min-w-[60%] lg:min-w-[80%]"
            >
                <DialogHeader className="text-center justify-center">
                    {" "}
                    Instructor Profile
                </DialogHeader>
                <DialogBody divider className="h-[35rem] overflow-y-scroll">
                    {loading ? <div className="grid place-items-center">
                        <Loader />
                    </div> : (
                        <>
                            <div className="border border-black rounded-md flex bg-blue-100">
                                <div className="w-96">
                                    <img src={`${baseurl}/${data?.profilePic}`} className="h-96" alt="" />
                                </div>
                                <table className="w-full">

                                    <tr>
                                        <td className="text-black font-semibold text-base p-2">Name</td>
                                        <td className="text-thin font-semibold text-white p-2">{data?.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black font-semibold text-base p-2">Address</td>
                                        <td className="text-thin font-semibold text-white p-2">{data?.address}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black font-semibold text-base p-2">Mobile</td>
                                        <td className="text-thin font-semibold text-white p-2">{data?.contact}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black font-semibold text-base p-2">Email</td>
                                        <td className="text-thin font-semibold text-white p-2">{data?.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black font-semibold text-base p-2">Date of Birth</td>
                                        <td className="text-thin font-semibold text-white p-2">{data?.dob}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black font-semibold text-base p-2">Qualification</td>
                                        <td className="text-thin font-semibold text-white p-2">{data?.qualification}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black font-semibold text-base p-2">joining Date</td>
                                        <td className="text-thin font-semibold text-white p-2">Maria Anders</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black font-semibold text-base p-2">CV(Bio-Data)</td>
                                        <td className="text-thin font-semibold text-white p-2">{data?.cv}</td>
                                    </tr>
                                </table>
                            </div>
                            <InstructorAttendance />
                            <InstructorMapedStudents />
                            <InstructorStudents />
                        </>
                    )}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default ModalOneViewProfile;
