import React, { useContext, useEffect } from 'react'
import GithubContext from '../../context/github/GithubContext'
import Spinner from '../shared/Spinner'
import {useParams} from 'react-router-dom'
function UserProfile() {
  const {loading,user,getUser}=useContext(GithubContext)
  const params=useParams()
  useEffect(()=>{
    getUser(params.login)
  },[])

  return loading ? <Spinner /> : <div>{user.login}</div>;
  
}

export default UserProfile