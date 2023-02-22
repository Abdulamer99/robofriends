import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa-2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        key="searchContainer"
        type="search"
        placeholder="Search robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
