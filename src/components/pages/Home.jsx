import React, { useContext } from "react";
import SearchBar from "../SearchBar";
import SearchContext from "../context/SearchContext";
import Alert from "../shared/Alert";
function Home() {
  const { alert } = useContext(SearchContext);
  return (
    <div className="hero py-40 ">
      <div className="hero-content text-center">
        <div className="max-w-md mx-auto justify-center">
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Alert type="error" message="Please enter something." />
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
