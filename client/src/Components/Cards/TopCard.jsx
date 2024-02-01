import React from 'react';
import Hall from "../../Assets/Images/Hall.png";
import { useParams, useNavigate } from 'react-router-dom'
import IMG1 from "../../Assets/Images/Img5.png";
import IMG2 from "../../Assets/Images/IMG6.png";
import IMG3 from "../../Assets/Images/land2.png";
import { useAuth } from '../../context/AuthContext';

const images = [Hall, IMG1, IMG2, IMG3];

const TopCard = ({ room,setCurrentRoomL }) => {

  const navigate = useNavigate();

  const randomImage = images[Math.floor(Math.random() * images.length)];


  const {currentRoom, setCurrentRoom} = useAuth();
  return (
    <div className='mt-10'>
      <div className="relative flex flex-col w-80 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src={randomImage} alt="hall image" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {room.room.title || "No Room"}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {room.room.description || "No contractor assigned"}
          </p>
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
                  {room.percentageOfCompletion || 0}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200 w-full">
              <div
                style={{ width: `${room.percentageOfCompletion}%` }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${room.percentageOfCompletion < 30 ? "bg-red-500" : "bg-green-500"}`}
              ></div>
            </div>
          </div>
          <button
            data-ripple-light="true"
            type="button"

            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => {
              setCurrentRoom(room.room);
              navigate(`/room/${room.room._id}`)
            }}
          >
            Check Status
          </button>
        </div>
      </div>
    </div >
  );
};

export default TopCard;
