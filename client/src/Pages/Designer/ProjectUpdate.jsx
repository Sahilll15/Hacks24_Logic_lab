import React, { useState } from "react";
import TopCard from "../../Components/Cards/TopCard";
import { FaUser, FaEnvelope } from "react-icons/fa";

const ProjectUpdate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 p-4 min-h-screen rounded-md shadow-md relative">
      <div className="mb-4">
        <p className="text-2xl font-bold text-center">PROJECT NAME / TITLE</p>
      </div>

      <div>
      <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl ">
        <div class="md:flex">
          <div class="w-full p-3">
            <div class="relative">
              <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
              <input
                type=""
                id="default-search"
                placeholder="Search.."
                autoComplete="off"
                // onChange={(e) => setSearch(e.target.value)}
                class="bg-white h-10 w-full px-12 rounded-lg focus:outline-none border-2 border-gray-400 hover:border-blue-500 hover:border-4 hover:cursor-pointer"
                name="search"
                // value={search}
              />

             

            </div>
          </div>
        </div>
      </div>

      

    </div>


      <div className="mt-16 ml-8">
        <TopCard RoomName="Drawing Room" Contractors="aditya, karan, sahil" />
      </div>

      {/* Plus icon */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-12 h-12 fixed bottom-32 right-8 z-10"
        onClick={openModal}
      >
        <p className="text-2xl">+</p>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded- w-80">
            <p onClick={closeModal}>close</p>
           
            <form>
        <div className="mb-6 mt-4">
          <label htmlFor="username" className="text-gray-700 text-sm">
            <span className="flex items-center">
              <FaUser className="mr-2" />
              Room Name
            </span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="text-gray-700 text-sm">
            <span className="flex items-center">
              <FaEnvelope className="mr-2" />
              Description
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="priority" className="text-gray-700 text-sm">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-sm"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>


        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
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

export default ProjectUpdate;
