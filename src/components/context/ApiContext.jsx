import React, { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import SearchContext from "./SearchContext";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const {input}=useContext(SearchContext)
  const [users, setUsers] = useState([]);
  const [btnBool,setBtnBool]=useState(true)
  const token = process.env.REACT_APP_GITHUB_API_TOKEN;
  const url=process.env.REACT_APP_GITHUB_URL

    useEffect(()=>
      {
        addUsers(input)
        console.log(users.items)
      },
      [btnBool]
    );

     const addUsers=async(input)=>{
      const response=await fetch(`${url}/search/users?q=${input}`,{
        headers: {
          Authorization: `token ${token}`,
        },
      })
      const data=await response.json();
      setUsers(data)
    }

    const changeButtonForm=()=>{
        console.log(btnBool)
        setBtnBool(prev=>!prev)
    }

  return (
    <ApiContext.Provider value={{ users ,changeButtonForm}}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
