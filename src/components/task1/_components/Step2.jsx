import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";

const Step2 = ({ formData, setFormData }) => {
  const { Option } = Select;
  const [projectType, setProjectType] = useState(
    formData.projectType || "time-and-materials"
  );
  const [hourlyRate, setHourlyRate] = useState(formData.hourlyRate || "");
  const [budget, setBudget] = useState(formData.budget || "");

  // Array to store project type options
  const projectTypes = [
    { value: "time-and-materials", label: "Time & Materials" },
    { value: "fixed-fee", label: "Fixed Fee" },
    { value: "non-billable", label: "Non-Billable" },
  ];

  useEffect(() => {
    // Update the formData when local states change
    setFormData((prevData) => ({
      ...prevData,
      projectType,
      hourlyRate,
      budget,
    }));
  }, [projectType, hourlyRate, budget, setFormData]);

  return (
    <div>
      <div className="grid grid-cols-3 mb-6 rounded-lg">
        {projectTypes.map((type, index) => (
          <button
            key={type.value}
            className={`px-4 py-2.5 text-xs font-medium transition-colors  duration-200 ${
              projectType === type.value
                ? "bg-[#3B8EF4] text-white"
                : "bg-gray-100 text-gray-700 border border-gray-300"
            } ${
              index === 0 ? "rounded-l-lg" : "" // Apply rounded left to the first button
            } ${
              index === projectTypes.length - 1 ? "rounded-r-lg" : "" // Apply rounded right to the last button
            }`}
            onClick={() => setProjectType(type.value)}
          >
            {type.label}
          </button>
        ))}
      </div>

      {projectType && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex flex-col items-start mb-4 gap-0.5">
              <label className="block text-sm font-medium">Hourly</label>
              <span className="text-xs text-gray-500">
                We need hourly rates to track your project's billable amount.
              </span>
            </div>
            <div className="flex flex-row w-full gap-2">
              <Select
                placeholder="Project Hourly Rate"
                className="w-1/2 "
                value={hourlyRate}
                onChange={setHourlyRate}
              >
                <Option value="rate1">Rate 1</Option>
                <Option value="rate2">Rate 2</Option>
              </Select>
              <Input
                placeholder="₹ 12,678.00"
                className="w-1/4  inline"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col items-start mb-4 gap-0.5">
              <label className="block text-sm font-medium">Budget</label>
              <span className="text-xs text-gray-500">
                We need nourly rates to track your project's billable amount.
              </span>
            </div>
            <Select
              placeholder="Hours per Person"
              className="w-1/2 mb-2"
              value={budget}
              onChange={setBudget}
            >
              <Option value="5">5</Option>
              <Option value="10">10</Option>
            </Select>
          </div>

          <div>
            <div className="flex items-center flex-row">
              <input type="checkbox" className="mr-1" />

              <span className="text-xs  text-gray-500">
                Budget reset every month
              </span>
            </div>

            <div className="text-wrap">
              <input type="checkbox" className="mr-1 inline" />
              <span className="text-xs mr-1  text-gray-500 w-[-webkit-fill-available]">
                Send email alerts if project exceeds
              </span>
              <Input
                placeholder="number"
                className="w-12 px-1 inline text-xs mr-1 "
              />
              <span className="text-xs text-gray-500 ">% of budget</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step2;
