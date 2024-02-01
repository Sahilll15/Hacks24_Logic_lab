import React from "react";
import { BsPerson, BsCardText, BsTelephone, BsEnvelope } from "react-icons/bs";
import BlueButton from "../../Buttons/BlueButton";
import { useState } from "react";
import { useProject } from "../../../context/ProjectContext";
import { toast } from "react-toastify";

const NewProjectForm = ({closeModal}) => {



  const { createProject } = useProject();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    homeOwnerEmail: "",
    homeOwnerPhone: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      title: formData.title,
      description: formData.description,
      homeOwnerEmail: formData.homeOwnerEmail,
      homeOwnerPhone: formData.homeOwnerPhone,
      image: formData.image,
    };
  
    try {
      const res = await createProject(payload);
  
      console.log(res);
  
      if (res.status === 200) { // Assuming 201 is the status for a successful creation
        toast.success("Project created successfully!");
        closeModal();
      } else {
        toast.error("Failed to create project. Please try again.");
        closeModal()
      }
    } catch (error) {
      // console.error("Error creating project:", error);
      toast.error("An error occurred while creating the project. Please try again later.");
      closeModal()
    }
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white ">
      <h2 className="text-2xl font-semibold mb-6 text-center">Professional Form</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label htmlFor="title" className="text-sm font-medium text-gray-600">
            <BsCardText className="inline-block mr-2" />
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"

            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="homeOwnerEmail" className="text-sm font-medium text-gray-600">
            Home Owner's Email
          </label>
          <input
            type="email"
            id="homeOwnerEmail"
            name="homeOwnerEmail"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="homeOwnerPhone" className="text-sm font-medium text-gray-600">
            Home Owner's Phone
          </label>
          <input
            type="tel"
            id="homeOwnerPhone"
            name="homeOwnerPhone"
            pattern="[0-9]{10}"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="text-sm font-medium text-gray-600">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <BlueButton text="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default NewProjectForm;
