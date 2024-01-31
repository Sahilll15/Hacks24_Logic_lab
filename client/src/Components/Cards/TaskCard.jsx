import React, { useEffect, useState } from 'react';
import { CiImageOn } from 'react-icons/ci';
import { IoIosArrowDropdown } from "react-icons/io";
import axios from 'axios'


const TaskCard = ({ tasks }) => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [selectedOption, setSelectedOption] = useState(''); // State to hold selected option

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value); // Update selected option when dropdown changes
  };

  // const updateTask = async () => {
  //   try {
  //     const response = await axios.post(`http://localhost:4000/api/v1/task/update/${taskId}`, {
  //       title: title,
  //       description: description,
  //       priority: priority,
  //       budget: budget
  //     }, {
  //       headers: {
  //         'Authorization': `Bearer ${localStorage.getItem('auth')}`
  //       }
  //     })

  //     console.log(response)

  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }



  useEffect(() => {
    console.log(tasks)
  }, [tasks])



  return (
    <div className='bg-gray-100'>
      <div className="task-card bg-blue-600 text-white overflow-hidden rounded-lg p-2 m-2">
        <table className="rounded-table w-full">
          <thead>
            <tr className="">
              <th className="border-r-2" style={{ width: "15%" }}>Work Title</th>
              <th className="border-r-2" style={{ width: "15%" }}>Contractor</th>
              <th className="border-r-2" style={{ width: "10%" }}>Status</th>
              <th className="border-r-2" style={{ width: "10%" }}>Priority</th>
              <th className="border-r-2" style={{ width: "15%" }}>Date</th>
              <th className="border-r-2" style={{ width: "15%" }}>Cost</th>
              <th className="border-r-2" style={{ width: "15%" }}>Quote</th>
              <th style={{ width: "20%" }}><CiImageOn /></th>
            </tr>
          </thead>
        </table>
      </div>
      {
        tasks.map((task) => (
          <div className="task-card bg-indigo-400 text-white overflow-hidden rounded-lg m-2" key={task._id}>
            <table className="rounded-table w-full">
              <thead>
                <tr className="">
                  <th className="border-r-2 p-2" style={{ width: "15%" }}>{task.title}</th>
                  <th className="border-r-2 p-2" style={{ width: "15%" }}>{task?.taskAssigned || 'No Contractor'}</th>
                  <th className="border-r-2 p-2 bg-green-500" style={{ width: "10%" }} onClick={openModal} >{task.status}</th>
                  <th className="border-r-2 p-2 bg-red-300" style={{ width: "10%" }}>{task.priority}</th>
                  <th className="border-r-2 p-2" style={{ width: "15%" }}>69/69/69</th>
                  <th className="border-r-2 p-2" style={{ width: "15%" }}>{task.budget || "Budget Not decided"}</th>
                  <th className="border-r-2 p-2" style={{ width: "15%" }}>1200</th>
                  <th style={{ width: "20%" }}><CiImageOn /></th>
                </tr>
              </thead>
            </table>
          </div>
        ))
      }

{isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded- w-80">
            <p onClick={closeModal}>close</p>

            <form   className="my-form bg-gray-200 p-4 rounded-md">
      <div className="mb-4">
        <label htmlFor="priority" className="block text-sm font-medium text-gray-600">
          Select Priority:
        </label>
        <select
          id="priority"
          name="priority"
          value={selectedOption}
          onChange={handleSelectChange}
          className="form-select mt-1 p-2 border rounded-md w-full"
        >
          <option value="" disabled>Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
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

export default TaskCard;
