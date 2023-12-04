import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import { toast } from "react-toastify";
import Select from "react-select";

const ModalAddBatch = ({ open, handleOpen, getScheduledBatchesList }) => {
  const [topic, setTopic] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [contact_instructor, setContact_instructor] = useState("");
  const [maped, setMaped] = useState(false)


  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const data = { course, topic, date, contact_instructor };

  const onsubmitClick = () => {
    // Empty the fields
    // setCourse("");
    // setBatch("");
    // setDate("");
    // setTime("");

    // Post Api For Posting Data
    fetch(baseurl + "/api/class", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        toast.success("Batch Scheduled Successfully");
        handleOpen();
        getScheduledBatchesList();
      })
      .catch((err) => {
        console.log(err);
      });
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
          Add Batch
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form className="w-full px-5 sm:px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* topic */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="topic"
                >
                  INSTRUCTOR NAME
                </label>
                <Select options={options} />

              </div>
              {/* Course
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="course"
                >
                  Course
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="course"
                  type="text"
                  placeholder="Graphic Designing"
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                />
              </div> */}
              {/* From */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="date"
                >
                  From
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date"
                  type="datetime-local"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              {/* To */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="date"
                >
                  To
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date"
                  type="datetime-local"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              {/* Instructor */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="date"
                >
                  Map Student
                </label>
                <table className="table-auto w-full">
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
            </div>
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
          <Button variant="gradient" color="blue" onClick={onsubmitClick}>
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalAddBatch;
