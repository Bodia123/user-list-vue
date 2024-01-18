import axios from "axios";

const addUser = ({ name, email }) => {
  return axios.post("https://reqres.in/api/users/", {
    name,
    email,
  });
};
export default addUser;
