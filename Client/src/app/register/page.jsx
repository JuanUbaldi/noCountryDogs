import React from "react";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="text-2xl ml-52 mr-196 mt-83 font-bold mb-4">REGISTER</h3>
      <form className="flex flex-col ml-43 mr-43  mb-228">
        <input
          className=" font-medium  mb-2 p-2 w-260 h-36 border border-gray-300 rounded"
          type="text"
          placeholder="USERNAME"
          style="font-size: 11.92px;"
        />
        <input
          className=" font-medium mb-2 w-260 h-36 p-2 border border-gray-300 rounded"
          type="email"
          placeholder="E-MAIL"
          style="font-size: 11.92px;"
        />
        <input
          className=" font-medium  mb-2 w-260 h-36 p-2 border border-gray-300 rounded"
          type="password"
          placeholder="PASSWORD"
          style="font-size: 11.92px;"
        />
        <input
          className="font-medium text-gray-300  mb-2 w-260 h-36 p-2 border border-gray-300 rounded"
          type="password"
          placeholder="CONFIRM PASSWORD"
          style="font-size: 11.92px;"
        />
        <h5 className="text-sm mb-2">REQUIRED FIELD</h5>
        <button
          className="font-medium   bg-blue-500 ml-118 text-white py-2 px-4 rounded"
          type="submit"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}
