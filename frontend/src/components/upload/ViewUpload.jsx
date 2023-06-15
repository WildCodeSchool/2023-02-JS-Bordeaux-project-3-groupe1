import React, { useEffect, useState } from "react";
import { getUploads } from "../../services/uploadService";

function ViewUpload() {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    getUploads()
      .then((data) => {
        setFileNames(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {fileNames.imagesWithUrls?.map((fileName) => (
          <>
            <li key={fileName.id}>{fileName?.name}</li>
            <img src={fileName.url} alt="" />
          </>
        ))}
      </ul>
    </div>
  );
}

export default ViewUpload;
