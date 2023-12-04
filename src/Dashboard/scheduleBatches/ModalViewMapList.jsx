import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const ModalViewMapList = ({ open, handleOpen }) => {


    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                className="min-w-[80%] md:min-w-[60%] lg:min-w-[20%]"
            >
                <DialogHeader className="text-center justify-center">
                    {" "}
                    Map Student List
                </DialogHeader>
                <DialogBody divider className="h-[25rem] overflow-y-scroll">
                    <div className="grid grid-cols-1">
                        <table className="table-auto">
                            <thead>
                                <tr className="text-left">
                                    <th>Reg No.</th>
                                    <th>Student Name</th>
                                    <th>Course</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                </tr>
                                <tr>
                                    <td>11231</td>
                                    <td>Ram</td>
                                    <td>CCC</td>
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

export default ModalViewMapList;
