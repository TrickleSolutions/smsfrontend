import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import Loader from "../../Components/Loader";
import moment from "moment/moment";

const ModalOneViewProfile = ({ open, handleOpen, instructor }) => {

    const [data, setData] = useState()
    const [InstructorData, setInstructorData] = useState()
    const [loading, setLoading] = useState(true);


    const getInstructorDetailById = (instructor) => {
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
        getScheduledBatchesListById(instructor);
    }, [instructor]);


    const getScheduledBatchesListById = (instructor) => {
        fetch(baseurl + `/api/batch/get?instructor=${instructor}`, {
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
                console.log(result.data)
                setInstructorData(result.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };





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
                                    <img src={`${baseurl}/${data?.profilePic}`} className="h-96 rounded-l-md" alt=".." />
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
                            <div className="pt-4">
                                <table className="w-full border bg-blue-200 rounded-md">

                                    <tr>
                                        <th className="font-semibold text-black p-2 border">From</th>
                                        <th className="font-semibold text-black p-2 border">To</th>
                                        <th className="font-semibold text-black p-2 border">Reg No.</th>
                                        <th className="font-semibold text-black p-2 border">Name</th>
                                        <th className="font-semibold text-black p-2 border">Course.</th>
                                    </tr>

                                    {
                                        InstructorData?.map((item, index) => (
                                            <tr key={index}>
                                                <td className="text-white text-base p-2">
                                                    {moment(item?.batchTime?.from).format('h:mm a')}
                                                </td>
                                                <td className="text-white text-base p-2">
                                                    {moment(item?.batchTime?.to).format('h:mm a')}
                                                </td>
                                                <td className="text-white text-base p-2">

                                                    {
                                                        item?.students.map((subitem, index) => (
                                                            <li>{subitem?.regno}</li>
                                                        ))
                                                    }
                                                </td>
                                                <td className="text-white text-base p-2">

                                                    {
                                                        item?.students.map((subitem, index) => (
                                                            <li>{subitem?.name}</li>
                                                        ))
                                                    }
                                                </td>
                                                <td className="text-white text-base p-2">{item?.course?.title}</td>
                                            </tr>
                                        ))
                                    }

                                </table>
                            </div>
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
