import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import NewProjectForm from "../../Components//Customer/Addprojectform";

const CustomerHome = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="min-h-screen bg-white">
                <div>
                    <p className="ml-8 mt-8 text-2xl text-center">
                        WELCOME, <b className="text-orange-400">CUSTOMER NAME</b>
                    </p>
                </div>
                <center>
                    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                        <div
                            className="bg-gray-200 p-4 rounded-md mb-6 flex items-center justify-center cursor-pointer"
                            onClick={openModal}
                        >
                            <FiPlus className="text-2xl text-blue-500" />
                            <span className="ml-2">Add Project to View</span>
                        </div>
                    </div>
                </center>
                {/* <div className="flex m-16">



                    <ImageCard projTitle="Project Name" custNo="8888888888" custEmail="abc@gmail.com" img="https://avatars.githubusercontent.com/u/121731399?v=3" />

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
                                    <p className="text-right cursor-pointer" onClick={closeModal}> X</p>
                                </Dialog.Title>

                                <NewProjectForm />


                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default CustomerHome