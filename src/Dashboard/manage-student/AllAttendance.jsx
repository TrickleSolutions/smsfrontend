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


const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const AllAttendance = () => {

  const [isStastusChangeModalopen, setIsStatusChangeModal] = useState(false);
  const handleStatuschange = () => setIsStatusChangeModal(!isStastusChangeModalopen);

  const [activeMonth, setActiveMonth] = useState('January');

  const handleMonthChange = (month) => {
    setActiveMonth(month);
  };


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
      name: "Ram",
      regNo: 3256,
      studentId: 1246,
      course: "ADCA",
      batchTime: "7 AM to 9 PM",
      mobileNo: "8282165164",
      instructorName: "Sourabh",
      currentAttendance: [
        { date: '2023-01-01', status: 'P' },
        { date: '2023-01-02', status: 'L' },
        { date: '2023-01-03', status: 'H' },
        { date: '2023-01-04', status: 'P' },
        { date: '2023-01-05', status: 'A' },
        { date: '2023-01-06', status: 'A' },
        { date: '2023-01-07', status: 'A' },
        { date: '2023-01-08', status: 'A' },
        { date: '2023-01-09', status: 'A' },
        { date: '2023-01-10', status: 'A' },
        { date: '2023-01-11', status: 'P' },
        { date: '2023-01-12', status: 'L' },
        { date: '2023-01-13', status: 'H' },
        { date: '2023-01-14', status: 'P' },
        { date: '2023-01-15', status: 'A' },
        { date: '2023-01-16', status: 'A' },
        { date: '2023-01-17', status: 'A' },
        { date: '2023-01-18', status: 'A' },
        { date: '2023-01-19', status: 'A' },
        { date: '2023-01-20', status: 'A' },
        { date: '2023-01-21', status: 'P' },
        { date: '2023-01-22', status: 'L' },
        { date: '2023-01-23', status: 'H' },
        { date: '2023-01-24', status: 'P' },
        { date: '2023-01-25', status: 'A' },
        { date: '2023-01-26', status: 'A' },
        { date: '2023-01-27', status: 'A' },
        { date: '2023-01-28', status: 'A' },
        { date: '2023-01-29', status: 'A' },
        { date: '2023-01-30', status: 'A' },
        { date: '2023-01-31', status: '-' },
      ],
    },
  ];

  const numberOfAttendanceDays = Data[0].currentAttendance.length;

  const dynamicColumns = Array.from({ length: numberOfAttendanceDays }, (_, index) => {
    const attendanceItem = Data[0].currentAttendance[index];
    const formattedDate = new Date(attendanceItem.date).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
    });

    return {
      field: `day${index + 1}`,
      headerName: formattedDate,
      width: 60,
      renderCell: (params) => (
        <>
          {
            attendanceItem.status === 'P' ? <p className="text-green-800">P</p>
              : attendanceItem.status === 'L' ? <p className="text-yellow-800">L</p>
                : attendanceItem.status === 'H' ? <p className="text-yellow-500">H</p>
                  : attendanceItem.status === 'A' ? <p className="text-red-800">A</p>
                    : <p>-</p>
          }
        </>
      )
    };
  });

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Name",
      width: 100,
      renderCell: (params) => (
        <div>
          {params.row.name}
          <div className="text-blue-800 font-black">
            Dropout
          </div>
        </div>
      )
    },
    ...dynamicColumns,
    { field: "regNo", headerName: "Reg No", type: "number", width: 100 },
    { field: "batchTime", headerName: "Batch Time", width: 100 },
    { field: "course", headerName: "Course", width: 100 },
    { field: "mobileNo", headerName: "Mobile No", width: 100 },
    { field: "instructorName", headerName: "Teacher Name", width: 100 },
    {
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <div className="flex items-center" onClick={handleStatuschange}>
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
            <h1 className="text-lg">Total Absent</h1>
            <p className="text-2xl font-bold">25000</p>
            <span>Students</span>
          </Card>
          <Card className="p-5 text-center text-yellow-800">
            <h1 className="text-lg">Total Late</h1>
            <p className="text-2xl font-bold">25000</p>
            <span>Students</span>
          </Card>
          <Card className="p-5 text-center text-green-800">
            <h1 className="text-lg">Total Present</h1>
            <p className="text-2xl font-bold">25000</p>
            <span>Students</span>
          </Card>
          <Card className="p-5 text-center text-yellow-500">
            <h1 className="text-lg">Total on Holiday</h1>
            <p className="text-2xl font-bold">25000</p>
            <span>Students</span>
          </Card>
        </div>
        <div>
          <div className="grid grid-cols-12">
            {months.map((month) => (
              <button
                key={month}
                className={`flex-1 p-4 ${activeMonth === month ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                  }`}
                onClick={() => handleMonthChange(month)}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 p-4 border">
          <div className="text-lg font-black">{`${activeMonth} Attendance`}</div>
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

export default AllAttendance;
