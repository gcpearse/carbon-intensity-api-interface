import { useState } from "react";


const RegionalSearch = ({ isInputError, setPostcode }) => {


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
    <div className="card" id="regional-search-card">

      <h3>Regional Search</h3>

      <form onSubmit={handleSubmit}>

        <label htmlFor="postcode-input">
          Enter the first part of your postcode (e.g. SW1A) to display the carbon intensity forecast for your region.
        </label>

        <input
          type="text"
          placeholder="Enter postcode..."
          id="postcode-input"
          value={input}
          onChange={handleChange} />

        {isInputError ? (
          <p className="search-error">
            Invalid postcode. Please try again.
          </p>
        ) : (
          null
        )}

        <button className="search-btn">
          Submit
        </button>

      </form>

    </div>
  );
};


export default RegionalSearch;
