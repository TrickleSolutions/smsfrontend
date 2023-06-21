import { Button, Checkbox } from "@material-tailwind/react";
import React, { useState } from "react";

const ManageStudentTable = () => {
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(!open2);
  return (
    <>
      <tr class="bg-white border-b">
        <td class=" py-4">
          <Checkbox />
        </td>
        <td class="px-6 py-4 font-semibold text-black">Amit</td>
        <td class="px-6 py-4 hidden sm:table-cell max-w-xs">CCC</td>
        <td class="px-6 py-4 hidden sm:table-cell">523612</td>
        <td class="px-6 py-4 max-w-xs">Rejected</td>
        <td class="px-1 py-4">
          <div className="flex flex-col flex-wrap">
            <Button className="m-1 h-fit w-fit" size="sm" onClick={handleOpen2}>
              Approove
            </Button>
            <Button
              className="m-1 h-fit w-fit"
              size="sm"
              color="red"
              onClick={handleOpen2}
            >
              Reject
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ManageStudentTable;
