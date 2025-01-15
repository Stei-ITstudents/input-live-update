import React from "react";

const TextDisplay = ({ text, fontSize }) => {
  return <h2 style={{ fontSize: `${fontSize}px` }}>{text}</h2>;
};

export default TextDisplay;
