import React, { useEffect, useState } from "react";
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


const ModalEditBatch = ({
  open,
  handleOpen,
  item,
  batchId,
  getScheduledBatchesList,
}) => {

  const [batch, setBatch] = useState("");
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [maped, setMaped] = useState(true)
  const [data, setData] = useState([]);
  const [updatedMappedStudents, setUpdatedMappedStudents] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const [formData, setFormData] = useState({
    instructor: null,
    course: "",
    from: "",
    to: "",
    students: [],
  });



  const getScheduledBatchesListByid = (batchId) => {
    fetch(baseurl + `/api/batch/get?id=${batchId}`, {
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
        const batchData = result.data[0];

        const instructorOption = {
          value: batchData.instructor._id,
          label: batchData.instructor.name,
        };

        const formattedFrom = batchData.batchTime.from.slice(0, -1); // Remove 'Z' at the end
        const formattedTo = batchData.batchTime.to.slice(0, -1);


        setFormData({
          instructor: instructorOption,
          course: batchData.course.title,
          from: formattedFrom,
          to: formattedTo,
          students: batchData.students || [],
        });

        setSelectedInstructor(instructorOption);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getScheduledBatchesListByid(batchId);
    getInstructorList();
  }, [batchId]);


  const getInstructorList = () => {
    fetch(baseurl + "/api/instructor", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const instructors = data || [];

  const handleSelectInstructorOption = (selectedInstructor) => {
    setFormData((formData) => ({
      ...formData,
      instructor: selectedInstructor,
    }));
    setSelectedInstructor(selectedInstructor);
  };

  const instructorOptions = instructors.map((instructor) => ({
    value: instructor?._id,
    label: instructor?.name,
  }));

  const onSubmitClick = () => {

    const updatedData = {
      instructor: formData.instructor,
      course: formData.course,
      from: formData.from,
      to: formData.to,
      students: formData.students,
    };

    console.log(formData.students)

    fetch(baseurl + "/api/batch/update/" + batchId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Update API Response:", data);
        toast.info("Updated Successfully");
        handleOpen();
        getScheduledBatchesList();
      })
      .catch((error) => {
        console.error("Error during update:", error);
        toast.error("Error during update");
      });
  };



  const handleMapedChange = (studentId) => {
    // Find the student in the current list
    const studentIndex = formData.students.findIndex((student) => student._id === studentId);

    // Check if the student is already in the list
    if (studentIndex !== -1) {
      // Student exists, remove from the list
      const updatedStudents = [...formData.students];
      updatedStudents.splice(studentIndex, 1);
      setFormData({ ...formData, students: updatedStudents });
    } else {
      // Student doesn't exist, add to the list
      const studentToAdd = {
        _id: studentId,
        // Add other properties as needed
      };
      const updatedStudents = [...formData.students, studentToAdd];
      setFormData({ ...formData, students: updatedStudents });
    }

    // Toggle the maped state
    setMaped(!maped);
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
          Edit Batch
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form className="w-full px-5 sm:px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* batch */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="batch"
                >
                  INSTRUCTOR NAME
                </label>
                <Select
                  name="instructor"
                  id="instructor"
                  placeholder="Select Instructor"
                  options={instructorOptions}
                  value={selectedInstructor}
                  onChange={handleSelectInstructorOption}
                />
              </div>
              {/* Course */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="course"
                >
                  Course
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  value={formData.course}
                  name="course"
                  disabled
                />
              </div>
              {/* From */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="from"
                >
                  From
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="from"
                  name="from"
                  type="datetime-local"
                  value={formData.from}
                  onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                />
              </div>
              {/* To */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="to"
                >
                  To
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="to"
                  name="to"
                  type="datetime-local"
                  value={formData.to}
                  onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                />
              </div>
              {/* time */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="time"
                >
                  Mapped Students
                </label>
                <table className="table-auto w-full">
                  <thead style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'white' }}>
                    <tr className="text-left">
                      <th>Student Name</th>
                      <th>Course</th>
                      <th>Fees</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody style={{ overflowY: 'scroll', height: '100px' }}>
                    <tr>
                      <td>Ram</td>
                      <td>CCC</td>
                      <td>19000</td>
                      <td className="text-center" onClick={() => handleMapedChange()}>
                        {maped ? <Button>Remove</Button> : <Button>Add</Button>}
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
          <Button variant="gradient" color="blue" onClick={onSubmitClick}>
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>

    </>
  );
};

export default ModalEditBatch;
