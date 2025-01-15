import React from "react";

const TextSizeSlider = ({ fontSize, setFontSize }) => {
  return (
    <div>
      <label> Dimensiune text: {fontSize}px</label>
      <input
        type="range"
        min="10"
        max="100"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      />
    </div>
  );
};

export default TextSizeSlider;
