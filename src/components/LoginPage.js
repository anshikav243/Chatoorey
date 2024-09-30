import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const LoginPage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold">Login</span>
          <span  onClick={onClose}>
            <IoClose />
          </span>
        </div>

        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
        />
        <div className="flex justify-end">
          <button className="bg-[#FF5200] text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
