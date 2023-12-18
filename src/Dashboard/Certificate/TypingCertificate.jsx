import React, { useState } from 'react'
import { MdArrowForward } from 'react-icons/md';
import { Button, Input, Textarea } from '@material-tailwind/react'
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';


const TypingCertificate = ({ back }) => {

    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        regNo: '',
        course: null,
        speedWpm:'',
        average:'',
        location:'',
        from: '',
        to: '',
        options: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectCourse = (selectedCourse) => {
        setFormData((prevData) => ({
            ...prevData,
            course: selectedCourse,
        }));
    };
    const handleSelectOption = (selectedOption) => {
        setFormData((prevData) => ({
            ...prevData,
            options: selectedOption,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    const selectedCourseOptions = [
        { label: 'Course 1', value: 'course1' },
        { label: 'Course 2', value: 'course2' },
        // Add more courses as needed
    ];

    const SelectOptions = [
        { label: 'Credit', value: 'credit' },
        { label: 'Distinction', value: 'distinction' },
        { label: 'Excellent', value: 'excellent' }
        // Add more courses as needed
    ];

    const PrintCertificate = useNavigate()
    const { Id } = useParams();

    return (
        <div>
            <Button onClick={back}>Back to Certificate</Button>
            <div className="p-5 mx-auto max-w-xl">
                <form onSubmit={handleSubmit}>
                    {/* Course Select Field */}
                    <div className="py-2">
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            label="Enter Student Name"
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
                            label="Father's Name"
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
                            label="Registration Number"
                            size="regular"
                            fullWidth
                        />
                    </div>
                    <div className="py-2">
                        <Select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleSelectCourse}
                            options={selectedCourseOptions}
                            placeholder="Select Course"
                            isSearchable
                            isClearable
                        />
                    </div>
                    <div className="py-2">

                        <Input
                            type="number"
                            id="speedWpm"
                            name="speedWpm"
                            value={formData.speedWpm}
                            onChange={handleInputChange}
                            label="Speed"
                            size="regular"
                            fullWidth
                        />
                    </div>
                    <div className="py-2">

                        <Input
                            type="number"
                            id="average"
                            name="average"
                            value={formData.average}
                            onChange={handleInputChange}
                            label="Average"
                            size="regular"
                            fullWidth
                        />
                    </div>
                    <div className="py-2">

                        <Input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            label="Location"
                            size="regular"
                            fullWidth
                        />
                    </div>
                    <div className="py-2">
                        <Input
                            type="date"
                            id="from"
                            name="from"
                            value={formData.from}
                            onChange={handleInputChange}
                            variant="outlined"
                            label="From"
                            size="regular"
                            fullWidth
                        />

                    </div>
                    <div className="py-2">
                        <Input
                            type="date"
                            id="to"
                            name="to"
                            value={formData.to}
                            onChange={handleInputChange}
                            variant="outlined"
                            label="To"
                            size="regular"
                            fullWidth
                        />

                    </div>
                    <div className="py-2">
                        <Select
                            id="grade"
                            name="grade"
                            value={formData.options}
                            onChange={handleSelectOption}
                            options={SelectOptions}
                            placeholder="Grade"
                            isSearchable
                            isClearable
                        />
                    </div>

                    <Button
                        type="submit"
                        buttonType="filled"
                        size="lg"
                        ripple="light"
                        fullWidth
                        onClick={() => PrintCertificate(`/admin/certificate/print-certificate`)}
                        className='flex justify-center items-center mt-2'
                    >
                        Submit <MdArrowForward size={20} className="ml-2" />
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default TypingCertificate