import axios from "axios";

const getUsers = (page = 1) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
};

export default getUsers;
