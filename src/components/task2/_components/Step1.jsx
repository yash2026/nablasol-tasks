import React from "react";
import { Input } from "antd";

const Step1 = ({ onChange, formData }) => {
  return (
    <div className="px-20 max-[540px]:px-4">
      {/* Step and Description */}
      <h3 className="text-center text-xl font-medium text-gray-500">Step 1</h3>
      <h4 className="text-center text-2xl font-medium mb-1 text-gray-700">
        Your Profile
      </h4>
      <p className="text-center text-gray-500 mb-8 text-sm ">
        Enter the login information for your account. You will <br />
        be able to create additional users after registering.
      </p>

      {/* Custom Form */}
      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="font-medium text-gray-700 mb-1 inline-block">
            First Name<span className="text-[#418dde] text-sm">*</span>
          </label>
          <Input
            placeholder="Input Your First Name"
            value={formData.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="font-medium text-gray-700 inline-block mb-1">
            Last Name<span className="text-[#418dde] text-sm">*</span>
          </label>
          <Input
            placeholder="Input Your Last Name"
            value={formData.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-medium text-gray-700 inline-block mb-1">
            Email<span className="text-[#418dde] text-sm">*</span>
          </label>
          <Input
            placeholder="Input Your Email"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="font-medium text-gray-700 inline-block mb-1">
            Phone Number<span className="text-[#418dde] text-sm">*</span>
          </label>
          <Input
            placeholder="Input Your Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => onChange("phoneNumber", e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="font-medium text-gray-700 inline-block mb-1">
            Password<span className="text-[#418dde] text-sm">*</span>
          </label>
          <Input.Password
            placeholder="Create Password"
            value={formData.password}
            onChange={(e) => onChange("password", e.target.value)}
            required
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="font-medium text-gray-700 inline-block mb-1">
            Confirm Password<span className="text-[#418dde] text-sm">*</span>
          </label>
          <Input.Password
            placeholder="Confirm Your Password"
            value={formData.confirmPassword}
            onChange={(e) => onChange("confirmPassword", e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
