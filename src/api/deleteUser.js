import axios from "axios";

const deleteUser = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`);
};

export default deleteUser;
