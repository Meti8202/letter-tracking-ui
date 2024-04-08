import React, { useState } from "react";

const SignatureUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Perform upload logic here, e.g., send file to server
      console.log("Uploading file:", selectedFile.name);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Signature Upload</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border-none rounded-md px-4 py-2 w-50%"
      />
      <button
        onClick={handleUpload}
        className="mt-3 bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-4 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default SignatureUploader;
