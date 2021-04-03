import React from "react";

const Error = ({ children }) => {
  return (
    <span className="error" style={{ color: "red", float: "right" }}>
      {children}
    </span>
  );
};

export default Error;
