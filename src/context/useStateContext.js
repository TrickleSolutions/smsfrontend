import axios from "axios";
import baseurl from "../Config";
import { toast } from "react-toastify";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [marksData, setMarksData] = useState([]);
  const [instructorStudents, setInstructorStudents] = useState(null);
  const [loader, setLoader] = useState(true);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const getStudentData = (auth) => {
    fetch(`${baseurl}/api/students/${auth}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        sessionStorage.setItem("user", JSON.stringify(result));
        // setStudent(result);
        setCurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMarksData = () => {
    fetch(`${baseurl}/api/marks/${currentUser._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setMarksData(result);
        setLoader(false);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [imageUploads, setImageUploads] = useState({});

  const UploadImage = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(baseurl + "/api/uploadfile/", {
      method: "POST",
      body: fd,
    })
      .then((res) => {
        if (res.status === 200) {
          toast.info("uploaded Image Success");
          res.json().then((data) => {
            console.log(data);
            const value = { [e.target.name]: data.fileName };
            setImageUploads({ ...imageUploads, ...value });
            console.log(imageUploads);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetInstructorStudents = async (instructorId) => {
    try {
      const response = await axios.get(
        baseurl + `/api/course/students/${instructorId}`
      );
      if (response.status === 200) {
        setInstructorStudents(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        getStudentData,
        getMarksData,
        marksData,
        setMarksData,
        loader,
        setLoader,
        imageUploads,
        UploadImage,
        setImageUploads,
        GetInstructorStudents,
        instructorStudents,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext, AuthProvider };
