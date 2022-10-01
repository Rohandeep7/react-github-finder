import React, { createContext, useEffect, useState } from "react";

const GithubContext = createContext();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  

  const fetchUsers = async () => {
    console.log("hi");
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{users, loading,fetchUsers}}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
