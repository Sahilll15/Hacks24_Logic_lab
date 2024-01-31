import React, { useEffect } from 'react';
import { CiImageOn } from 'react-icons/ci';
import { IoIosArrowDropdown } from "react-icons/io";


const TaskCard = ({ tasks }) => {
  const optionsCompleted = ['Completed', 'In Progress'];
  const optionsHigh = ['Low', 'Medium', 'High'];

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

          <div className="task-card bg-indigo-400 text-white overflow-hidden rounded-lg m-2">
            <table className="rounded-table w-full">
              <thead>
                <tr className="">
                  <th className="border-r-2 p-2" style={{ width: "15%" }}>{task.title}</th>
                  <th className="border-r-2 p-2" style={{ width: "15%" }}>{task?.taskAssigned || 'No Contractor'}</th>
                  <th className="border-r-2 p-2 bg-green-500" style={{ width: "10%" }}>
                    <select className="appearance-none bg-transparent border-none w-full text-white focus:outline-none">
                      <IoIosArrowDropdown />
                      <option key={task.status} defaultValue={task.status} className='bg-gray-700' value={task.status}>{task.status}</option>

                      {optionsCompleted.map((option) => (
                        <option key={option} className='bg-gray-700' value={option}>{option}</option>
                      ))}
                    </select>
                  </th>
                  <th className="border-r-2  bg-red-300" style={{ width: "10%" }}>
                    <select className="appearance-none bg-transparent border-none w-full text-white p-2 focus:outline-none">
                      <option key={task.priority} defaultValue={task.priority} className='bg-gray-700' value={task.priority}>{task.priority}</option>
                      {optionsHigh.map((option) => (
                        <option key={option} defaultValue={task.priority} className='bg-gray-700' value={option}>{option}</option>
                      ))}
                    </select>
                  </th>
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
    </div>
  );
};

export default TaskCard;
