import React, { useState } from 'react';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';

const PrintableEnquiryForm = ({ open, handleOpen, getEnquiryList }) => {
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        postalAddress: '',
        phoneNumber: '',
        maritalStatus: '',
        dob: '',
        academicQualifications: '',
        computerAwareness: '',
        previousknowledge: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to an API or perform other actions.
        console.log(formData);
    };

    const Roll = () => {
        (
            <div>
                lol
            </div>
        )
    }

    const handlePrint = () => {
        const printWindow = window.open('', '', 'width=800,height=800');
        printWindow.document.open();
        printWindow.document.write(`<html>

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="Content-Style-Type" content="text/css" />
            <meta name="generator" content="Aspose.Words for .NET 23.9.0" />
            <title></title>
            <style type="text/css">
                body {
                    font-family: 'Times New Roman';
                    font-size: 12pt;
                    background-color: rgb(158, 158, 82);
                }
        
                p {
                    margin: 0pt
                }
            </style>
        </head>
        
        <body>
            <div style="border: double 5px black; padding: 20px;">
                <div style="display: flex; align-items: center; justify-content: center;">
                    <div>
                        <img src="https://www.smseducationlko.com/Images/LogoSmall.png" alt="">
                    </div>
                    <div style="margin-left: 20px;">
                        <h1 style="font-weight: 800; font-size: 60px;">SMS EDUCATION</h1>
                        <p style="font-size: larger;">Opp. Laxman Nursery, Gauri, Sarojini Nagar, Kanpur Road, Lucknow. E-mail
                            :smseducation@outlook.com
                            Ph. : (0522) 6004415, 3274415</p>
                    </div>
                </div>
                <center style="margin-top: 10px;">
                    <div style="text-align: center; color: white; max-width: fit-content;">
                        <center style="background-color: black; padding: 5px; font-size: x-large;">ENQUIRY FORM</center>
                    </div>
                </center>
                <div style="display: flex; justify-content: space-between; max-height: 65px;">
                    <div>
                        <h5 style="font-size: x-large;">Name </h5>
                    </div>
                    <div contenteditable
                        style="border-bottom: 2px solid black; width: 80%; height: 50px; margin-top: 20px; display: flex; align-items: center;">
                        :
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; max-height: 65px;">
                    <div>
                        <h5 style="font-size: x-large;">Father's Name </h5>
                    </div>
                    <div contenteditable
                        style="border-bottom: 2px solid black; width: 80%; height: 50px; margin-top: 20px; display: flex; align-items: center;">
                        :
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; max-height: 65px;">
                    <div>
                        <h5 style="font-size: x-large;">Postal Address </h5>
                    </div>
                    <div contenteditable
                        style="border-bottom: 2px solid black; width: 80%; height: 50px; margin-top: 20px; display: flex; align-items: center;">
                        :
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; max-height: 65px;">
                    <div>
                        <h5 style="font-size: x-large;">Phone Number </h5>
                    </div>
                    <div contenteditable
                        style="border-bottom: 2px solid black; width: 80%; height: 50px; margin-top: 20px; display: flex; align-items: center;">
                        :
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; max-height: 65px;">
                    <div>
                        <h5 style="font-size: x-large;">Marital Status </h5>
                    </div>
                    <div contenteditable
                        style="border-bottom: 2px solid black; width: 80%; height: 50px; margin-top: 20px; display: flex; align-items: center;">
                        :
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; max-height: 65px;">
                    <div>
                        <h5 style="font-size: x-large;">Date of Birth </h5>
                    </div>
                    <div contenteditable
                        style="border-bottom: 2px solid black; width: 80%; height: 50px; margin-top: 20px; display: flex; align-items: center;">
                        :
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; max-height: 65px;">
                    <div>
                        <h5 style="font-size: x-large;">Academic Qualification </h5>
                    </div>
                    <div contenteditable
                        style="border-bottom: 2px solid black; width: 80%; height: 50px; margin-top: 20px; display: flex; align-items: center;">
                        :
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; max-height: 65px;">
                    <div>
                        <h5 style="font-size: x-large;">Computer Awareness in Family (if Any) </h5>
                    </div>
                    <div contenteditable
                        style="border-bottom: 2px solid black; width: 80%; height: 50px; margin-top: 20px; display: flex; align-items: center;">
                        :
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <h5 style="font-size: x-large;">Previous knowledge of Computer, Give Institute Name (if Yes) </h5>
                    </div>
                    <div contenteditable
                        style="border-bottom: 2px solid black; width: 80%; height: 50px; margin-top: 20px; display: flex; align-items: center;">
                        :
                    </div>
                </div>
        
                <hr style="margin: 0px 30px; border: solid 1px black;">
                <hr style="border: solid 1px black;margin: 5px 5px;">
                <hr style="margin: 0px 30px; border: solid 1px black;">
        
                <div style="margin-top: 20px;">
                    <div style="display: flex; justify-content: space-between; max-height: 65px;">
                        <div style="width: 50%;">
                            <h5 style="font-size: x-large;">Interest to attend Personality Development Classes :</h5>
                        </div>
                        <div style="width: 50%; height: 25px; margin-top: 20px; display: flex; align-items: center;">
                            <div
                                style="border: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 20%;">
                            </div>
                            <h6 style="font-size: x-large; padding: 0px 50px;">Yes</h6>
                            <div
                                style="border: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 20%">
                            </div>
                            <h6 style="font-size: x-large; padding: 0px 50px;">No</h6>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; max-height: 65px;">
                        <div style="width: 50%;">
                            <h5 style="font-size: x-large;">Interest to attend Carrier Classes :</h5>
                        </div>
                        <div style="width: 50%; height: 25px; margin-top: 20px; display: flex; align-items: center;">
                            <div
                                style="border: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 20%;">
                            </div>
                            <h6 style="font-size: x-large; padding: 0px 50px;">Yes</h6>
                            <div
                                style="border: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 20%">
                            </div>
                            <h6 style="font-size: x-large; padding: 0px 50px;">No</h6>
                        </div>
                    </div>
                    <div style="display: flex; max-height: 60px; align-items: baseline;">
                        <div style="width: 20%;">
                            <h5 style="font-size: x-large;">Expected Joining Date</h5>
                        </div>
                        <div
                            style="border-bottom: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 10%;">
                        </div>
                        <h6 style="font-size: x-large; padding: 0px 10px;">/</h6>
                        <div
                            style="border-bottom: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 10%">
                        </div>
                        <h6 style="font-size: x-large; padding: 0px 10px;">/</h6>
                        <div
                            style="border-bottom: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 10%">
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; margin-top: 20px;">
                        <div>
                            <h5 style="font-size: x-large;">Reference :</h5>
                        </div>
                        <div
                            style="border: 2px solid black; height: 50px; display: flex; align-items: center; min-width: 10%; margin: 0px 50px;">
                        </div>
                        <div>
                            <h5 style="font-size: x-large;">Advertisement :</h5>
                        </div>
                        <div
                            style="border: 2px solid black; height: 50px; display: flex; align-items: center; min-width: 10%; margin: 0px 50px;">
                        </div>
                        <div>
                            <h5 style="font-size: x-large;">Student :</h5>
                        </div>
                        <div
                            style="border: 2px solid black; height: 50px; display: flex; align-items: center; min-width: 10%; margin: 0px 50px;">
                        </div>
                        <div>
                            <h5 style="font-size: x-large;">Advertisement :</h5>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; max-height: 50px; padding: 0px 100px;">
                        <div>
                            <h5 style="font-size: x-large;">Date ......................</h5>
                        </div>
                        <div>
                            <h5 style="font-size: x-large;">Signature</h5>
                        </div>
                    </div>
                </div>
        
                <div style="border-top: dotted 4px black; margin-top: 50px;">
                    <center style="margin-top: 50px;">
                        <div style="text-align: center; color: white; max-width: fit-content;">
                            <center style="background-color: black; padding: 5px; font-size: x-large;">FOR OFFICE USE ONLY
                            </center>
                        </div>
                    </center>
        
                    <div style="display: flex; max-height: 60px; align-items: baseline;">
                        <div>
                            <h5 style="font-size: x-large;">Course :</h5>
                        </div>
                        <div
                            style="border-bottom: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 40%;">
                        </div>
                        <div style="width: 10%;">
                            <h5 style="font-size: x-large;">Accepted By :</h5>
                        </div>
                        <div
                            style="border-bottom: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 40%;">
                        </div>
                    </div>
                    <div style="display: flex; max-height: 60px; align-items: baseline; margin: 20px 0px;">
                        <div>
                            <h5 style="font-size: x-large;">Date :</h5>
                        </div>
                        <div
                            style="border-bottom: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 40%;">
                        </div>
                        <div style="width: 10%;">
                            <h5 style="font-size: x-large;">Signature :</h5>
                        </div>
                        <div
                            style="border-bottom: 2px solid black; height: 50px; margin-top: 20px; display: flex; align-items: center; width: 40%;">
                        </div>
                    </div>
                </div>
        
            </div>
        </body>
        
        </html>`);
        // printWindow.document.write('<h1>Student Form</h1>');
        // printWindow.document.write('<pre>Name: ' + formData.name + '</pre>');
        // printWindow.document.write('<pre>Father\'s Name: ' + formData.fatherName + '</pre>');
        // printWindow.document.write('<pre>Postal Address: ' + formData.postalAddress + '</pre>');
        // printWindow.document.write('<pre>Phone Number: ' + formData.phoneNumber + '</pre>');
        // printWindow.document.write('<pre>Marital Status: ' + formData.maritalStatus + '</pre>');
        // printWindow.document.write('<pre>Date of Birth: ' + formData.dob + '</pre>');
        // printWindow.document.write('<pre>Academic Qualifications: ' + formData.academicQualifications + '</pre>');
        // printWindow.document.write('<pre>Dummy Field 1: ' + formData.computerAwareness + '</pre>');
        // printWindow.document.write('<pre>Dummy Field 2: ' + formData.previousknowledge + '</pre>');
        // printWindow.document.write('</body></html>');
        // printWindow.document.close();
        printWindow.print();
        printWindow.close();
    };


    return (
        <Dialog
            open={open}
            handler={handleOpen}
            className="min-w-[80%] md:min-w-[60%] lg:min-w-[60%]"
        >
            <DialogHeader className="flex justify-between items-center">

                <h3>Add Enquiry</h3>
                <Button
                    type="button"
                    onClick={handlePrint}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4"
                >
                    Print Form
                </Button>
            </DialogHeader>
            <DialogBody divider className="h-[25rem] overflow-y-scroll">

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Father's Name:</label>
                            <input
                                type="text"
                                name="fatherName"
                                value={formData.fatherName}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Postal Address:</label>
                            <input
                                type="text"
                                name="postalAddress"
                                value={formData.postalAddress}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Phone Number:</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Marital Status:</label>
                            <input
                                type="text"
                                name="maritalStatus"
                                value={formData.maritalStatus}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Date of Birth:</label>
                            <input
                                type="text"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Academic Qualifications:</label>
                            <input
                                type="text"
                                name="academicQualifications"
                                value={formData.academicQualifications}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Computer Awareness in Family (if Any) :</label>
                            <input
                                type="text"
                                name="computerAwareness"
                                value={formData.computerAwareness}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Previous knowledge of Computer, Give Institute Name (if Yes) :</label>
                            <input
                                type="text"
                                name="previousknowledge"
                                value={formData.previousknowledge}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
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
                <Button variant="gradient" color="blue" onClick={handleSubmit}>
                    <span>Submit</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
};

export default PrintableEnquiryForm;
