import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);
  const changeInput = (value) => {
    setInput(value);
  };

  const toggleAlert = () => {
    setAlert((prev) => !prev);
  };
  return (
    <SearchContext.Provider value={{ input, changeInput, alert, toggleAlert }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
