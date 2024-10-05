import React, { useState } from "react";
import { Button, message } from "antd"; // Using Ant Design components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Step1 from "./_components/Step1";
import Step2 from "./_components/Step2";
import Step4 from "./_components/Step4";
import Step3 from "./_components/Step3";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    projectName: "",
    client: "",
    dates: [],
    projectType: "time-and-materials",
    hourlyRate: "",
    budget: "",
    selectedView: "",
    selectedOption: "",
  });

  // Steps data
  const steps = [
    {
      title: "Create a project",
      content: <Step1 formData={formData} setFormData={setFormData} />,
    },
    {
      title: "Project type",
      content: <Step2 formData={formData} setFormData={setFormData} />,
      subTitle: "Don't panic - You can also customize this types in settings",
    },
    {
      title: "Select a view",
      content: <Step3 formData={formData} setFormData={setFormData} />,
      subTitle: "You can also customize this views in settings",
    },
    {
      title: "Who can manage projects",
      content: <Step4 formData={formData} setFormData={setFormData} />,
      subTitle:
        "Don't panic - You can also customize this permission in settings",
    },
  ];

  // Navigate to next step
  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  // Navigate to previous step
  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Validation check
    if (
      !formData.projectName ||
      !formData.client ||
      !formData.dates ||
      !formData.budget ||
      !formData.selectedView ||
      !formData.selectedOption
    ) {
      message.error("Fields cannot be empty.");
      return; // Stop submission if validation fails
    }
    const projectId = `project-${Date.now()}`;
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = [...storedProjects, { id: projectId, ...formData }];

    // Store the updated project list in local storage
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    console.log("Form data submitted:", formData);
    // Display success message
    message.success("Project created successfully!");

    // Reset the form data
    setFormData({
      projectName: "",
      client: "",
      dates: [],
      projectType: "time-and-materials",
      hourlyRate: "",
      budget: "",
      selectedView: "",
      selectedOption: "",
    });

    // Navigate back to step 1
    setCurrentStep(0);
  };

  return (
    <div className="flex flex-col py-5 px-8 bg-white rounded-lg shadow-lg max-w-md w-full max-h-[80%] max-[720px]:max-h-full h-full ">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold ">{steps[currentStep].title}</h2>
        {steps[currentStep]?.subTitle && (
          <span className="text-xs text-gray-500">
            {steps[currentStep].subTitle}
          </span>
        )}
      </div>
      {/* Render the current step's content */}
      <div className="my-6 flex-grow">{steps[currentStep].content}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          disabled={currentStep === 0}
          onClick={prev}
          icon={<FontAwesomeIcon icon={faArrowLeft} />}
          className="px-2"
        >
          Back
        </Button>
        <Button
          type="primary"
          onClick={currentStep === steps.length - 1 ? handleSubmit : next}
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
        <Button
          type="button"
          color="default"
          variant="solid"
          onClick={() => navigate("/create-account")}
        >
          Task2
        </Button>
      </div>

      {/* Step Indicator */}
      <div className="flex justify-center mt-4">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-2 mx-0.5 rounded-full ${
              index === currentStep
                ? "bg-gray-600 w-4" // Active step
                : "bg-gray-300 w-2" // Inactive steps
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateProject;
