import React, { useEffect, useState } from "react";
import TaskCard from "../../Components/Cards/TaskCard";
import { RiUserAddFill } from "react-icons/ri";
import { MdAddTask } from "react-icons/md";
import TaskForm from "../../Components/Designer/Form/TaskForm";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PredictionForm from "../../Components/Designer/Form/PredictionForm";
import CircularProgressBar from "../../Components/Charts/ProgessBar";

const RoomStatus = ({ percentage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPredictionModalOpen, setIsPredictionModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [percentageofcompletion, setPercentage] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [predictionModelOpen, setPredictionModelOpen] = useState(false);
  const [newModalOpen, setNewModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [apiResponse, setApiResponse] = useState(null); // State to store API response
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null); // State to store the URL of the uploaded image


  const { roomId } = useParams();
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadedImageUrl(URL.createObjectURL(event.target.files[0])); // Create URL for the uploaded file
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      // Send the formData to the API endpoint using Axios or any other HTTP client library
      // Example:
      const response = await axios.post(
        "http://localhost:4000/generate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if(response.status === 200){
        setApiResponse(response.data.caption);
      }
      else{
        alert("Api failed successfully")
      }

      

      console.log(response);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const openPredictionModel = () => {
    setPredictionModelOpen(true);
  };

  const closePredictionModel = () => {
    setPredictionModelOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openNewModal = () => {
    setNewModalOpen(true);
  };

  const closeNewModal = () => {
    setNewModalOpen(false);
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/task/get/room/${roomId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth")}`,
          },
        }
      );

      setTasks(response.data.tasks);
      setPercentage(Math.round(response.data.percentageOfCompletion));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [roomId, trigger]);

  return (
    <div>
      <div className="m-2 p-4 text-2xl">
        Drawing Room Status
        <button
          type="button"
          className="btn btn-outline-primary border-2 p-2 rounded-lg ml-4"
          onClick={() => navigate(`/customerdashboard/${roomId}`)}
        >
          DashBoard
        </button>
        <div className="flex text-base mt-4 ml-8 gap-5">
          <div
            className="flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={openModal}
          >
            Add Task
          </div>
          <div className="flex text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Assign Contractor
          </div>
          <div
            onClick={openPredictionModel}
            className="flex text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Predict Cost
          </div>
          <div
            onClick={openNewModal}
            className="flex text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            New Modal
          </div>
        </div>
      </div>

      <TaskCard tasks={tasks} fetchTasks={fetchTasks} roomId={roomId} />

      <div>
        {predictionModelOpen && (
          <PredictionForm
            setTriggerL={setTrigger}
            closeModal={closePredictionModel}
          />
        )}
      </div>

      <div>
        {isModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <TaskForm
              setTriggerL={setTrigger}
              closeModal={closeModal}
              roomId={roomId}
              percentage={percentageofcompletion}
            />
          </div>
        )}
      </div>

      <div>
        {newModalOpen && (
          <div className="fixed z-10 bg-blur mt-32 m-16 inset-0 overflow-y-auto">
            {/* Your new modal content here */}
            <div className="bg-gray-200 mt-40 p-4 rounded-lg">
              <h1 className="text-xl font-semibold mb-4">New Modal Content</h1>
              <input type="file" onChange={handleFileChange} />
              <button
                onClick={handleFileUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Upload File
              </button>
              <button
                onClick={closeNewModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
              >
                Close Modal
              </button>
            </div>
            {apiResponse && (
          <div className="fixed z-10 bg-blur mt-32 m-16 inset-0 overflow-y-auto">
            <div className="bg-gray-200 mt-40 p-4 rounded-lg">
              <h1 className="text-xl font-semibold mb-4">API Response</h1>
              <div className="bg-white text-black m-2 p-2 rounded-lg">

                <div className="flex  flex-row gap-8">
                <span className="my-6 max-w-1/2">
                <img src={uploadedImageUrl} alt="Uploaded" className=" h-auto" />
                </span>
                
                <div>
                <p className="mt-8">{apiResponse}</p>
                </div>
                </div>

              </div>
            </div>
          </div>
        )}
          </div>
        )}

        
      </div>

      {/* <CircularProgressBar value={percentageofcompletion} /> */}
    </div>
  );
};

export default RoomStatus;
