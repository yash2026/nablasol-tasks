import React from "react";

const Step3 = ({ formData, setFormData }) => {
  const handleSelectView = (view) => {
    setFormData({ ...formData, selectedView: view });
  };

  return (
    <div className="flex flex-row items-center justify-between gap-4">
      {/* List View */}
      <div
        className={`w-1/2 self-center cursor-pointer ${
          formData.selectedView === "List" ? "border-[#3E8DF4]" : ""
        }`}
        onClick={() => handleSelectView("List")}
      >
        <div
          className={`flex items-center justify-center border rounded-lg h-28 mb-2 ${
            formData.selectedView === "List"
              ? "border-[#3E8DF4]"
              : "border-gray-300"
          }`}
        >
          <img src="/list.svg" alt="List Icon" className="h-12" />
        </div>
        <p
          className={`text-center text-sm font-medium ${
            formData.selectedView === "List"
              ? "text-[#3E8DF4]"
              : "text-gray-700"
          }`}
        >
          List
        </p>
      </div>

      {/* Board View */}
      <div
        className={`w-1/2 self-center cursor-pointer ${
          formData.selectedView === "Board" ? "border-[#3E8DF4]" : ""
        }`}
        onClick={() => handleSelectView("Board")}
      >
        <div
          className={`flex items-center justify-center border rounded-lg h-28 mb-2 ${
            formData.selectedView === "Board"
              ? "border-[#3E8DF4]"
              : "border-gray-300"
          }`}
        >
          <img src="/icons8-columns-64.png" alt="Board Icon" className="h-12" />
        </div>
        <p
          className={`text-center text-sm font-medium ${
            formData.selectedView === "Board"
              ? "text-[#3E8DF4]"
              : "text-gray-700"
          }`}
        >
          Board
        </p>
      </div>
    </div>
  );
};

export default Step3;
