import React from "react";
import { BsPerson, BsCardText, BsLock, BsInfoCircle } from "react-icons/bs";
import BlueButton from "../Buttons/BlueButton";

const Addprojectform = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white ">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add Project details</h2>
      <form onSubmit={handleSubmit}>
       
        <div className="mb-4">
          <label htmlFor="title" className="text-sm font-medium text-gray-600">
            <BsPerson className="inline-block mr-2" />
            Project ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
   
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            <BsLock className="inline-block mr-2" />
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <BlueButton text="Submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default Addprojectform;
