import React from "react";
import { BsPerson, BsCardText, BsTelephone, BsEnvelope } from "react-icons/bs";
import BlueButton from "../../Buttons/BlueButton";

const NewProjectForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white ">
      <h2 className="text-2xl font-semibold mb-6 text-center">Professional Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="text-sm font-medium text-gray-600">
            <BsPerson className="inline-block mr-2" />
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="text-sm font-medium text-gray-600">
            <BsCardText className="inline-block mr-2" />
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="text-sm font-medium text-gray-600">
            <BsTelephone className="inline-block mr-2" />
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            pattern="[0-9]{10}"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            <BsEnvelope className="inline-block mr-2" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <BlueButton text="Submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default NewProjectForm;
