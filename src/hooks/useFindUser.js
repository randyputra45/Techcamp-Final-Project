import { useState, useEffect } from "react";
import axios from "axios";

export default function useFindUser() {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function findUser() {
      await axios
        .get(
          "https://rumahbercerita.netlify.app/api/user",
          { withCredentials: true, config }
        )
        .then((res) => {
          setUser(res.data.currentUser);
          setLoading(false);
        })
        .then(
          axios
            .get(
              "https://rumahbercerita.netlify.app/api/users",
              {
                withCredentials: true,
                config,
              }
            )
            .then((res) => {
              setAllUser(res.data);
            })
        )
        .catch((err) => {
          setError(err.response.data);
        });
    }
    findUser();
  }, []);

  return {
    user,
    allUsers,
    setUser,
    isLoading,
  };
}
