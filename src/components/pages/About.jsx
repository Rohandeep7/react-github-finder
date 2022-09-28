import React from "react";
import {Zoom} from '@mui/material'
function About() {
  return (
    <Zoom in={true}>
        <div className="hero py-40 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
    </Zoom>
    
  );
}

export default About;
