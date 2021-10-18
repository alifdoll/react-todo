import React from "react";
import Form from "./Form";

const Section = ({ children, className = "" }) => {
  return <div className={`mx-6 ${className}`}>{children}</div>;
};

export default Section;
