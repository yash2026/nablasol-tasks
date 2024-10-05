import {
  faCheck,
  faChevronRight,
  faCircleQuestion,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import React from "react";

const Step2 = ({ formData, onChange }) => {
  return (
    <div className="px-20 h-full max-[540px]:px-4">
      {/* Step and Description */}
      <h3 className="text-center text-xl font-medium text-gray-500">Step 2</h3>
      <h4 className="text-center text-2xl font-medium text-gray-700">
        Business Information
      </h4>
      <p className="text-center text-gray-500 mb-2 text-sm ">
        Please, enter information about your company.
      </p>

      <div className=" overflow-y-auto h-[65%] rounded-b pb-6 max-[540px]:h-[75%]">
        {/* General Information Section */}
        <div className="mb-4">
          <h3 className=" font-medium text-blue-500 mb-1">
            GENERAL INFORMATION
          </h3>
          <div className="grid grid-cols-2 gap-2  gap-x-4">
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">
                Brand Name<span className="text-[#418dde] text-sm">*</span>
              </label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded-md"
                value={formData.brandName || ""}
                onChange={(e) => onChange("brandName", e.target.value)}
                placeholder="Input Your Brand Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">
                Brand Type<span className="text-[#418dde] text-sm">*</span>{" "}
                <Tooltip
                  placement="rightTop"
                  color="#272727"
                  title={`Local: Brands with distribution in 3 divisions or less OR
                  multiple divisions but a total of 150 stores or less.


                  National: Brands with distribution in 4 or more divisions or
                  in more than 150 stores.`}
                >
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    className="cursor-pointer"
                  />
                </Tooltip>
              </label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded-md"
                value={formData.brandType || ""}
                onChange={(e) => onChange("brandType", e.target.value)}
                placeholder="Select Type of Your Brand"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">
                Street Address<span className="text-[#418dde] text-sm">*</span>
              </label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded-md"
                value={formData.streetAddress || ""}
                onChange={(e) => onChange("streetAddress", e.target.value)}
                placeholder="Input Your Street Address"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">
                City<span className="text-[#418dde] text-sm">*</span>
              </label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded-md"
                value={formData.city || ""}
                onChange={(e) => onChange("city", e.target.value)}
                placeholder="Input City"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">
                Zip Code<span className="text-[#418dde] text-sm">*</span>
              </label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded-md"
                value={formData.zipCode || ""}
                onChange={(e) => onChange("zipCode", e.target.value)}
                placeholder="Input Zip Code"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">
                Tax ID Number<span className="text-[#418dde] text-sm">*</span>
              </label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded-md"
                value={formData.taxIdNumber || ""}
                onChange={(e) => onChange("taxIdNumber", e.target.value)}
                placeholder="Input Tax ID Number"
              />
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="mb-4">
          <h3 className="font-medium text-blue-500 mb-1">DOCUMENTS</h3>
          <p className="text-sm mb-1">
            Once the following documents are signed, you'll be ready to get
            started
          </p>
          <div className="flex flex-row gap-5 w-full mb-3">
            <div className="w-full p-2 border border-gray-300 rounded-md flex flex-row justify-between items-center gap-2">
              <input
                type="text"
                className="w-full text-sm"
                placeholder="Electronically sign the aggrement(s)"
              />
              <FontAwesomeIcon icon={faCheck} className="text-[#46b361] mr-2" />
            </div>
            <button className="w-9 h-9  text-white bg-[#7E85F0] rounded shadow-xl">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="flex flex-row gap-5 w-full">
            <div className="w-full p-2 border border-gray-300 rounded-md flex flex-row justify-between items-center gap-2">
              <input
                type="text"
                className="w-full text-sm"
                placeholder="Non-adult beverage Kroger market supplier waiver and release"
              />
              <FontAwesomeIcon icon={faXmark} className="text-[#cb4a4a] mr-2" />
            </div>
            <button className="w-9 h-9  text-white bg-[#7E85F0] rounded shadow-xl">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* COI PDF Upload Section */}
        <div>
          <h3 className="font-medium text-blue-500 mb-1">COI PDF UPLOAD</h3>
          <p className="text-sm mb-1">
            Once the following documents are signed, you'll be ready to get
            started
          </p>
          <div className="flex flex-row gap-5 w-full mb-3">
            <div className="w-full p-2 border border-gray-300 rounded-md flex flex-row justify-between items-center">
              <input
                type="text"
                className="w-full text-sm"
                placeholder="Electronically sign the aggrement(s)"
              />
              <FontAwesomeIcon icon={faCheck} className="text-[#46b361] mr-2" />
            </div>
            <button className="w-9 h-9  text-white bg-[#7E85F0] rounded shadow-xl">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
