import React from 'react';
import Hall from "../../Assets/Images/Hall.png";

import { useNavigate } from 'react-router-dom'
const ProjectCard = ({ projectId, projTitle, custNo, custEmail, onClick, img, percentage }) => {

    const navigate = useNavigate()
    return (
        <div className="bg-white shadow-md p-6 rounded-md w-80 ">
            <img className="w-full h-32 object-cover mb-4 rounded-md" src={img} alt="Project Image" />
            <h2 className="text-xl font-bold mb-2">{projTitle}</h2>
            <p className="text-gray-600 mb-2">Customer Email: {custEmail}</p>
            <p className="text-gray-600 mb-2">Customer Mobile: {custNo}</p>
            <div className="flex items-center mb-4">
                <div className="w-4/5 bg-gray-300 rounded-md overflow-hidden">
                    <div className="bg-blue-500 h-3" style={{ width: `{percentage}%` }}></div>
                </div>
                <span className="ml-2 text-gray-700">10% Completed</span>
            </div>

            <button
                onClick={() => {
                    navigate(`/project/${projectId}`)
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
            >
                View Project
            </button>
        </div>
    );
};

export default ProjectCard;
