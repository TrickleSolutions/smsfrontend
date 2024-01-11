import React, { useEffect, useState } from 'react'
import { MdArrowForward } from 'react-icons/md';
import { Button, Input, Textarea } from '@material-tailwind/react'
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import { useCertificate } from '../../context/useCertificate';
import baseurl from '../../Config';


const TypingCertificate = ({ back }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [loader, setLoader] = useState(true);

    const [selectStudent, setSelectStudent] = useState([]);
    const [selectStudentData, setSelectStudentData] = useState([]);
    const [fetchTypingData, setFetchTypingData] = useState([])

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

    console.log('selected student', selectStudent.value)
    const getFetchResult = async () => {
        try {

            const response = await fetch(`${baseurl}/api/typing-result/get?id=${selectStudent?.value}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const result = await response.json();
            setFetchTypingData(result.data);
            setLoader(false);
        } catch (error) {
            console.error("Error fetching student list:", error);
        }
    };

    console.log('', fetchTypingData)


    useEffect(() => {
        getStudentList();
        getFetchResult();
    }, [currentPage]);


    const [formData, setFormData] = useState({
        name: null,
        fatherName: '',
        regNo: '',
        language: null,
        speedWpm: '',
        average: '',
        address: '',
        from: '',
        to: '',
        grade: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };


    const handleSelectStudent = (selectedStudent) => {
        const selected = selectStudentData?.students?.find(
            (item) => item?._id === selectedStudent?.value
        );

        if (selected) {
            const { regno, fname } = selected;

            setFormData({
                student: selected,
                regNo: regno,
                fatherName: fname,
            });
        }

        setSelectStudent(selectedStudent);
    };


    useEffect(() => {
        if (selectStudent) {
            const student = selectStudentData?.students?.find(item => item?._id === selectStudent?.value)
            setFormData({ regNo: student?.regno, fatherName: student?.fname })
        }
    }, [selectStudent])

    const handleSelectlanguageOption = (selectedOption) => {
        setFormData((prevData) => ({
            ...prevData,
            language: selectedOption,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        PrintCertificate(`/admin/certificate/print-certificate`, { state: { formData } });
        console.log('Form submitted:', formData);
    };

    const selectedlanguageOptions = [
        { label: 'English', value: 'english' },
        { label: 'Hindi', value: 'hindi' },
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

                    <div className="py-2">
                        {/* <Select
                            id="grade"
                            name="grade"
                            value={formData.language}
                            onChange={handleSelectlanguageOption}
                            options={selectedlanguageOptions}
                            placeholder="Typing Language"
                            isSearchable
                            isClearable
                        /> */}
                        <Input
                            type="text"
                            id="fatherName"
                            name="fatherName"
                            value={fetchTypingData.typingLang}
                            // onChange={handleInputChange}
                            label="Typing Language"
                            size="regular"
                            fullWidth
                        />
                    </div>

                    <div className="py-2">

                        <Input
                            type="text"
                            id="fatherName"
                            name="fatherName"
                            value={fetchTypingData.fname}
                            // onChange={handleInputChange}
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
                            value={fetchTypingData.regno}
                            // onChange={handleInputChange}
                            label="Registration Number"
                            size="regular"
                            fullWidth
                        />
                    </div>
                    <div className="py-2">

                        <Input
                            type="number"
                            id="speedWpm"
                            name="speedWpm"
                            value={fetchTypingData.speed}
                            // onChange={handleInputChange}
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
                            value={fetchTypingData.accuracy}
                            // onChange={handleInputChange}
                            label="Average"
                            size="regular"
                            fullWidth
                        />
                    </div>
                    <div className="py-2">

                        <Input
                            type="text"
                            id="address"
                            name="address"
                            value={fetchTypingData.address}
                            // onChange={handleInputChange}
                            label="Address"
                            size="regular"
                            fullWidth
                        />
                    </div>
                    <div className="py-2">
                        <Input
                            type="date"
                            id="from"
                            name="from"
                            value={fetchTypingData.from}
                            // onChange={handleInputChange}
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
                            value={fetchTypingData.to}
                            // onChange={handleInputChange}
                            variant="outlined"
                            label="To"
                            size="regular"
                            fullWidth
                        />

                    </div>
                    <div className="py-2">
                        <Input
                            id="grade"
                            name="grade"
                            value={fetchTypingData.obtain_marks}
                            // onChange={handleInputChange}
                            variant="outlined"
                            label="Enter Marks"
                            size="regular"
                            fullWidth
                        />
                    </div>

                    <Button
                        type="submit"
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

export default TypingCertificate