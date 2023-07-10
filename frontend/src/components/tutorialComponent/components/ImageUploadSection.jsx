import React from "react";
import PropTypes from "prop-types";

function ImageUploadSection({ handleFileChange }) {
  return (
    <div className="container-explications-upload">
      <p>Insérer une image ici :</p>
      <label htmlFor="fileInput" className="custom-file-input">
        Insérer
      </label>
      <input
        type="file"
        name="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

ImageUploadSection.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
};

export default ImageUploadSection;
