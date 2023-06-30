import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Loader from "../../Components/Loader";
import { useNavigate } from "react-router-dom";
import AdminRoles from "./AdminRoles";
import BackOfficeRoles from "./BackOfficeRoles";

const Roles = ({ auth }) => {
  const [activeTab, setActiveTab] = useState("admin");
  const [loader, setLoader] = useState(false);
  const data = [
    {
      label: "Admin Roles",
      value: "admin",
      desc: <AdminRoles />,
    },
    {
      label: "Back Office Roles",
      value: "back",
      desc: <BackOfficeRoles />,
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      {loader ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <section className=" p-2 sm:p-5 md:p-10 ">
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-none mx-auto"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={activeTab === value ? "text-blue-500" : ""}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel
                    key={value}
                    value={value}
                    className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-none mx-auto"
                  >
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </section>
        </>
      )}
    </>
  );
};

export default Roles;
