import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";


const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const token = process.env.REACT_APP_GITHUB_API_TOKEN;
  const url=process.env.REACT_APP_GITHUB_URL

    useEffect(()=>
      {
        addUsers()
      },
      []
    );

     const addUsers=async()=>{
      const response=await fetch(`${url}/search/users?q=rohandeep`,{
        headers: {
          Authorization: `token ${token}`,
        },
      })
      const data=await response.json();

      setUsers(data)
    }

  return (
    <ApiContext.Provider value={{ users }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
