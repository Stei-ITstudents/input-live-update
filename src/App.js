import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("Scrie ceva...");
  const [fontSize, setFontSize] = useState(24);

  return (
    <div>
      <input
        type="text"
        placeholder="Introdu textul aici..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label> Dimensiune text: {fontSize}px</label>
      <input
        type="range"
        min="10"
        max="100"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      />
      <h2 style={{ fontSize: `${fontSize}px` }}>{text}</h2>
    </div>
  );
};

export default App;
