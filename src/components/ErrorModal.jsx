import React from 'react';

const ErrorModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Error</h2>
        <p>Wrong user credentials. Please try again.</p>
      </div>
    </div>
  );
};

export default ErrorModal;
