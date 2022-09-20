import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="hero py-40 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops!</h1>
          <p className="py-6">404 Error - Page Not Found</p>
          <button className="btn btn-primary">
            <Link to="/">Back To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
