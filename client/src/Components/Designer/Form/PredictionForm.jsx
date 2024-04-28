import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {rupeeCurrencyFormatter} from 'rupee-currency-formatter';

const PredictionForm = ({ closeModal, setTriggerL }) => {



    const [predictionCost,setPredictionCost]=useState(null);

  const [formData, setFormData] = useState({
    Square_Footage: 1504,
    Scope_of_Renovation: 2,
    Materials_Used: 2,
    Labor_Costs: 382168,
    Permits_and_Fees: 2742,
    Timeline: 6,
    Quality_of_Workmanship: 3,
    Contingency_Fund: 0.05,
    Number_of_Rooms: 3
  });

  const getdata=async()=>{
    try {
        const response=await axios.get('http://localhost:5001/');

        console.log(response);
        console.log(response.data)
      

    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getdata();
  },[])

  useEffect(()=>{
    console.log('predictedcost',predictionCost)
  },[predictionCost])

  const Predict = async (e, formData) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/predict', formData);
      console.log(response);
      setPredictionCost(response.data.predicted_total_cost);

    } catch (error) {
      console.log(error);
    } finally {
    //   closeModal();
    //   setTriggerL((prev) => !prev);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value);
    setFormData({
      ...formData,
      [name]: numericValue
    });
  };

  return (
    <div>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-lg font-medium text-gray-900" id="modal-headline">
              Add Task
            </h3>

            <form>
              {Object.keys(formData).map((key) => (
                <div key={key} className="mt-2">
                  <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                    {key.replace(/_/g, ' ')}
                  </label>
                  <input
                    // type={typeof formData[key] === 'number' ? 'number' : 'text'}
                    type='number'
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={(e) => Predict(e, formData)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Predict
                </button>
              </div>

            {
                predictionCost && (
                    <div className='mt-10 '>
                        <p>The predicted cost for the renovation of the house is</p>
                        <h1 className='text-black font-bold text-xl'>Rs {Math.round(predictionCost)}</h1>
                        <h1 className='text-black  text-xl'>{rupeeCurrencyFormatter(Math.round(predictionCost))}</h1>
                    </div>
                )
            }
            </form>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={closeModal}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionForm;
