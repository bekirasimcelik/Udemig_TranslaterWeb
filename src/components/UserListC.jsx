import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUser } from "../redux/slices/classicSlice";

const UserListC = () => {
  const state = useSelector((store) => store.classicReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    axios
      .get("https://dummyjson.com/users")
      .then((res) => dispatch(setUser(res.data.users)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  console.log(state);

  return <div>User</div>;
};

export default UserListC;
