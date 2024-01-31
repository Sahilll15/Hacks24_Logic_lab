import React from 'react';
import TopCard from '../../Components/Cards/TopCard';
const ProjectUpdate = () => {
  
  return (
    <div className="bg-gray-50 p-4 min-h-screen rounded-md shadow-md">
      <div className="mb-4">
        <p className="text-2xl font-bold">PROJECT NAME / TITLE</p>
      </div>
      <div className='mt-16 ml-8'>
       <TopCard RoomName="Drawing Room" Contractors="aditya, karan, sahil"/>
      </div>
    
    </div>
  );
};

export default ProjectUpdate;
