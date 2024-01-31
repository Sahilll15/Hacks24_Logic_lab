import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import GreenButton from "../Buttons/GreenButton";

const LongCard = ({ name, id, desc, status, onclick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-9/12 mx-auto p-4 border mt-2 border-gray-300 bg-white rounded shadow-md">
      <h2 className="text-xl mt-1 mb-1 font-bold">
        {id} - {name}
      </h2>
      <h2>{desc}</h2>
      <div className="flex mt-1 justify-between">
        <span className="mt-1">Created: 12/11/24 11:50pm</span>
      </div>

      <div className="mt-1 flex justify-between">

        <GreenButton text="Mark as done" onClick={openModal} />
        <p>Rs <b className="text-green-500 font-semibold">12000</b></p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 bg-white p-8 rounded-md max-w-md">
            <div className="flex justify-end ">
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
            <h1 className="text-2xl font-semibold mb-4">
              Upload File and Text
            </h1>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="fileInput"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload File:
                </label>
                <input
                  type="file"
                  id="fileInput"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="textInput"
                  className="block text-sm font-medium text-gray-700"
                >
                  Text:
                </label>
                <textarea
                  id="textInput"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md resize-none"
                  placeholder="Enter text here..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LongCard;
