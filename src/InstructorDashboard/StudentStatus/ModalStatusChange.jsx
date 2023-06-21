import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import { toast } from "react-toastify";

const ModalStatusChange = ({ open, handleOpen }) => {
  const [regno, setRegno] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[20%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          Change Status
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form className="w-full px-5 sm:px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6"></div>
            {/* Regno */}
            <div className="w-full px-3 mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="regno"
              >
                Regno
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="regno"
                id="regno"
                type="number"
                placeholder="76556"
                value={regno}
                onChange={(e) => {
                  setRegno(e.target.value);
                }}
              />
            </div>
            {/* NAme */}
            <div className="w-full px-3 mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="name"
                id="name"
                type="text"
                placeholder="John"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            {/* Status */}
            <div className="w-full px-3 mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Choose Status
              </label>
              <select
                className="px-2 py-2"
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Choose Status</option>
                <option value="active">Active</option>
                <option value="inActive">InActive</option>
                <option value="completed">Completed</option>
                <option value="break">Break</option>
              </select>
            </div>
            <input
              type="submit"
              className="p-2 bg-[var(--theme-color)] rounded-lg text-white hover:bg-[var(--secondary-color)] cursor-pointer transition-all"
            />
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
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalStatusChange;
