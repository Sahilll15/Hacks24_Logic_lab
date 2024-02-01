import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import NewProjectForm from "../../Components/Designer/Home/NewProjectForm";
import IMG from "../../Assets/Images/cont.png";
import IMG2 from "../../Assets/Images/land2.png";
import { Link } from "react-router-dom";
import axios from "axios";


const ContractorHome = () => {

  const [tasks, setTasks] = useState([])


  const getCOntractorTasks = async () => {
    const response = await axios.get('http://localhost:4000/api/v1/contractor/get/tasks', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth')}`
      }
    })

    console.log(response.data.tasks)
    setTasks(response.data.tasks[0].
      tasks_assigned
    )

    console.log(response.data.tasks[0].tasks_assigned)
  }


  useEffect(() => {
    getCOntractorTasks()
  }, [])

  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <div>
          <p className="ml-4 text-2xl">
            <br />
            WELCOME, <b className="text-orange-400">Contractor NAME</b>
          </p>
        </div>

        {
          tasks?.map((task) => (
            <div className="flex">
              <div>
                <img src={IMG} alt="" className="mt-9 ml-9" />
              </div>

              <div className="flex flex-col md:flex-row">
                <div class="w-60  h-96  p-3 m-16 bg-gray-200 flex flex-col gap-1 rounded-2xl">
                  <div class="h-48 m-4 bg-gray-700 rounded-xl">
                    <img src={IMG2} alt="" />
                  </div>
                  <div class="flex flex-col gap-4">
                    <div class="flex flex-row justify-between">
                      <div class="flex flex-col">
                        <span class="text-xl font-bold">{task.title}</span>
                        <p class="text-xs text-gray-700">{task.description}</p>
                        <p class="text-xs text-gray-700 font-bold">Priority:{task.priority}</p>

                      </div>
                      <span class="font-bold  text-red-600">Rs {task.budget}</span>
                    </div>
                    <Link to={`/contractor/${task._id}`} >
                      <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">
                        Start
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div >
  );
};

export default ContractorHome;
