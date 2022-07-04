import React from "react";

const form = (props) => {
  return (
    <form className="Search" onSubmit={props.getSearch}>
      <input
        type="text"
        className="form-control searchbar"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        value={props.search}
        onChange={props.updateSearch}
        placeholder="Search "
      />
      <button
        type="submit"
        className="Search-Button fa-solid fa-magnifying-glass fa-lg btn btn-primary"
      ></button>
    </form>
  );
};
export default form;
