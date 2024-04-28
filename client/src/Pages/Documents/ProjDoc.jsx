import React, { useState } from "react";

const ProjDoc = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleUpload = () => {
    // Add your upload logic here
    closeModal();
  };

  return (
    <div className="text-center m-4 font-bold">
      <h1>YOUR ALL DOCUMENTS RELATED TO PROJECT</h1>

      <div className="rounded-md p-4  mt-6 mb-6">
        <button className="font-normal p-2 bg-blue-500 rounded-lg text-white"
        onClick={openModal}>
            ADD DOCUMENTS
        </button>
      </div>
      <div className="max-w-md mx-auto bg- mt-12 rounded-md overflow-hidden shadow-md">
        <div className="p-4 flex justify-between">
          <h3 className="text-xl font-semibold mb-2">Title</h3>
          <p className="text-sm text-gray-500">Date Created: 12/12/12</p>
        </div>
        <div className="p-4 bg-gray-100 text-right">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
           
          >
            View
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-md"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white p-4">
                <h2 className="text-lg font-semibold mb-4">Upload Document</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Document Title:
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter document title"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Document File:
                    </label>
                    <input
                      type="file"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                    onClick={handleUpload}
                  >
                    Upload
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjDoc;
