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
      .get("https://gocure.netlify.app/api/user", { withCredentials: true, config })
      .then((res) => {
        setUser(res.data.currentUser);
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
      sex,
      birth_date
    } = data;
    return axios
      .post(
        `https://gocure.netlify.app/api/register`,
        {
          first_name,
          last_name,
          email,
          password,
          no_telp,
          sex,
          birth_date
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
      .post("https://gocure.netlify.app/api/login", {
        email,
        password,
      }, { withCredentials: true, config })
      .then(async (response) => {
        await setUserContext();
        history.push("/home");
        console.log(response.data);
      })
      .catch((err) => {
        return setError(
          JSON.stringify(err.response.data.error)
        );
      });
  };

  return {
    registerUser,
    loginUser,
    error,
  };
}