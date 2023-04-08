import { useHistory } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function useLogout() {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  const logoutUser = async () => {
    try {
      await axios
        .get(
          "https://rumahbercerita.netlify.app/api/logout",
          { withCredentials: true, config }
        )
        .then((res) => {
          console.log(res);
          setUser(false);
          history.push("/");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    logoutUser,
  };
}
