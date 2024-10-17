import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Speech to Text Converter</h1>
      <div className="text-area">
        <p>Your transcribed text will appear here...</p>
      </div>
      <div className="button-container">
        <button className="button">🎤 Start Listening</button>
        <button className="button stop">🛑 Stop Listening</button>
      </div>
    </div>
  );
}

export default App;
