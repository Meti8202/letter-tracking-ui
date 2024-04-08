"use client";
import React, { useState } from "react";

const RecipientContactAddress = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  // Add more states for other parts of the recipient's contact information

  const handleNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };

  const handleDepartmentChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDepartment(e.target.value);
  };
  // Add more handler functions for other parts of the recipient's contact information

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Sender Information</h3>
      {/* <div className="p-4"> */}
      <div className="mb-4">
        <label htmlFor="senderName" className="block mb-1">
          Name:
        </label>
        <input
          type="text"
          id="senderName"
          value={name}
          onChange={handleNameChange}
          className="border rounded-md px-4 py-2 w-full md:w-[50%]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="senderDepartment" className="block mb-1">
          Department:
        </label>
        <input
          type="text"
          id="senderDepartment"
          value={department}
          onChange={handleDepartmentChange}
          className="border rounded-md px-4 py-2 w-full md:w-[50%]"
        />
      </div>
      {/* Add more input fields for other parts of the recipient's contact information */}
      {/* </div> */}
    </div>
  );
};

export default RecipientContactAddress;
