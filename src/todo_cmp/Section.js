import React from "react";

const Section = ({ children, className = "" }) => {
  return <div className={`mx-6 ${className}`}>{children}</div>;
};

export default Section;
