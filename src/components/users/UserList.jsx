import React, { useEffect } from 'react'
import { useState } from 'react';
import Spinner from '../shared/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/GithubContext';
import { useContext } from 'react';
function UserList() {
  const {users,loading,fetchUsers}=useContext(GithubContext)

  useEffect(() => {
    fetchUsers();
    console.log(users);
    console.log(loading);
  }, []);

  return !loading ?  (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
        {users.map((user)=>{
            return <UserItem key={user.id} user={user}/>
        })}
      </div>
    </>
  ) : <Spinner/>
}

export default UserList