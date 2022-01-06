import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";

export default function useAuth() {
  let history = useHistory();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  //set user
  const setUserContext = async () => {
    return await axios
      .get("/user", { withCredentials: true, config })
      .then((res) => {
        setUser(res.data.currentUser);
        history.push("/");
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  //register user
  const registerUser = async (data) => {
    console.log(data);
    const {
      first_name,
      last_name,
      email,
      password,
      no_telp,
    } = data;
    return axios
      .post(
        `/register`,
        {
          first_name,
          last_name,
          email,
          password,
          no_telp,
        },
        { withCredentials: true, config }
      )
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

  //login user
  const loginUser = async (data) => {
    const { email, password } = data;
    return axios
      .post("/login", {
        email,
        password,
      }, { withCredentials: true, config })
      .then(async (response) => {
        await setUserContext();
        console.log(response.data);
      })
      .catch((err) => {
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

  return {
    registerUser,
    loginUser,
    error,
  };
}
