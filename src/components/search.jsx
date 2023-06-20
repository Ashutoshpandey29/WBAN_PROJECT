import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export default function SymptomsInput() {
  const [iconClick, setClick] = useState(false);
  function handleClick() {
    setClick((prev) => {
      return !prev;
    });
  }
  return (
    <form className={iconClick ? "show-search" : "text-box"}>
      <input
        className="search-input"
        name="content"
        placeholder="Type your symptoms..."
        rows="3"
      />
      <div className="search-icons" onClick={handleClick}>
        <SearchIcon className="search" />
        <CloseIcon className="close" />
      </div>
    </form>
  );
}
