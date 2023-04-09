import { useState, useEffect } from "react";
import axios from "axios";

export default function useVideo() {
  const [video, setVideo] = useState(null);
  const [videoID, setVideoID] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function getVideo() {
      await axios
        .get(
          "https://rumahbercerita.netlify.app/api/videos",
          { withCredentials: true, config }
        )
        .then((res) => {
          setVideo(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }

    getVideo();
  }, []);

  const getVideoById = async (data) => {
    return axios
      .get(
        `https://rumahbercerita.netlify.app/api${data}`,
        { withCredentials: true, config }
      )
      .then((res) => {
        setVideoID(res.data);
      })
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

  return {
    video,
    videoID,
    getVideoById,
    isLoading,
    error,
  };
}
