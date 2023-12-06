import React, { useState } from "react";
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

const AllAttendance = () => {


  const [isStastusChangeModalopen, setIsStatusChangeModal] = useState(false)
  const handleStatuschange = () => setIsStatusChangeModal(!isStastusChangeModalopen)

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


  const Data = [
    {
      id: 1,
      name: 'Ram',
      regNo: 3256,
      studentId: 1246,
      course: 'ADCA',
      batchTime: '7 AM to 9 PM',
      mobileNo: '8282165164',
      instructorName: 'Sourabh',
      currentAttendance: [
        {
          day: '1',
          status: 'Present'
        },
        {
          day: '2',
          status: 'Late'
        },
        {
          day: '3',
          status: 'Holiday'
        },
        {
          day: '4',
          status: 'Present'
        },
        {
          day: '5',
          status: 'Absent'
        },
      ]
    }
  ]

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      // renderCell: (params) => (
      //   <div className="flex justify-center">{params.row.id + 1}</div>
      // ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 100,
      // renderCell: (params) => (
      //   <div
      //     style={{ cursor: "pointer" }}
      //   >
      //     <div className="flex items-center gap-1">
      //       <img
      //         className="rounded-full w-10 h-10"
      //         src={
      //           baseurl + `/${params.row?.profilePic}` ||
      //           "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg"
      //         }
      //         alt="profile"
      //       />
      //       <h5>{params.row?.name}</h5>
      //     </div>
      //   </div>
      // ),
    },
    {
      field: "regNo",
      headerName: "Reg No",
      type: "number",
      width: 100,
    },
    // {currentAttendance.map((item) => {
    //   field: "currentAttendance",
    //   headerName: "date",
    //   width: 100,
    // }
    //   )
    // },
    {
      field: "batchTime",
      headerName: "Batch Time",
      width: 100,
    },
    {
      field: "course",
      headerName: "Course",
      width: 100,
    },
    {
      field: "batchTime",
      headerName: "Batch Time",
      width: 100,
    },

    {
      field: "mobileNo",
      headerName: "Mobile No",
      width: 100,
    },
    {
      field: "instructorName",
      headerName: "Teacher Name",
      width: 100,
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
          rows={Data}
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

      </div>
    </>
  );
};



export default AllAttendance