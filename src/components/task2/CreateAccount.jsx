import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Form } from "antd";
import React from "react";

const CreateAccount = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
    // Submit logic
  };
  return (
    <div className="wave-image-cover h-full w-full flex flex-col items-center justify-center gap-3">
      <header className="flex flex-row items-center w-full max-w-4xl justify-between">
        <span className=" font-medium text-white cursor-pointer">Logo</span>
        <span className="text-lg font-medium text-white ">
          Create New Account
        </span>
        <span className="font-medium text-white cursor-pointer">
          Contact Us
        </span>
      </header>
      {/* Tabs and Form Container */}
      <div className="bg-white rounded-3xl w-full max-w-4xl h-3/4 p-8 shadow-md">
        {/* Tabs */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex">
            <div className="rounded-full bg-blue-500 w-8 h-8 flex items-center justify-center text-white font-semibold">
              1
            </div>
            <span className="ml-2 font-medium text-lg text-blue-500">
              Your Profile
            </span>
          </div>
          <div className="flex">
            <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center text-white font-semibold">
              2
            </div>
            <span className="ml-2 font-medium text-lg text-gray-300">
              Business Information
            </span>
          </div>
          <div className="flex">
            <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center text-white font-semibold">
              3
            </div>
            <span className="ml-2 font-medium text-lg text-gray-300">
              Additional Users
            </span>
          </div>
        </div>

        {/* Step and Description */}
        <h3 className="text-center text-xl font-semibold mb-4">Step 1</h3>
        <h4 className="text-center text-2xl font-bold mb-4">Your Profile</h4>
        <p className="text-center text-gray-500 mb-8">
          Enter the login information for your account. You will be able to
          create additional users after registering.
        </p>

        {/* Form */}
        <Form layout="vertical" onFinish={onFinish} className="space-y-6">
          {/* Name and Last Name Fields */}
          <div className="grid grid-cols-2 gap-6">
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                { required: true, message: "Please enter your First Name" },
              ]}
            >
              <Input placeholder="Input Your First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                { required: true, message: "Please enter your Last Name" },
              ]}
            >
              <Input placeholder="Input Your Last Name" />
            </Form.Item>
          </div>

          {/* Email and Phone Number Fields */}
          <div className="grid grid-cols-2 gap-6">
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please enter your Email" }]}
            >
              <Input placeholder="Input Your Email" />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[
                { required: true, message: "Please enter your Phone Number" },
              ]}
            >
              <Input placeholder="Input Your Phone Number" />
            </Form.Item>
          </div>

          {/* Password and Confirm Password Fields */}
          <div className="grid grid-cols-2 gap-6">
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your Password" },
              ]}
            >
              <Input.Password placeholder="Create Password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                { required: true, message: "Please confirm your Password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Your Password" />
            </Form.Item>
          </div>
        </Form>
      </div>
      <div className="h-[10%] w-full max-w-4xl flex items-center justify-between">
        <button className="text-[#2e71ab] font-medium">
          <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
          Back to login
        </button>
        <button className="bg-[#7580EA] hover:bg-[#6371ef] text-white font-medium px-6 py-2 rounded-lg">
          Next step
          <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
