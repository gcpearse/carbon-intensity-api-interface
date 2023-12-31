import { useState } from "react";

const RegionalSearch = ({ errorStyle, setPostcode }) => {

  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostcode(input);
    setInput("");
  };

  return (
    <div id="regional-search">
      <h3 id="regional-search-header">Regional Search</h3>
      <form onSubmit={handleSubmit} id="postcode-form">
        <label htmlFor="postcode-input" id="postcode-input-label">Enter the first part of your postcode (e.g. SW1A) to display the carbon intensity forecast for your region.</label>
        <input
          type="text"
          placeholder="Enter postcode..."
          id="postcode-input"
          value={input}
          onChange={handleChange}
        />
        <p className="search-error" id={errorStyle}>Invalid postcode. Please try again.</p>
        <button id="regional-search-button">Submit</button>
      </form>
    </div>
  );
};

export default RegionalSearch;
