import React from "react";

function Loading() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
        <button
          type="button"
          className="flex items-center bg-transparent text-gray-500 font-bold py-2 px-4 rounded-lg disabled:opacity-50 text-3xl"
          disabled
        >
          <svg
            className="animate-spin h-5 w-5 mr-3 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path d="M4 12a8 8 0 018-8v8H4z" fill="currentColor"></path>
          </svg>
          Loading...
        </button>
      </div>
    </>
  );
}

export default Loading;
