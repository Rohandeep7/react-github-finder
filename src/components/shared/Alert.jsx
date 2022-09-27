import React, { useContext } from "react";
import SearchContext from "../context/SearchContext";
import { Zoom } from "@mui/material";
function Alert({ type, message }) {
  const { alert } = useContext(SearchContext);
  return (
    <Zoom in={alert}>
      <div
        style={{ display: alert ? "block" : "none" }}
        className={`alert mx-auto my-10 alert-${type} max-w-sm shadow-lg`}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{message}</span>
        </div>
      </div>
    </Zoom>
  );
}

Alert.defaultProps={
  type:"error"
}

export default Alert;
