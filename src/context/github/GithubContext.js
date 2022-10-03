import React, { createContext, useEffect, useReducer, useState } from "react";
import GithubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
export const GithubProvider = ({ children }) => {

  const initialState={
    users:[],
    user : {},
    loading:false
  }
  const [state,dispatch]=useReducer(GithubReducer,initialState)

  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  const searchUsers = async (text) => {

    const params = new URLSearchParams({
      q: text,
    });

    setLoading()
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const {items} = await response.json();
    console.log(items);
    dispatch({type:'GET_USERS',payload:{items}})
  };


  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if(response.status===404){
      window.location='/notfound'
    }
    else{
        const data = await response.json();
        dispatch({ type: "GET_USER", payload: { data } });
    }
    
  };

  

  const setLoading=()=>dispatch({type:'SET_LOADING'})

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
