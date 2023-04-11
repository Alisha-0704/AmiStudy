import React, { useState } from "react";
import "./Implemenfile.css";

function Implementfile() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileInputChange = (event) => {
    setSelectedFiles(event.target.files);
  };
  return (
    <div className="file-upload">
      <input
        className="file-upload__input"
        type="file"
        name="myFile[]"
        id="myFile"
        multiple
        onChange={handleFileInputChange}
      />
      <button className="file-upload__button" type="button">
        Choose File(s)
      </button>
      <span className="file-upload__label">
        {selectedFiles.length
          ? Array.from(selectedFiles)
              .map((file) => file.name)
              .join(", ")
          : "No file(s) selected"}
      </span>
    </div>
  );
}

export default Implementfile;
