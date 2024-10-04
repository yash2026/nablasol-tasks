import React from "react";
import { Input, Button, DatePicker } from "antd"; // Using Ant Design components
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const Step1 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDatesChange = (dates) => {
    setFormData({ ...formData, dates });
  };

  const handleStartDateChange = (date) => {
    const formattedDate = date ? date.format("YYYY-MM-DD") : null;
    setFormData({
      ...formData,
      dates: [formattedDate, formData.dates?.[1] || null],
    });
  };

  const handleEndDateChange = (date) => {
    const formattedDate = date ? date.format("YYYY-MM-DD") : null;
    setFormData({
      ...formData,
      dates: [formData.dates?.[0] || null, formattedDate],
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <label className="mb-2 block font-medium text-sm">Project Name</label>
        <Input
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
          placeholder="Enter project name here"
          className="text-sm p-1.5"
        />
      </div>

      <div className="">
        <label className="mb-1 font-medium text-sm block">Client</label>
        <div className="flex flex-row items-center justify-around">
          <Input
            name="client"
            value={formData.client}
            onChange={handleChange}
            style={{ width: "calc(70%)" }}
            placeholder="Select a client"
            className="text-sm p-1.5"
          />{" "}
          <span className="mx-2 text-xs text-gray-500">Or</span>
          <Button className="text-sm h-[34px] px-4 text-gray-400">
            <FontAwesomeIcon icon={faPlus} />
            New Client
          </Button>
        </div>
      </div>

      <div>
        <label className="mb-1 font-medium text-sm block">Dates</label>
        <div className="flex space-x-1">
          <DatePicker
            placeholder="Start date"
            style={{ width: "100%" }}
            className="text-sm p-1.5"
            onChange={handleStartDateChange}
            value={formData.dates?.[0] ? moment(formData.dates[0]) : null}
          />{" "}
          <span>-</span>
          <DatePicker
            placeholder="End date"
            style={{ width: "100%" }}
            className="text-sm p-1.5"
            onChange={handleEndDateChange}
            value={formData.dates?.[1] ? moment(formData.dates[1]) : null}
          />
        </div>
      </div>

      <div>
        <label className="mb-1 font-medium text-sm block">Notes</label>
        <Input.TextArea
          placeholder="Optional"
          rows={3}
          name="notes" // Added name for the text area
          onChange={handleChange} // Added onChange to handle state
        />
      </div>
    </div>
  );
};

export default Step1;
