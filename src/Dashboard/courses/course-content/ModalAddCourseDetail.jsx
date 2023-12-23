import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Input } from '@material-tailwind/react'
import React, { useState } from 'react'
import baseurl from '../../../Config';
import { FiDelete } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from 'react-toastify';



const ModalAddCourseDetail = ({ open, handleOpen, courseId, getCourseDetails }) => {

  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [uploads, setUploads] = useState([]);

  const handleFileUpload = async (e) => {
    try {
      const file = e.target.files[0];
      console.log('File MIME Type:', file.type);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(baseurl + '/api/upload/file?fileName=' + file?.name, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const uploadedData = await response.json();
        setUploads([...uploads, uploadedData.fileName]); // Add the uploaded file to the array

        setUploadedImageUrl(uploadedData.fileName);

        toast.success('File Uploaded Successfully');
      } else {
        console.log('File Upload Failed');
        toast.warning('File Upload Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  const [formData, setFormData] = useState({
    lession_no: '',
    title: '',
    subtitle: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubtitleChange = (index, value) => {
    const subtitles = [...formData.subtitle];
    subtitles[index] = value;
    setFormData({
      ...formData,
      subtitle: subtitles,
    });
  };

  const handleAddSubtitle = () => {
    setFormData({
      ...formData,
      subtitle: [...formData.subtitle, ''],
    });
  };

  const handleRemoveSubtitle = (index) => {
    const subtitles = [...formData.subtitle];
    subtitles.splice(index, 1);
    setFormData({
      ...formData,
      subtitle: subtitles,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseurl + `/api/course/lessions/${courseId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          uploads: uploads, // Include the uploads array in the request
        }),
      });

      if (response.ok) {
        console.log('Form Data Submitted:', formData);
        getCourseDetails();
        setFormData({
          lession_no: '',
          title: '',
          subtitle: [],
        });
        setFile(null);
        setUploads([]); // Clear the uploads array after submission
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      toast('Successfully Added');
      handleOpen();
    }
  };

  return (
    <Dialog
      open={open}
      // handler={handleOpen}
      className="min-w-[80%] md:min-w-[60%] lg:min-w-[50%]"
    >
      <DialogHeader className="text-center justify-center">
        {" "}
        Add Course Details
      </DialogHeader>
      <DialogBody divider className="h-[25rem] overflow-y-scroll">
        <form className="w-full px-5 sm:px-10 mt-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lession_no">
              Lesson Number
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lession_no"
              type="text"
              name="lession_no"
              value={formData.lession_no}
              onChange={handleInputChange}
              placeholder="Enter lesson number"
              variant="outlined"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
              Upload Document
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="uploadDocs hidden"
              onChange={handleFileUpload}
            />
            <Button onClick={() => document.querySelector(".uploadDocs").click()}>Upload</Button>
            {uploadedImageUrl && (
              <img src={uploadedImageUrl} alt="Uploaded" className="ml-4 max-w-[100px] max-h-[100px]" />
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subtitle">
              Subtitles
            </label>
            {formData.subtitle.map((subtitle, index) => (
              <div key={index} className="flex mb-2">
                <Input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name={`subtitle-${index}`}
                  value={subtitle}
                  onChange={(e) => handleSubtitleChange(index, e.target.value)}
                  placeholder="Enter subtitle"
                />
                <IconButton className='text-red-800 flex items-center ml-1' variant='text' type="button" onClick={() => handleRemoveSubtitle(index)}>
                  <FiDelete size={30} />
                </IconButton>
              </div>
            ))}
            <button type="button" onClick={handleAddSubtitle}>
              <IoIosAddCircle size={30} />
            </button>
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
        <Button variant="gradient" type='submit' onClick={handleSubmit}>
          <span>Save</span>
        </Button>
      </DialogFooter>
    </Dialog>)
}

export default ModalAddCourseDetail