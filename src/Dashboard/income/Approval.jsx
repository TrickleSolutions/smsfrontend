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
                className="min-w-[80%] md:min-w-[60%] lg:min-w-[50%]"
            >
                <DialogHeader className="text-center justify-center">
                    {" "}
                    Approval Requests
                </DialogHeader>
                <DialogBody divider className="h-[25rem] overflow-y-scroll">
                    <div>
                        No any request found
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
