import React from "react"

export const Modal = ({ isModal, setIsModalOpen, mint }) => {
  const handleClick = (event) => {
    if (event.target.id === "background") {
      setIsModalOpen(false)
    }
  }

  if (!isModal) {
    return null
  } else {
    return (
      <div
        onClick={handleClick}
        id="background"
        className="fixed inset-0 z-20 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
      >
        <div id="modal" className=" ">
          <div className="relative  p-4 w-full max-w-md h-1/2 md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-center text-center items-center p-5 rounded-t  dark:border-gray-600">
                <button
                  onClick={() => setIsModalOpen(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 "
                  data-modal-toggle="small-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="flex flex-col items-center px-4 pb-2 gap-2 justify-center">
                <div>
                  <h1 className=" text-center mb-2 w-48">
                    Please check the parameters for typos, errors before
                    proceeding.
                  </h1>
                </div>
                <div>
                  <button
                    onClick={mint}
                    className="inline-flex items-center  rounded-xl duration-300 ease-in-out my-2.5 bg-indigo-700 px-4 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none"
                  >
                    Mint NFT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
