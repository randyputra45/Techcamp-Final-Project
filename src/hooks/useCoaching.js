import { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function useCoaching() {
  const [coaching, setCoaching] = useState(null);
  const [coachingID, setCoachingID] = useState(null);
  const [coachingContent, setCoachingContent] = useState(
    null
  );
  const [isLoading, setLoading] = useState(true);
  const [isLoadingContent] = useState(true);
  const [error, setError] = useState("");

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function getCoaching() {
      await axios
        .get(
          "https://rumahbercerita.netlify.app/api/coaching",
          { withCredentials: true, config }
        )
        .then((res) => {
          setCoaching(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    getCoaching();
  }, []);

  const getCoachingById = async (data) => {
    return axios
      .get(
        `https://rumahbercerita.netlify.app/api${data}`,
        { withCredentials: true, config }
      )
      .then((res) => {
        setCoachingContent(
          JSON.parse(res.data.content[0])[0]
        );
        setCoachingID(res.data);
      })
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

  return {
    coaching,
    coachingID,
    coachingContent,
    getCoachingById,
    isLoading,
    isLoadingContent,
    error,
  };
}
