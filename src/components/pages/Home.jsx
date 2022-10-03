import React from "react";
import UserList from "../users/UserList";
import UserSearch from "../users/UserSearch";
// import Alert from "../layout/Alert";
function Home() {
  return (
    <>
      {/* <Alert/> */}
      <UserSearch />
      <UserList />
    </>
  );
}

export default Home;
