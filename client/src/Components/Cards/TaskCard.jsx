import React, { useEffect, useState } from 'react';
import { CiImageOn } from 'react-icons/ci';
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import axios from 'axios'
import FeedbackForm from '../../Pages/ExtraFeatres/Feedback';

const TaskCard = ({ tasks, fetchTasks }) => {

  const [ispriorityModalOpen, setIspriorityModalOpen] = useState(false);
  const [priority, setPriority] = useState(''); // State to hold selected option
  const [isstatusmodalOpen, setIsstatusmodalOpen] = useState(''); // State to hold selected option
  const [status, setStatus] = useState(''); // State to hold selected option
  const [isfeedbackModalOpen, setIsfeedbackModalOpen] = useState(false); // State to hold selected option

  const [activeTask, setActiveTask] = useState(null)

  const openpriorityModal = () => {
    setIspriorityModalOpen(true);
  };

  const closepriorityModal = () => {
    setIspriorityModalOpen(false);
  };

  const handlepriorityChange = (e) => {
    setPriority(e.target.value); // Update selected option when dropdown changes
  };

  const openstatusModal = () => {
    setIsstatusmodalOpen(true);
  };

  const closestatusModal = () => {
    setIsstatusmodalOpen(false);
  };

  const handlestatusChange = (e) => {
    setStatus(e.target.value); // Update selected option when dropdown changes
  };

  const openfeedbackModal = () => {
    setIsfeedbackModalOpen(true);
  };

  const closefeedbackModal = () => {
    setIsfeedbackModalOpen(false);
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


  const handleSubmitStatusChanged = async (e) => {
    e.preventDefault();
    console.log(status)
    console.log(activeTask)
    const response = await axios.put(`http://localhost:4000/api/v1/task/update/${activeTask}`, {

      status: status
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth')}`
      }
    })


    if (response.status === 200) {

      fetchTasks()
      closestatusModal()

    }
  }


  const handleSubmitPriorityChanged = async (e) => {
    e.preventDefault();
    console.log(priority)
    console.log(activeTask)
    const response = await axios.put(`http://localhost:4000/api/v1/task/update/${activeTask}`, {

      priority: priority
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth')}`
      }
    })


    if (response.status === 200) {

      fetchTasks()
      closepriorityModal()

    }
  }





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
              <th className="border-r-2" style={{ width: "13%" }}>Date</th>
              <th className="border-r-2" style={{ width: "15%" }}>Cost</th>
              <th className="border-r-2" style={{ width: "10%" }}>Quote</th>
              <th className="border-r-2" style={{ width: "5%" }}><CiImageOn /></th>
              <th className='' style={{ width: "20%" }}>Feedback </th>
            </tr>
          </thead>
        </table>
      </div>
      {
        tasks.map((task) => (
          <div className="task-card bg-indigo-400 text-white overflow-hidden rounded-lg px-2 m-2" key={task._id}>
            <table className="rounded-table w-full">
              <thead>
                <tr className="">
                  <th className="border-r-2 p-2" style={{ width: "15%" }}>{task.title}</th>
                  <th className="border-r-2 p-2" style={{ width: "15%" }}>{task?.taskAssigned || 'No Contractor'}</th>
                  <th className="border-r-2 p-2 bg-green-500 hover:text-black" style={{ width: "10%" }} accordion

                    onClick={() => {
                      console.log('auxclick', task._id)

                      setActiveTask(task._id)
                      openstatusModal()
                    }}
                  >{task.status}</th>
                  <th className="border-r-2 p-2 bg-red-300 hover:text-black" style={{ width: "10%" }} onClick={() => {
                    setActiveTask(task._id)
                    openpriorityModal()
                  }} >{task.priority}</th>
                  <th className="border-r-2 p-2" style={{ width: "13%" }}>69/69/69</th>
                  <th className="border-r-2 p-2" style={{ width: "15%" }}>{task.budget || "Budget Not decided"}</th>
                  <th className="border-r-2 p-2" style={{ width: "10%" }}>1200</th>
                  <th className="border-r-2 p-2" style={{ width: "5%" }}><CiImageOn /></th>
                  <th className='hover:text-black' style={{ width: "20%" }} onClick={openfeedbackModal}>Form</th>
                </tr>
              </thead>
            </table>
          </div>
        ))
      }

      {ispriorityModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded- w-80">
            <p onClick={closepriorityModal}>
              {/* <BsCrosshair/> */}
              {/* <Fa-xmark/>
               */}
              <FaXmark className='text-xl' />
              {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
              {/* <i class="fa-solid fa-xmark"></i> */}
            </p>

            <form className="my-form bg-gray-200 p-4 rounded-md" onSubmit={handleSubmitPriorityChanged}>
              <div className="mb-4">
                <label htmlFor="priority" className="block text-sm font-medium text-gray-600">
                  Select Priority:
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  onChange={handlepriorityChange}
                  className="form-select mt-1 p-2 border rounded-md w-full"
                >
                  <option value="" disabled>Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700" >
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {isstatusmodalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded- w-80">
            <p onClick={closestatusModal}>
              {/* <BsCrosshair/> */}
              {/* <Fa-xmark/>
               */}
              <FaXmark className='text-xl' />
              {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
              {/* <i class="fa-solid fa-xmark"></i> */}
            </p>

            <form className="my-form bg-gray-200 p-4 rounded-md" onSubmit={handleSubmitStatusChanged}>
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-600">
                  Select Status:
                </label>
                <select
                  id="status"
                  name="status"
                  value={status}
                  onChange={handlestatusChange}
                  className="form-select mt-1 p-2 border rounded-md w-full"
                >
                  <option value="" disabled>Select Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">Inprogress</option>
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

      {isfeedbackModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded- w-80">
            <p onClick={closefeedbackModal}>
              {/* <BsCrosshair/> */}
              {/* <Fa-xmark/>
               */}
              <FaXmark className='text-xl' />
              {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
              {/* <i class="fa-solid fa-xmark"></i> */}
            </p>

            <FeedbackForm />

          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
