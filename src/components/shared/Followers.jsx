import React, { useState } from 'react'
import { useEffect } from 'react'

function Followers({url,numOfFollowers}) {
  const [followers,setFollowers]=useState([])
  console.log(numOfFollowers)
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  useEffect(()=>{
    fetchFollowers()
  },[followers])

  const fetchFollowers=async ()=>{
    const response=await fetch(`${url}`,{
      headers:{
        Authorization : `token ${GITHUB_TOKEN}`
      }
    })
    const data=await response.json();
    console.log(data)
    setFollowers(data)
  }
  return (
    <div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="w-10">
      <img src={followers[0].avatar_url} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-10">
      <img src={followers[1].avatar_url} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-10">
      <img src={followers[2].avatar_url} />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="w-10 bg-neutral-focus text-neutral-content">
      <span>+{numOfFollowers-3}</span>
    </div>
  </div>
</div>
  )
}

export default Followers
