import React, { useState, useEffect } from "react";
import "./App.css"; // Optional CSS styling for the components

const TextArea = ({ text, setText }) => {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter your text here"
      rows={10}
      cols={50}
    />
  );
};

const StatsDisplay = ({ text }) => {
  const wordCount = text.split(/\s+/).filter((word) => word).length;
  const uniqueWordCount = new Set(text.toLowerCase().match(/\b\w+\b/g)).size;
  const characterCount = text.replace(/\s/g, "").length;

  return (
    <div className="stats">
      <p>Total Words: {wordCount}</p>
      <p>Unique Words: {uniqueWordCount}</p>
      <p>Characters (Excluding Spaces): {characterCount}</p>
    </div>
  );
};

const StringReplacer = ({ text, setText }) => {
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");

  const handleReplace = () => {
    const updatedText = text.replaceAll(searchString, replaceString);
    setText(updatedText);
  };

  return (
    <div className="string-replacer">
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Search string"
      />
      <input
        type="text"
        value={replaceString}
        onChange={(e) => setReplaceString(e.target.value)}
        placeholder="Replacement string"
      />
      <button onClick={handleReplace}>Replace</button>
    </div>
  );
};

const App = () => {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>Text Manipulation Tool</h1>
      <TextArea text={text} setText={setText} />
      <StatsDisplay text={text} />
      <StringReplacer text={text} setText={setText} />
    </div>
  );
};

export default App;
