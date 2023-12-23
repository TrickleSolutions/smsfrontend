import axios from "axios";
import baseurl from "../Config";
import { toast } from "react-toastify";
import GetStudentWithCourseReducer from "./reducer/GetStudentWithCourseReducer";

const { createContext, useContext, useReducer } = require("react");

const CreateCertificate = createContext();

const CertificateProvider = ({ children }) => {
  const [courseInfo, dispatch] = useReducer(GetStudentWithCourseReducer, {
    loading: true,
    student: null,
    course: null,
    error: false,
  });
  const GetStudentList = async (id) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await toast.promise(
        axios.get(baseurl + `/api/course-students/${id}`),
        {
          pending: "wait fetching student",
        }
      );
      if (response.status == 200) {
        dispatch({ type: "SUCCESS", payload: response.data.data });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR" });
    }
  };

  return (
    <CreateCertificate.Provider value={{ courseInfo, GetStudentList }}>
      {children}
    </CreateCertificate.Provider>
  );
};

export const useCertificate = () => {
  return useContext(CreateCertificate);
};

export default CertificateProvider;
