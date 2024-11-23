import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUser = async (username: string) => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data;
};

export const fetchRepos = async (username: string) => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}/repos`);
  return data;
};
