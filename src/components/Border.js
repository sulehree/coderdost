import React from "react";

const Border = ({ children }) => {
  return (
    <div style={{ border: "5px groove #508bff", marginTop: "10px" }}>
      {children}
    </div>
  );
};

export default Border;
