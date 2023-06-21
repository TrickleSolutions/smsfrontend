import { Button, Checkbox } from "@material-tailwind/react";
import React, { useState } from "react";
import ModalStatusChange from "./ModalStatusChange";

const StudentStatusTable = () => {
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
          <Button size="sm" onClick={handleOpen2}>
            Change
          </Button>
        </td>
        <ModalStatusChange open={open2} handleOpen={handleOpen2} />
      </tr>
    </>
  );
};

export default StudentStatusTable;
