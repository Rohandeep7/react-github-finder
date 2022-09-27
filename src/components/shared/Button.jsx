import React, { useContext, useState } from "react";
import SearchContext from "../context/SearchContext";
import { Fab } from "@mui/material";
import ApiContext from "../context/ApiContext"
function Button({ children, size, color, shape }) {
  const { input, toggleAlert } = useContext(SearchContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const {users}=useContext(ApiContext)
  const handleClick = () => {
    if (input === "") {
      setIsDisabled((prev) => !prev);
      toggleAlert();
      setTimeout(() => {
        toggleAlert();
        setIsDisabled((prev) => !prev);
      }, 3000);
    }
    else{
      console.log(users.items)
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`btn btn-${size}  btn-${color} btn-${shape} btn-${
        isDisabled && "disabled"
      }
      } `}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "lg",
  color: "secondary",
  shape: "circle",
};

export default Button;


