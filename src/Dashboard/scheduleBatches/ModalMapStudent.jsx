import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const ModalMapStudent = ({ open, handleOpen }) => {

    const [maped, setMaped] = useState(false)

    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                className="min-w-[80%] md:min-w-[60%] lg:min-w-[20%]"
            >
                <DialogHeader className="text-center justify-center">
                    {" "}
                    Map Student
                </DialogHeader>
                <DialogBody divider className="h-[25rem] overflow-y-scroll">
                    <div className="grid grid-cols-1">
                        <table className="table-auto">
                            <thead>
                                <tr className="text-left">
                                    <th>Student Name</th>
                                    <th>Course</th>
                                    <th>Fees</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>CCC</td>
                                    <td>19000</td>
                                    <td
                                        className="text-center"
                                        onClick={() => setMaped(!maped)}
                                    >
                                        {
                                            maped ?
                                                <Button>Remove</Button> :
                                                <Button>Add</Button>
                                        }
                                    </td>
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
                    <Button variant="gradient" color="blue">
                        <span>Add</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default ModalMapStudent;
