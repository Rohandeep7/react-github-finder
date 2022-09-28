import React, { useContext } from "react";
import Button from "./shared/Button";
import SearchContext from "./context/SearchContext";

function SearchBar({ theme }) {
  const { input, changeInput } = useContext(SearchContext);

  const handleChange = (e) => {
    changeInput(e.target.value);
  };

  return (
    <div className="form-control">
      <div className="input-group justify-center" data-theme={theme}>
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered focus:outline-none input-lg w-full max-w-xs"
          value={input}
          onChange={(e) => handleChange(e)}
        />
        <Button size='lg'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
