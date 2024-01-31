import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const LongCard = ({  name,  id,  desc, status }) => {
  return (
    <div className="relative w-9/12 mx-auto p-4 border mt-2 border-gray-300 bg-white rounded shadow-md">
         <h2 className="text-xl font-bold">
        {id} - {name} 
      </h2>
      <h2>
      {desc}
      </h2>
      <div className='flex justify-between'>
      <span className=''>Created: 12/11/24 11:50pm</span>
      <span className='bg-green-600 p-2 rounded-lg text-white'>Completed: 12/11/24 11:50pm</span>
      </div>
      <p className="flex items-center">
        <strong>Status:</strong>
       
      
      
          <span className="flex items-center ml-2 ">
            <FontAwesomeIcon icon={faCheck} className="mr-1 text-green-500" />
            <FontAwesomeIcon icon={faTimes} className="mr-1 text-red-500" />
            {status}
          </span>
       
      </p>
    </div>
  )
}

export default LongCard