import { useState } from "react";
import { sender } from "../../services/tutorialService";

function Upload() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    sender("tutorials", file)
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
      </form>
    </div>
  );
}

export default Upload;
