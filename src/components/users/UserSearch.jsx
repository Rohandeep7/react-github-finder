import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";
import {searchUsers} from '../../context/github/GithubActions'
function UserSearch() {
    const [input,setInput]=useState('')
    const {users,dispatch}=useContext(GithubContext)
    const {setAlert} = useContext(AlertContext);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(input===''){
            setAlert('Please enter something','error')
        }
        else{
            dispatch({ type: "SET_LOADING" });
            const data=await searchUsers(input)
            dispatch({ type: "GET_USERS", payload: { data} });
            setInput('')
        }
    }


    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="container mx-auto my-10 space-y-10">
            <Alert />
            <div className="form-control">
              <div className="input-group input-group-lg justify-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-lg bg-base-200 focus:outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-lg
                  btn-square"
                >
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
                    className="btn btn-lg text-white text-sm border-l-slate-700"
                    onClick={()=>dispatch({type:'CLEAR_USERS'})}
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
