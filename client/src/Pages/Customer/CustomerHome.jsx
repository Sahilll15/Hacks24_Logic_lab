import React, { useEffect, useState } from "react";
import { RiMailLine, RiLockPasswordLine } from 'react-icons/ri';
import UserProject from "../../Components/Cards/UserProject";


const CustomerHome = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [customerPrj, setCustomersPrj] = useState([]);

  useEffect(() => {
    const getUserProjects = async () => {
      try{
        const response = await fetch("http://localhost:4000/api/v1/owner", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('auth')}`
          }
        });
        const data = await response.json();
        setCustomersPrj(data.projects)
      }catch(err){
        console.log(err);
      }
    }
    getUserProjects();
  },[localStorage.getItem('auth')]);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
              <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                <div className="h-44 w-44 sm:mr-10 inline-flex items-center justify-center ml-16">
                  <img src="https://telemedix.vercel.app/static/media/faq.665e36ea6e93e78bf865.png" />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <div>
                    <div className=" flex items-center justify-center">
                      <div className="max-w-md mx-auto bg-white rounded-md p-6 ">
                        <h1 className="text-2xl font-bold mb-4">Greetings!</h1>
                        <p className="text-gray-700 mb-4">
                          Welcome to our project tracking page. Feel free to
                          explore and track your projects.
                        </p>

                        <div
                          className="bg-blue-500 text-white p-4 rounded-md cursor-pointer"
                          onClick={openModal}
                        >
                          <p className="font-bold">Track Your Project</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
        </section>
       
       {customerPrj?.map((p) => (
        <UserProject 
        projectId = {p.project._id}
        projTitle = {p.project.title}
        custNo = {p.project.homeOwnerPhone}
        custEmai = {p.project.homeOwnerEmail}
        totalBudget = {p.totalBudget}
        totalTasks = {p.totalTasks}
        totalRooms = {p.totalRooms}
        percentage={p.percentageOfCompletion}
        />
       ))}

{/* <UserProject 
        projectId = "22"
        projTitle = "Hello"
        custNo = "2222"
        custEmai ="dfs"
        totalBudget = "4444"
        totalTasks = "44"
        totalRooms = "2"
        percentage="80"
        /> */}

      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-md p-6 shadow-md w-80 relative">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md absolute top-0 right-0 m-4"
            onClick={closeModal}
          >
            Close
          </button>
      <br/><br/>
          <form>
            <div className="mb-4">
              <label htmlFor="text" className="flex items-center">
                <RiMailLine className="mr-2" /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="flex items-center">
                <RiLockPasswordLine className="mr-2" /> Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default CustomerHome;
