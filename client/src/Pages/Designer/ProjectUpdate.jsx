import React, { useEffect, useState } from "react";
import TopCard from "../../Components/Cards/TopCard";
import { FaUser, FaEnvelope } from "react-icons/fa";
import axios from 'axios'
import { useParams } from 'react-router-dom'


const ProjectUpdate = () => {

  const [rooms, setRooms] = useState([])
  const { projectId } = useParams();

  const fetchRoomsById = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/project/get-single/${projectId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth')}`
        }
      })

      console.log(response)
      setRooms(response.data.rooms)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchRoomsById()
  }, [projectId]);




  const [formData, setFormData] = useState({
    roomName: "",
    description: "",
    priority: "high",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using the formData state
    console.log("Form submitted:", formData);
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
      <div className="mt-16 ml-8 flex gap-4 flex-wrap">
        {
          rooms.map((room) => {
            return (
              <div className=" ">
                <TopCard
                  room={room}
                />
              </div>
            )
          })
        }
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
                <label htmlFor="roomName" className="text-gray-700 text-sm">
                  <span className="flex items-center">
                    <FaUser className="mr-2" />
                    Room Name
                  </span>
                </label>
                <input
                  type="text"
                  id="roomName"
                  name="roomName"
                  value={formData.roomName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="text-gray-700 text-sm">
                  <span className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
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
                  value={formData.priority}
                  onChange={handleChange}
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
    </div>
  );
};

export default ProjectUpdate;
