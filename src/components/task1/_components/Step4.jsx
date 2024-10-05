import {
  faCircleUser,
  faList,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Step4 = ({ formData, setFormData }) => {
  const handleSelectOption = (option) => {
    setFormData({ ...formData, selectedOption: option });
  };
  return (
    <div className="flex flex-col gap-2 ">
      <div
        className={`flex flex-row gap-3 border items-center p-3 rounded-lg bg-[#FCFCFC] cursor-pointer ${
          formData.selectedOption === "Everyone"
            ? "border-[#3E8DF4]"
            : "border-gray-300"
        }`}
        onClick={() => handleSelectOption("Everyone")}
      >
        <FontAwesomeIcon
          icon={faList}
          className="rotate-90 h-6 text-gray-400 m-2"
        />
        <div className="flex flex-col">
          <h3 className="font-medium">Everyone</h3>
          <p className="text-xs">
            All users can now to see it, but guests cannot access the projects
          </p>
        </div>
      </div>
      <div
        className={`flex flex-row gap-3 border items-center p-3 rounded-lg bg-[#FCFCFC] cursor-pointer ${
          formData.selectedOption === "Admins"
            ? "border-[#3E8DF4]"
            : "border-gray-300"
        }`}
        onClick={() => handleSelectOption("Admins")}
      >
        <FontAwesomeIcon
          icon={faCircleUser}
          className="h-6 text-gray-400 m-2"
        />

        <div className="flex flex-col">
          <h3 className="font-medium">Only Admin's</h3>
          <p className="text-xs">Only admins can manage everything</p>
        </div>
      </div>
      <div
        className={`flex flex-row gap-3 border items-center p-3 rounded-lg bg-[#FCFCFC] cursor-pointer ${
          formData.selectedOption === "Specific"
            ? "border-[#3E8DF4]"
            : "border-gray-300"
        }`}
        onClick={() => handleSelectOption("Specific")}
      >
        <FontAwesomeIcon icon={faUserGroup} className="h-5 text-gray-400 m-2" />

        <div className="flex flex-col">
          <h3 className="font-medium">Only to Specific people</h3>
          <p className="text-xs">
            Only some specific people can able to see it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step4;
