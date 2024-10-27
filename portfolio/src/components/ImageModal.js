import React from "react";
import "./ImageModal.css";

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Expanded view" />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
