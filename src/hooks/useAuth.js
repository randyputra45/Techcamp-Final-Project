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
      .get("https://rumahbercerita.netlify.app/api/user", {
        withCredentials: true,
        config,
      })
      .then((res) => {
        setUser(res.data.currentUser);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  //register user
  const registerUser = async (data) => {
    const { first_name, last_name, no_telp, email, sex, birth_date, password } = data;
    try {
      let res = await axios
      .post(
        `https://rumahbercerita.netlify.app/api/register`,
        {
          first_name,
          last_name,
          email,
          password,
          no_telp,
          sex,
          birth_date,
        },
        { withCredentials: true, config }
      )
      console.log(res)
      if (res.status === 200) {
        history.push({
          pathname: "/register/checkemail",
          state: {email: email}
        })
      };
    } catch (err) {
      return setError(
        JSON.stringify(err.response.data.message)
      );
    }
  };

  //login user
  const loginUser = async (data) => {
    const { email, password } = data;
    return axios
      .post(
        "https://rumahbercerita.netlify.app/api/login",
        {
          email,
          password,
        },
        { withCredentials: true, config }
      )
      .then(async (response) => {
        await setUserContext();
        return true
      })
      .catch((err) => {
        return err.response.data.message
      });
  };

  //forgot password
  const forgotPassword = async (data) => {
    const { email } = data;
    return axios
      .post(
        "https://rumahbercerita.netlify.app/api/forgotpassword",
        {
          email,
        },
        { withCredentials: true, config }
      )
      .then(async (response) => {
        setError(
          "Email sent! Please wait mail for several minutes"
        );
      })
      .catch((err) => {
        return setError(
          JSON.stringify(err.response.data.error)
        );
      });
  };

  //reset password
  const resetPassword = async (data, url) => {
    return axios
      .put(
        `https://rumahbercerita.netlify.app/api${url}`,
        {
          password: data,
        },
        { withCredentials: true, config }
      )
      .catch((err) => {
        return setError(
          JSON.stringify(err.response.data.error)
        );
      });
  };

  //edit user profile
  const editUser = async (data, url) => {
    return axios
      .patch(
        `https://rumahbercerita.netlify.app/api${url}`,
        {
          data,
        },
        { withCredentials: true, config }
      )
      .catch((err) => {
        return setError(
          JSON.stringify(err.response.data.error)
        );
      });
  };

  return {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
    editUser,
    error,
  };
}
