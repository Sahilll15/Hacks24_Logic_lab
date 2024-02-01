import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import NewProjectForm from "../../Components/Designer/Home/NewProjectForm";
import ImageCard from "../../Components/Cards/ImageCard";
import { useProject } from "../../context/ProjectContext";
import ProjectCard from "../../Components/Cards/ProjectCard";
import { toast } from "react-toastify";
import Piechart from "../../Components/Charts/PieChart";
import { useAuth } from "../../context/AuthContext";


const DesignerHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {user} = useAuth();
  const { projects, getProjectsByDesigner } = useProject();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getProjectsByDesigner().then((res) => {
     
    });
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <div>
          <p className="ml-8 text-3xl">
            <br/>
            WELCOME, <b className="text-orange-400">{user?.name}</b>
          </p>
        </div>
        <center>
          <div className="max-w-md w-full  bg-white rounded-lg shadow-md">
            <div
              className="bg-white p-4 rounded-md mb-6 flex items-center justify-center cursor-pointer"
              onClick={openModal}
            >
              <FiPlus className="text-2xl text-blue-500" />
              <span className="ml-2">Add Project</span>
            </div>
          </div>

          <div className="pt-2 relative mx-auto w-64 text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </center>

        <div className="flex  flex-wrap gap-6 ml-12 mt-12">
          {Array.isArray(projects) && projects?.map((project) => {
            return (
              <ProjectCard
                projectId={project.project._id}
                key={project.project._id}
                projTitle={project.project.title}
                custNo={project.project.homeOwnerPhone}
                custEmail={project.project.homeOwnerEmail}
                img={project.project.image}
                percentage={project.percentageOfCompletion}
                noOfTasks={project.totalTasks}
                noOfRooms={project.totalRooms}
                totalBudget={project.totalBudget}
              />
            );
          })}
        </div>

        {/* <div className="flex flex-wrap gap-6 ml-12 mt-12">
          <div className="w-1/2">
            <Piechart api={'/pichart'} />
          </div>
          <div className="w-1/2">
            <Piechart api={'/pichartbudget'} />
          </div>
        </div> */}
      </div>

      {/* modal starts here */}
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center  rounded-xl">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <p className="text-right cursor-pointer" onClick={closeModal}>
                    {" "}
                    X
                  </p>
                </Dialog.Title>

                <NewProjectForm closeModal={closeModal} />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DesignerHome;
