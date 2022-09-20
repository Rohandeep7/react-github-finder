import React, { useContext, useState } from "react";
import SearchContext from "../context/SearchContext";
import { Fab } from "@mui/material";
function Button({ children, size, color, shape }) {
  const { input, toggleAlert } = useContext(SearchContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => {
    if (input === "") {
      setIsDisabled((prev) => !prev);
      toggleAlert();
      setTimeout(() => {
        toggleAlert();
        setIsDisabled((prev) => !prev);
      }, 3000);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`btn btn-${size} btn-${color} btn-${shape} btn-${
        isDisabled && "disabled"
      }
      } `}
    >
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  size: "sm",
  color: "secondary",
  shape: "circle",
};
