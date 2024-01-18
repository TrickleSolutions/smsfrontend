import React, { useState } from 'react'
import {
    DataGrid,
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarFilterButton,
    GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import Loader from '../../Components/Loader';
import { MdPendingActions } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { GiCash } from "react-icons/gi";
import { Button } from '@material-tailwind/react';





const BalanceReport = () => {

    const [loader, setLoader] = useState(false);

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


    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 100,
            // renderCell: (params) => (
            //     <div className="flex justify-center">{params.row.id + 1}</div>
            // ),
        },
        {
            field: "name",
            headerName: "Name",
            width: 100,
        },
        {
            field: "regNo",
            headerName: "Reg. No.",
            width: 100,
        },
        {
            field: "doj",
            headerName: "DOJ",
            type: "text",
            width: 100,
        },
        {
            field: "batchSlot",
            headerName: "Batch Slot",
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
            width: 120,
        },
        {
            field: "lastMonthDue",
            headerName: "Last Month Due",
            width: 100,

        },
        {
            field: "thisMonthFee",
            headerName: "This Month Fee",
            width: 100,
        },
        {
            field: "feeDate",
            headerName: "Fee Date",
            width: 100,
            // renderCell: (params) => (
            //     <div className="flex justify-center">
            //         <Button onClick={() => handleDocumentOpen(params.row)} size="sm">
            //             View
            //         </Button>
            //     </div>
            // ),
        },
        {
            field: "thisMonthPaid",
            headerName: "This Month Paid",
            width: 100
        },
        {
            field: "totalDue",
            headerName: "Total Due",
            width: 100,
        },
        {
            field: "mobileNo",
            headerName: "Mobile No.",
            width: 100,
        },
        {
            field: "teacherName",
            headerName: "Instructor Name",
            width: 100,
        },
        {
            field: "status",
            headerName: "Status",
            width: 100,
        }
    ];


    const NeedData = [
        {
            id: 1,
            name: 'Ram',
            regNo: '32653',
            doj: '20 Dec 2023',
            batchSlot: 'Evening',
            course: 'O Level',
            batchTime: '5 PM to 6 PM',
            lastMonthDue: '0',
            thisMonthFee: '0',
            feeDate: '01 Jan',
            thisMonthPaid: '0',
            totalDue: '0',
            mobileNo: '8080900400',
            teacherName: "Komal verma",
            status: 'Running'
        },
        {
            id: 2,
            name: 'Ram',
            regNo: '32653',
            doj: '20 Dec 2023',
            batchSlot: 'Evening',
            course: 'O Level',
            batchTime: '5 PM to 6 PM',
            lastMonthDue: '0',
            thisMonthFee: '0',
            feeDate: '01 Jan',
            thisMonthPaid: '0',
            totalDue: '0',
            mobileNo: '8080900400',
            teacherName: "Komal verma",
            status: 'Running'
        }
    ]

    return (
        <>
            <div className="mt-5 p-5 ml-auto  bg-[#f5f6fa]">

                <div className='flex justify-around items-center'>
                    <Button>Divyanshi Singh</Button>
                    <Button variant='outlined'>Komal Verma</Button>
                    <Button variant='outlined'>Anuj</Button>
                    <Button variant='outlined'>Mukesh</Button>
                    <Button variant='outlined'>Anuj</Button>
                </div>
                <div className="flex justify-around flex-wrap my-10">
                    <div className="m-3 flex items-center px-5 py-7 sm:py-10 text-orange-500 rounded-lg shadow-xl hover:-translate-y-2 transition">
                        <MdPendingActions className='w-16 h-16' />
                        <div className="text-center">
                            <div className=" text-3xl">0</div>
                            <div className="p-2 text-[var(--secondary-color)] sm:text-2xl font-semibold">
                                Last Month Due
                            </div>
                        </div>
                    </div>
                    <div className="m-3 flex items-center w-fit px-5 py-7 sm:py-10 text-orange-500 rounded-lg shadow-xl hover:-translate-y-2 transition">
                        <LiaCashRegisterSolid className='w-16 h-16' />
                        <div className="text-center">
                            <div className=" text-3xl">0</div>
                            <div className="p-2 text-[var(--secondary-color)] sm:text-2xl font-semibold">
                                This Month Fee
                            </div>
                        </div>
                    </div>
                    <div className="m-3 flex items-center w-fit px-5 py-7 sm:py-10 text-green-500 rounded-lg shadow-xl hover:-translate-y-2 transition">
                        <BsCash className='w-16 h-16' />

                        <div className="text-center">
                            <div className=" text-3xl">0</div>
                            <div className="p-2 text-[var(--secondary-color)] sm:text-2xl font-semibold">
                                This Month Paid
                            </div>
                        </div>
                    </div>
                    <div className="m-3 flex items-center w-fit px-5 py-7 sm:py-10 text-red-500 rounded-lg shadow-xl hover:-translate-y-2 transition">
                        <GiCash className='w-16 h-16' />

                        <div className="text-center">
                            <div className=" text-3xl">0</div>
                            <div className="p-2 text-[var(--secondary-color)] sm:text-2xl font-semibold">
                                Total Due
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <h2 className="text-2xl font-bold text-[var(--secondary-color)] ">
                        Balance Report
                    </h2>
                </div>

                {/* Student Table */}
                <div className="my-10">
                    <div className=" ">
                        {loader ? (
                            <div className="w-full h-[90vh] flex justify-center items-center">
                                <Loader />
                            </div>
                        ) : (
                            <div className="relative overflow-x-scroll">
                                <DataGrid
                                    rows={NeedData || []}
                                    columns={columns}
                                    components={{ Toolbar: CustomToolbar }}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                pageSize: 5,
                                            },
                                        },
                                        // filter: {
                                        //     filterModel: {
                                        //         items: [
                                        //             {
                                        //                 field: "status",
                                        //                 operatorValue: "contains",
                                        //                 value: "active",
                                        //             },
                                        //         ],
                                        //     },
                                        // }
                                    }}
                                    pageSizeOptions={[5, 10, 25]}
                                    checkboxSelection
                                    disableRowSelectionOnClick
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div div className="bg-[var(--theme-color)]">
                <h1 className="font-extrabold text-sm text-center text-white px-2 py-3">
                    &#169; 2023 SMS Education | All Rights Reserved
                </h1>
            </div>
        </>
    )
}

export default BalanceReport