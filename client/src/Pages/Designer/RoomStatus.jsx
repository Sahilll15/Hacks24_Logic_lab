import React, { useState } from "react";
import TaskCard from "../../Components/Cards/TaskCard";
import { RiUserAddFill } from "react-icons/ri";
import { MdAddTask } from "react-icons/md";
import TaskForm from "../../Components/Designer/Form/TaskForm";



const RoomStatus = ({percentage}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div>
        <div className="m-2 p-4 text-2xl">
            Drawing Room Status
            <div className="flex text-base mt-4 ml-8 gap-5">
            <div className="flex " onClick={openModal}>
             <MdAddTask /> Add Task
            </div>
            <div className="flex">
            <RiUserAddFill />Assign Contractor
            </div>
            </div>
        </div>

        <div className="p-6 pt-0">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-green-500">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-green-600">
                  {percentage || 20}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200 w-full">
              <div
                style={{ width: `${percentage || 20}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </div>

     <TaskCard/>
     
     <div>
     {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
         <TaskForm closeModal={closeModal}/>
        </div>
      )}
     </div>
    </div>
  );
};

export default RoomStatus;
