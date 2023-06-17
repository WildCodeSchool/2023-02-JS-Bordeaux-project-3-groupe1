import { useState } from "react";
import { postUpload } from "../../services/tutorialService";

function Upload() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    postUpload(file)
      .then((data) => {
        console.info(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          id=""
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default Upload;
