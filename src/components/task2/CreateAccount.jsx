import { message } from "antd";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Step1 from "./_components/Step1";
import Step2 from "./_components/Step2";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxIdNumber: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset form data to initial state on mount
    setFormData(initialFormData);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    // Step 1 validation
    if (activeStep === 1) {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword,
      } = formData;
      if (!firstName) {
        message.error("First name cannot be empty");
        return;
      }
      if (!lastName) {
        message.error("Last name cannot be empty");
        return;
      }
      if (!email) {
        message.error("Email cannot be empty");
        return;
      }
      if (!phoneNumber) {
        message.error("Phone number cannot be empty");
        return;
      }
      if (!password) {
        message.error("Password cannot be empty");
        return;
      }
      if (password !== confirmPassword) {
        message.error("Passwords do not match");
        return;
      }
      // Move to next step if validation passes
      setActiveStep(2);
    }

    // Step 2 validation
    if (activeStep === 2) {
      const {
        brandName,
        brandType,
        streetAddress,
        city,
        zipCode,
        taxIdNumber,
      } = formData;
      if (!brandName) {
        message.error("Brand name cannot be empty");
        return;
      }
      if (!brandType) {
        message.error("Brand type cannot be empty");
        return;
      }
      if (!streetAddress) {
        message.error("Street address cannot be empty");
        return;
      }
      if (!city) {
        message.error("City cannot be empty");
        return;
      }
      if (!zipCode) {
        message.error("Zip code cannot be empty");
        return;
      }
      if (!taxIdNumber) {
        message.error("Tax ID number cannot be empty");
        return;
      }

      // Generate a unique ID for the submission
      const id = Date.now();

      // Store formData in localStorage with the unique ID
      const savedData = { id, ...formData };
      localStorage.setItem(`formData_${id}`, JSON.stringify(savedData));

      console.log("Form Submitted with data: ", savedData);

      // Reset the form to initial state
      setFormData(initialFormData);
      setActiveStep(1); // Optionally, reset the step to 1
      message.success("Form submitted successfully!");
    }
  };

  const goPreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="wave-image-cover h-full w-full flex flex-col items-center justify-center gap-3 space-y-2">
      <header className="flex flex-row items-center w-full max-w-4xl justify-between h-[5%] max-[540px]:h-[10%] px-2">
        <span className=" font-medium text-white cursor-pointer">Logo</span>
        <span className="text-lg font-medium text-white ">
          Create New Account
        </span>
        <span className="font-medium text-white cursor-pointer">
          Contact Us
        </span>
      </header>
      {/* Tabs and Form Container */}
      <div className="bg-white rounded-3xl w-full max-w-4xl h-3/4 max-[540px]:h-[80%] shadow-md">
        {/* Tabs */}
        <div className="grid grid-cols-3 mb-4 h-14 bg-[#EDF0FF] rounded-t-3xl">
          {/* Step 1 Tab - Your Profile */}
          <div
            className={`flex items-center justify-center bg-blue-500 text-white cursor-pointer ${
              activeStep === 1
                ? "active-account-profile-tab"
                : "inacive-tab-profile"
            }`}
            onClick={() => setActiveStep(1)}
          >
            <div className="rounded-full w-5 h-5 flex items-center text-sm justify-center font-semibold bg-white text-blue-500">
              1
            </div>
            <span className="ml-2 text-lg">Your Profile</span>
          </div>

          {/* Step 2 Tab - Business Information */}
          <div
            className={`flex items-center justify-center cursor-pointer ${
              activeStep === 2
                ? "bg-blue-500 text-white active-account-business-tab"
                : ""
            } `}
            onClick={() => setActiveStep(2)}
          >
            <div
              className={`rounded-full w-5 h-5 flex items-center text-sm justify-center font-semibold  ${
                activeStep === 2
                  ? "bg-white text-blue-500"
                  : "text-[#EDF0FF] bg-[#94a6da]"
              }`}
            >
              2
            </div>
            <span
              className={`ml-2  text-lg  ${
                activeStep === 2 ? "text-white " : "text-[#94a6da]"
              }`}
            >
              Business Information
            </span>
          </div>

          {/* Additional Users - Inactive */}
          <div className="flex items-center justify-center inactive-last-tab">
            <div className="rounded-full w-5 h-5 flex items-center text-sm justify-center font-semibold text-[#EDF0FF] bg-[#94a6da]">
              3
            </div>
            <span className="ml-2 text-lg text-[#94a6da]">
              Additional Users
            </span>
          </div>
        </div>

        {/* Step and Form */}
        {activeStep === 1 && (
          <Step1 formData={formData} onChange={handleInputChange} />
        )}
        {activeStep === 2 && (
          <Step2 formData={formData} onChange={handleInputChange} />
        )}
      </div>
      <div className="h-[10%] w-full max-w-4xl flex items-center justify-between px-2">
        <button
          className="text-[#2e71ab] font-medium"
          onClick={() => navigate("/create-project")}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
          Task 1
        </button>
        <div className="space-x-2">
          {activeStep > 1 && (
            <button
              className="bg-white text-[#6371ef] hover:bg-[#6371ef] border border-[#6371ef] hover:text-white font-medium px-6 py-2 rounded-lg"
              onClick={goPreviousStep}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
              Previous Step
            </button>
          )}
          <button
            className="bg-[#7580EA] hover:bg-[#6371ef] text-white font-medium px-6 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            {activeStep === 2 ? "Submit" : "Next step"}
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
