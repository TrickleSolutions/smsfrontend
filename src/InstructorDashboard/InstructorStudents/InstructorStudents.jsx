import React, { useEffect, useState } from "react";
import { Card } from "@material-tailwind/react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import ModalChangeStatus from "./ModalChangeStatus";
import { useAuthContext } from "../../context/useStateContext";
import baseurl from "../../Config";
import moment from "moment/moment";

const InstructorStudents = () => {


  const [isStastusChangeModalopen, setIsStatusChangeModal] = useState(false)
  const handleStatuschange = () => setIsStatusChangeModal(!isStastusChangeModalopen)
  const { GetInstructorStudents, instructorStudents, currentUser } = useAuthContext();
  const [Data, setData] = useState([])
  const [loader, setLoader] = useState(true);
  const [instructorData, setInstructorData] = useState(
    JSON.parse(window.sessionStorage.getItem("instructor-data"))
  );


  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarQuickFilter />
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  };


  const getScheduledBatchesListById = () => {
    const instructorId = instructorData?._id; // Make sure _id is available

    if (!instructorId) {
      console.error("Instructor ID is not available.");
      return;
    }

    fetch(baseurl + `/api/batch/get?instructor=${instructorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((result) => {
        console.log(result.data);
        setData(result.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getScheduledBatchesListById();
  }, [instructorData]);

  const DataWithID = (data) => {
    const NewData = [];
    if (data && Array.isArray(data)) {
      for (let item of data) {
        NewData.push({
          ...item,
          id: data.indexOf(item),
        });
      }
    }
    return NewData;
  };

  // const Data = [
  //   {
  //     id: 1,
  //     name: 'Test',
  //     regNo: 3256,
  //     doj: '02 Dec 2023',
  //     batchSlot: 'Evening',
  //     course: 'DIA',
  //     batchTime: '12 PM to 1 PM',
  //     lastMontDue: 0,
  //     thisMonthDue: 1350,
  //     feeDate: '02 Dec 2023',
  //     thisMonthPaid: 1350,
  //     totalDue: 0,
  //     mobileNo: '7896456555',
  //     teacherName: 'Sourabh',
  //     status: 'Running'
  //   }
  // ]

  const columns = [
    {
      field: "id", headerName: "ID", width: 100,
      renderCell: (params) => (
        <div>
          {params.row.id + 1}
        </div>
      )
    },
    {
      field: "name",
      headerName: "Name",
      width: 100,
      renderCell: (params) => (
        <div>
          {
            params.row.students.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          {/* <div className="text-blue-800 font-black">
            Dropout
          </div> */}
        </div>
      )
    },
    {
      field: "regNo", headerName: "Reg No", width: 100,
      renderCell: (params) => (
        <div>
          {
            params.row.students.map((item, index) => (
              <p key={index}>{item.regno}</p>
            ))}
        </div>
      )
    },
    {
      field: "admdate",
      headerName: "DOJ",
      width: 100,
      renderCell: (params) => (
        <div>
          {
            params.row.students.map((item, index) => (
              <p key={index}>{item.admdate}</p>
            ))}
        </div>
      )
    },
    {
      field: "shift",
      headerName: "Batch Slot",
      width: 100,
      renderCell: (params) => (
        <div>
          {
            params.row.students.map((item, index) => (
              <p key={index}>{item.shift}</p>
            ))}
        </div>
      )
    },
    {
      field: "course", headerName: "Course", width: 150,
      renderCell: (params) => (
        <div>
          {
            params.row.course?.title
          }
        </div>
      )
    },
    {
      field: "batchTime", headerName: "Batch Time", width: 200,
      renderCell: (params) => (
        <div className='flex justify-around'>
          <div>
            {moment(params.row.batchTime?.from).format('h:mm a')}
          </div>
          <b>&nbsp;	 - &nbsp;	 </b>
          <div>
            {moment(params.row.batchTime?.from).format('h:mm a')}
          </div>
        </div>
      )
    },
    // {
    //   field: "lastMontDue",
    //   headerName: "Last Month Due",
    //   width: 100,
    //   renderCell: (params) => (
    //     <div className="flex justify-center">
    //       {moment(params.row.dob).format("MMMM Do YYYY")}
    //     </div>
    //   ),
    // },
    // {
    //   field: "thisMonthDue",
    //   headerName: "This Month Due",
    //   width: 100,
    //   renderCell: (params) => (
    //     <div className="flex justify-center">
    //       {moment(params.row.admdate).format("MMMM Do YYYY")}
    //     </div>
    //   ),
    // },
    // {
    //   field: "feeDate",
    //   headerName: "Fee Date",
    //   type: "number",
    //   width: 100,
    //   renderCell: (params) => (
    //     <div className="flex justify-center">
    //       <p>{params?.locker_no || "NA"}</p>
    //     </div>
    //   ),
    // },
    // {
    //   field: "thisMonthPaid",
    //   headerName: "This Month Paid",
    //   width: 100,
    // },
    // {
    //   field: "totalDue",
    //   headerName: "Total Due",
    //   width: 100,
    // },
    {
      field: "mobileNo", headerName: "Mobile No", width: 150,
      renderCell: (params) => (
        <div>
          {
            params.row.students.map((item, index) => (
              <p key={index}>{item.contact}</p>
            ))}
        </div>
      )
    },
    {
      field: "teacherName",
      headerName: "Teacher Name",
      width: 150,
      renderCell: (params) => (
        <div>
          {currentUser?.name }
        </div>
      )
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => (
        <div>
          {
            params.row.students.map((item, index) => (
              <p key={index}>{item.status}</p>
            ))}
          {/* <div className="text-blue-800 font-black">
            Dropout
          </div> */}
        </div>
      )
    },
    {
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <div
          className="flex items-center"
          onClick={handleStatuschange}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
          Edit
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="p-5 ml-auto shadow-lg  h-[100vh] overflow-y-scroll scrollbar-hide bg-[#f5f6fa] mt-5">
        <div className="grid grid-cols-4 gap-4 my-2">
          <Card className="p-5 text-center text-red-500">
            <h1 className="text-lg">Total Last Month Due</h1>
            <p className="text-2xl font-bold">25000</p>
          </Card>
          <Card className="p-5 text-center text-blue-800">
            <h1 className="text-lg">Total Last Month Fees</h1>
            <p className="text-2xl font-bold">25000</p>
          </Card>
          <Card className="p-5 text-center text-blue-800">
            <h1 className="text-lg">Total This Month Paid</h1>
            <p className="text-2xl font-bold">25000</p>
          </Card>
          <Card className="p-5 text-center text-red-900">
            <h1 className="text-lg">Total Due</h1>
            <p className="text-2xl font-bold">25000</p>
          </Card>
        </div>
        <DataGrid
          rows={DataWithID(Data)}
          columns={columns}
          components={{ Toolbar: CustomToolbar }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
        />
        <ModalChangeStatus
          open={isStastusChangeModalopen}
          handleOpen={handleStatuschange}
        />
      </div>
    </>
  );
};

export default InstructorStudents;
