import React from "react";

const SearchBox = ({ list }) => {
  console.log(list);
  return (
    <div className="pa-2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        key="searchContainer"
        type="search"
        placeholder="Search robots"
      />
    </div>
  );
};

export default SearchBox;
