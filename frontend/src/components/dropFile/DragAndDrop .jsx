import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function DragAndDrop({ pictureUrl, setPicture }) {
  const [dragging, setDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setPicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  useEffect(() => {
    setPreviewUrl(pictureUrl);
  }, [pictureUrl]);

  return (
    <div
      className={`drag-and-drop ${dragging ? "dragging" : ""}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="container-dragAndDrop">
        add
        {previewUrl && <img src={previewUrl} alt="Preview" />}
      </div>
    </div>
  );
}

DragAndDrop.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  setPicture: PropTypes.func.isRequired,
};

export default DragAndDrop;
