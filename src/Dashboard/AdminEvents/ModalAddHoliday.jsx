import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const ModalAddHoliday = ({ open, handleOpen, updateEventsData }) => {

    const onSubmitClick = (e) => {
        e.preventDefault();

        // Assuming you have added logic to get holiday data from the form
        const newEvent = {
            start: new Date(/* holiday start date and time */),
            end: new Date(/* holiday end date and time */),
            title: ''
        }

        // Call the function to update events data in AdminEvents
        updateEventsData(newEvent);

        // Close the modal
        handleOpen();
    };

    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                className="min-w-[80%] md:min-w-[60%] lg:min-w-[20%]"
            >
                <DialogHeader className="text-center justify-center">
                    {" "}
                    Add Holiday
                </DialogHeader>
                <DialogBody divider className="h-[25rem] overflow-y-scroll">
                    <form className="w-full px-5 sm:px-10 mt-5">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            {/* event */}
                            <div className="w-full px-3 mb-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="event"
                                >
                                    Hoilday Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="event"
                                    type="text"
                                    placeholder="Holi"
                                />
                            </div>
                            {/* from */}
                            <div className="w-1/2 px-3 mb-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="from"
                                >
                                    From
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="from"
                                    type="date"
                                />
                            </div>
                            {/* to */}
                            <div className="w-1/2 px-3 mb-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="from"
                                >
                                    To
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="from"
                                    type="date"
                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="p-2 bg-[var(--theme-color)] rounded-lg text-white hover:bg-[var(--secondary-color)] cursor-pointer transition-all"
                        />
                    </form>
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

export default ModalAddHoliday;
