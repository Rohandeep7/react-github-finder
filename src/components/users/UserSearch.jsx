import React, { useState } from "react";
import { useContext } from "react";
import GithubContext from "../../context/GithubContext";
import {GrClear} from 'react-icons/gr'
import GithubReducer from "../../context/GithubReducer";
import { useReducer } from "react";
function UserSearch() {
    const [input,setInput]=useState('')
    const {users,searchUsers,clearUsers}=useContext(GithubContext)
    const [state,dispatch]=useReducer(GithubReducer,users)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(input===''){
            alert('Please enter something')
        }
        else{
            searchUsers(input)
            setInput('')
        }
    }


    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="container my-10">
            <div className="form-control">
              <div className="input-group justify-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="input-lg bg-base-200 focus:outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="btn btn-lg btn-square">
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
                </button>
                {users.length > 0 && (
                  <button
                    className="btn btn-lg  text-white text-sm border-l-slate-700"
                    onClick={clearUsers}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </>
    );
}

export default UserSearch;
