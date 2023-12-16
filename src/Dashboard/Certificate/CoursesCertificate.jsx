import React, { useState } from 'react'
import { MdArrowForward } from 'react-icons/md';
import { Button, Input, Textarea } from '@material-tailwind/react'
import Select from 'react-select';

const CoursesCertificate = ({ back }) => {

    const [formData, setFormData] = useState({
        course: null,
        name: '',
        fatherName: '',
        regNo: '',
        date: '',
        address: '',
        options: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (selectedOption) => {
        setFormData((prevData) => ({
            ...prevData,
            course: selectedOption,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    const courseOptions = [
        { label: 'Course 1', value: 'course1' },
        { label: 'Course 2', value: 'course2' },
        // Add more courses as needed
    ];

    return (
        <div>
            <Button onClick={back}>Back to Certificate</Button>
            <div className="p-5 mx-auto max-w-xl">
                <form onSubmit={handleSubmit}>
                    {/* Course Select Field */}
                    <div className="py-2">
                        <Select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleSelectChange}
                            options={courseOptions}
                            placeholder="Select Course"
                            isSearchable
                            isClearable
                        />
                    </div>
                    <div className="py-2">
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter Student Name"
                            size="regular"
                            fullWidth
                        />

                    </div>
                    <div className="py-2">

                        <Input
                            type="text"
                            id="fatherName"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleInputChange}
                            placeholder="Father's Name"
                            size="regular"
                            fullWidth
                        />
                    </div>
                    <div className="py-2">

                        <Input
                            type="text"
                            id="regNo"
                            name="regNo"
                            value={formData.regNo}
                            onChange={handleInputChange}
                            placeholder="Registration Number"
                            size="regular"
                            fullWidth
                        />
                    </div>
                    <div className="py-2">
                        <Input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            placeholder="Date"
                            size="regular"
                            fullWidth
                        />

                    </div>
                    <div className="py-2">
                        <Textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Address"
                            size="regular"
                            fullWidth
                        />

                    </div>
                    <div className="py-2">
                        <Input
                            type="text"
                            id="options"
                            name="options"
                            value={formData.options}
                            onChange={handleInputChange}
                            placeholder="Options"
                            size="regular"
                            fullWidth
                        />
                    </div>

                    <Button
                        type="submit"
                        color="indigo"
                        buttonType="filled"
                        size="lg"
                        ripple="light"
                        fullWidth
                        className='flex justify-center items-center mt-2'
                    >
                        Submit <MdArrowForward size={20} className="ml-2" />
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default CoursesCertificate