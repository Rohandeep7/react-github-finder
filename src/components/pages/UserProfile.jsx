import React, { useContext, useEffect } from 'react'
import GithubContext from '../../context/github/GithubContext'
import {FaUsers,FaUserFriends,FaCodepen,FaStore} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Spinner from '../shared/Spinner'
import {useParams} from 'react-router-dom'
import RepoList from '../repos/RepoList'
import {getUserAndRepos} from '../../context/github/GithubActions'

function UserProfile() {

  const { user,loading, repos, dispatch } = useContext(GithubContext);
  const params=useParams()
  useEffect(()=>{
    getUserAndReposAsync()
  },[params.login])

  const getUserAndReposAsync=async ()=>{
      dispatch({ type: "SET_LOADING" });
      const data=await getUserAndRepos(params.login)
      console.log(data)
      dispatch({ type: "GET_USER_AND_REPOS", payload: { data } });
  }

  const imgStyle={
    borderRadius: '1rem',
    opacity : '1'
  }

  const {login,avatar_url,name,type,hireable,bio,html_url,location,blog,twitter_username,followers,following,public_repos,public_gists}=user
  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className="w-full mx-auto lg:w-12/12 md:p-4 sm:p-2">
        <div className="mt-8 mb-16 flex justify-center">
          <Link to="/" className="btn btn-outline btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 md:gap-8 mb-8">
          <div className="mx-auto custom-card-image md:max-w-sm sm:max-w-xs mb-6 md:mb-0">
            <div style={imgStyle} className="rounded-lg card  image-full">
              <figure>
                <img className="max-w-full" src={avatar_url} alt="User Image" />
              </figure>
              <div className="card-body justify-end">
                <div className="card-title mb-0">
                  <h2>{login}</h2>
                </div>
                <p className="flex-grow-0">{name}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {/* <div className="grid grid-cols-1 md:grid-cols-3"> */}
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="stat-value text-lg">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="stat-value text-lg ">
                    <a href={`https://${blog}`} target="blank" rel="noreferrer">
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="stat-value text-lg">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          {/* <div className="grid grid-cols-1 md:grid-cols-4"> */}
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
          {/* </div> */}
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  );
  
}

export default UserProfile