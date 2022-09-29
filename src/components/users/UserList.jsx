import React, { useEffect } from 'react'
import { useState } from 'react';
import Spinner from '../shared/Spinner';
import UserItem from './UserItem';
function UserList() {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(true)

  const token=process.env.REACT_APP_GITHUB_TOKEN
  const url=process.env.REACT_APP_GITHUB_URL

  useEffect(()=>{
    fetchUsers()
  },[])

  const fetchUsers= async ()=>{
    const response =await fetch(`${url}/users`,{
        headers:{
            Authorization: `token ${token}`
        }
    })

    const data=await response.json()
    setUsers(data)
    console.log(data);
    setLoading(false)
  }

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