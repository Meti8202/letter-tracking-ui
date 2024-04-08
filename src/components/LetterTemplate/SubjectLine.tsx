"use client";
import React, { useState } from "react";

const SubjectLine = () => {
  const [subject, setSubject] = useState("");

  const handleSubjectChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubject(e.target.value);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Subject Line</h3>
      <input
        type="text"
        value={subject}
        onChange={handleSubjectChange}
        className="border rounded-md px-4 py-2 w-[50%]"
        placeholder="Enter subject..."
      />
    </div>
  );
};

export default SubjectLine;
