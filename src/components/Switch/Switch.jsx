import React from "react";
import "./Switch.css";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{
          background: isOn ? "rgb(92, 92, 92)" : "rgb(177, 177, 177)",
        }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
