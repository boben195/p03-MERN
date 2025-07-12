import React from "react";

const Home = ({ setToken }) => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-gray-800">Hi dear friend</p>
          <p className="text-5xl text-gray-700">Do you want play</p>
          <p className="text-2xl text-gray-700">GAME???</p>
          <button
            onClick={() => setToken("")}
            className="mt-6 py-2 px-6 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
