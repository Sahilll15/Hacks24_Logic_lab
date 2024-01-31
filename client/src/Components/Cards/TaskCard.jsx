import React from 'react';
import { CiImageOn } from 'react-icons/ci';
import { IoIosArrowDropdown } from "react-icons/io";


const TaskCard = () => {
  const optionsCompleted = ['Completed', 'In Progress'];
  const optionsHigh = ['Low', 'Medium', 'High'];

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

      <div className="task-card bg-indigo-400 text-white overflow-hidden rounded-lg m-2">
        <table className="rounded-table w-full">
          <thead>
            <tr className="">
              <th className="border-r-2 p-2" style={{ width: "15%" }}>Tiling Work</th>
              <th className="border-r-2 p-2" style={{ width: "15%" }}>Sahil Chalke</th>
              <th className="border-r-2 p-2 bg-green-500" style={{ width: "10%" }}>
                <select className="appearance-none bg-transparent border-none w-full text-white focus:outline-none">
                <IoIosArrowDropdown /> ddd

                  {optionsCompleted.map((option) => (
                    <option key={option} className='bg-gray-700' value={option}>{option}</option>
                  ))}
                </select>
              </th>
              <th className="border-r-2  bg-red-300" style={{ width: "10%" }}>
                <select className="appearance-none bg-transparent border-none w-full text-white p-2 focus:outline-none">
                  {optionsHigh.map((option) => (
                    <option key={option} className='bg-gray-700' value={option}>{option}</option>
                  ))}
                </select>
              </th>
              <th className="border-r-2 p-2" style={{ width: "15%" }}>69/69/69</th>
              <th className="border-r-2 p-2" style={{ width: "15%" }}>1000</th>
              <th className="border-r-2 p-2" style={{ width: "15%" }}>1200</th>
              <th style={{ width: "20%" }}><CiImageOn /></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default TaskCard;
