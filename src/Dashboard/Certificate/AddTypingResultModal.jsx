import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import baseurl from '../../Config';
import Select from 'react-select';

const AddTypingResultModal = ({ open, handleClose }) => {
    const [inputs, setInputs] = useState({});
    const [loader, setLoader] = useState(true);

    const [selectStudent, setSelectStudent] = useState(null);
    const [selectStudentData, setSelectStudentData] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSelectStudent = (selectedOption) => {
        setSelectStudent(selectedOption);
        setInputs(values => ({ ...values, name: selectedOption.label, studentId: selectedOption.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            student: selectStudent.value,
            regno: inputs.regno || '',
            typingLang: inputs.typingLang || '',
            fname: inputs.fname || '',
            speed: inputs.speed || '',
            accuracy: inputs.accuracy || '',
            from: inputs.from || '',
            to: inputs.to || '',
            total_marks: inputs.total_marks || '',
            obtain_marks: inputs.obtain_marks || ''
        };

        console.log("Form submitted:", formData);
        handleClose();
    }

    const getStudentList = async () => {
        try {
            const response = await fetch(`${baseurl}/api/course-students/65599995416b71fffc09d5ff`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const result = await response.json();
            setSelectStudentData(result.data[0].student);
            setLoader(false);
        } catch (error) {
            console.error("Error fetching student list:", error);
        }
    };

    useEffect(() => {
        getStudentList();
    }, []);

    console.log(selectStudentData)

    return (
        <>
            <Dialog
                open={open}
                className="min-w-[90%] md:min-w-[60%] lg:min-w-[55%]"
            >
                <DialogHeader className="text-center justify-center">
                    {" "}
                    Add Typing Result
                </DialogHeader>
                <DialogBody divider className="h-[25rem] overflow-y-scroll">
                    <form onSubmit={handleSubmit}>
                        <div className="py-2">
                            <Select
                                id="name"
                                name="name"
                                value={selectStudent}
                                onChange={handleSelectStudent}
                                options={selectStudentData?.map((item) => ({
                                    label: item?.name,
                                    value: item?._id,
                                }))}
                                placeholder="Select Student"
                                isSearchable
                            />
                        </div>
                        {/* Additional form fields go here */}
                        <div className="py-2">
                            <Input
                                type="text"
                                id="otherField"
                                name="otherField"
                                value={inputs.otherField || ''}
                                onChange={handleChange}
                                label="Other Field"
                                size="regular"
                                fullWidth
                            />
                        </div>
                        {/* Add more fields as needed */}
                        <Button
                            type="submit"
                            buttonType="filled"
                            size="lg"
                            ripple="light"
                            fullWidth
                            className='flex justify-center items-center mt-2'
                        >
                            Submit
                        </Button>
                    </form>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleClose}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default AddTypingResultModal;
