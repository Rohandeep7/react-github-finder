import axios from 'axios'

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

// const config = {
//   headers: {
//       "Content-type": "application/json",
//       'Authorization': `token ${GITHUB_TOKEN}`,
//   },
// }

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    'Authorization': `${GITHUB_TOKEN}`,
  }
});
//Get all the users matching the specific search endpoint
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response =await github.get(`/search/users?${params}`)
  return response.data.items
  
};

//Get info about the selected user with latest repos
export const getUserAndRepos = async (login) => {

  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const [users,repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);
  
  return {users:users.data,repos:repos.data}
};
