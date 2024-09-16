import axios from "axios";
import { useEffect } from "react";

const UserListC = () => {
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => console.log(res.data.users))
      .catch((err) => console.log(err));
  });
  return <div>User</div>;
};

export default UserListC;
