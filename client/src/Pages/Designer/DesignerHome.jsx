import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import NewProjectForm from "../../Components/Designer/Home/NewProjectForm";
import ImageCard from "../../Components/Cards/ImageCard";
import { useProject } from "../../context/ProjectContext";
import ProjectCard from "../../Components/Cards/ProjectCard";
import { toast } from "react-toastify";


const DesignerHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { projects, getProjectsByDesigner } = useProject();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getProjectsByDesigner().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <div>
          <p className="ml-8 text-2xl">
            <br/>
            WELCOME, <b className="text-orange-400">DESIGNER NAME</b>
          </p>
        </div>
        <center>
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
            <div
              className="bg-gray-200 p-4 rounded-md mb-6 flex items-center justify-center cursor-pointer"
              onClick={openModal}
            >
              <FiPlus className="text-2xl text-blue-500" />
              <span className="ml-2">Add Project</span>
            </div>
          </div>
        </center>
        <div className="flex  flex-wrap gap-6 ml-12 mt-12">
          {projects.map((project) => {
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

                <NewProjectForm />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DesignerHome;
