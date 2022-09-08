import React from "react";

function InfoTooltip({ onClose, isOpen, children }) {
  return (
    <div className={`popup popup_info ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_info">
        {children}
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
export default InfoTooltip;
