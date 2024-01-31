import React from 'react';
import Hall from "../../Assets/Images/Hall.png";

const ProjectCard = ({ projTitle, custNo, custEmail, onClick, img, percentage }) => {
    return (
        <div className="bg-white shadow-md p-6 rounded-md w-80 mx-auto">
      <img className="w-full h-32 object-cover mb-4 rounded-md" src={Hall} alt="Project Image" />
      <h2 className="text-xl font-bold mb-2">Title</h2>
      <p className="text-gray-600 mb-2">Customer Email: "dsadas"</p>
      <p className="text-gray-600 mb-2">Customer Mobile: "66"</p>
      <div className="flex items-center mb-4">
        <div className="w-4/5 bg-gray-300 rounded-md overflow-hidden">
          <div className="bg-blue-500 h-3" style={{ width: `10%` }}></div>
        </div>
        <span className="ml-2 text-gray-700">10% Completed</span>
      </div>
    </div>
    );
};

export default ProjectCard;
