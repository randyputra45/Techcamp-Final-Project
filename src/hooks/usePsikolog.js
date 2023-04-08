import { useState, useEffect } from "react";
import axios from "axios";

export default function usePsikolog() {
  const [psikolog, setPsikolog] = useState(null);
  const [psikologID, setPsikologID] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function getPsikolog() {
      await axios
        .get(
          "https://rumahbercerita.netlify.app/api/experts",
          { withCredentials: true, config }
        )
        .then((res) => {
          setPsikolog(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }

    getPsikolog();
  }, []);

  const getPsikologById = async (data) => {
    return axios
      .get(
        `https://rumahbercerita.netlify.app/api${data}`,
        { withCredentials: true, config }
      )
      .then((res) => {
        setPsikologID(res.data);
      })
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

  return {
    psikolog,
    psikologID,
    getPsikologById,
    isLoading,
    error,
  };
}
