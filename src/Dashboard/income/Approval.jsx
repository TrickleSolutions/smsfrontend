import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Radio,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import { toast } from "react-toastify";

const Approval = ({ open, handleOpen }) => {

    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                size="sm"
                className="min-w-[80%] md:min-w-[60%] lg:min-w-[80%]"
            >
                <DialogHeader className="text-center justify-center">
                    {" "}
                    Approval Requests
                </DialogHeader>
                <DialogBody divider className="h-[25rem] overflow-y-scroll">
                    <div>
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Sr. No.</th>
                                    <th className="py-2 px-4 border-b">Date</th>
                                    <th className="py-2 px-4 border-b">Particular</th>
                                    <th className="py-2 px-4 border-b">Detail</th>
                                    <th className="py-2 px-4 border-b">Dr Amount</th>
                                    <th className="py-2 px-4 border-b">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b text-center">1</td>
                                    <td className="py-2 px-4 border-b text-center">12 January 2024</td>
                                    <td className="py-2 px-4 border-b text-center">Food</td>
                                    <td className="py-2 px-4 border-b text-center">Mini Party</td>
                                    <td className="py-2 px-4 border-b text-center text-red-700">2000</td>
                                    <td className="py-2 px-4 border-b text-center"><Button>Approve</Button></td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b text-center">2</td>
                                    <td className="py-2 px-4 border-b text-center">12 January 2024</td>
                                    <td className="py-2 px-4 border-b text-center">Food</td>
                                    <td className="py-2 px-4 border-b text-center">Mini Party</td>
                                    <td className="py-2 px-4 border-b text-center text-red-700">2000</td>
                                    <td className="py-2 px-4 border-b text-center"><Button>Approve</Button></td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b text-center">3</td>
                                    <td className="py-2 px-4 border-b text-center">12 January 2024</td>
                                    <td className="py-2 px-4 border-b text-center">Food</td>
                                    <td className="py-2 px-4 border-b text-center">Mini Party</td>
                                    <td className="py-2 px-4 border-b text-center text-red-700">2000</td>
                                    <td className="py-2 px-4 border-b text-center"><Button>Approve</Button></td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b text-center">4</td>
                                    <td className="py-2 px-4 border-b text-center">12 January 2024</td>
                                    <td className="py-2 px-4 border-b text-center">Food</td>
                                    <td className="py-2 px-4 border-b text-center">Mini Party</td>
                                    <td className="py-2 px-4 border-b text-center text-red-700">2000</td>
                                    <td className="py-2 px-4 border-b text-center"><Button>Approve</Button></td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b text-center">5</td>
                                    <td className="py-2 px-4 border-b text-center">12 January 2024</td>
                                    <td className="py-2 px-4 border-b text-center">Food</td>
                                    <td className="py-2 px-4 border-b text-center">Mini Party</td>
                                    <td className="py-2 px-4 border-b text-center text-red-700">2000</td>
                                    <td className="py-2 px-4 border-b text-center"><Button>Approve</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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

export default Approval;
