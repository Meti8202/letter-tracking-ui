// components/LetterTemplate/ClosingSalutation.tsx
"use client";
import React, { useState } from "react";

const predefinedOptions = [
  "Sincerely",
  "Regards",
  "Best regards",
  "Yours truly",
  // Add more predefined options as needed
];

const ClosingSalutation = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customSalutation, setCustomSalutation] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue !== "Custom") {
      setCustomSalutation("");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Closing Salutation</h3>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="border rounded-md px-4 py-2 w-[50%]"
      >
        <option value="">Select a closing salutation</option>
        {predefinedOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        <option value="Custom">Custom</option>
      </select>
      {selectedOption === "Custom" && (
        <div className="mt-4">
          <label htmlFor="customSalutation" className="block mb-2">
            Custom Salutation:
          </label>
          <input
            type="text"
            id="customSalutation"
            value={customSalutation}
            onChange={(e) => setCustomSalutation(e.target.value)}
            placeholder="Enter custom salutation"
            className="border rounded-md px-4 py-2 w-full"
          />
        </div>
      )}
    </div>
  );
};

export default ClosingSalutation;
