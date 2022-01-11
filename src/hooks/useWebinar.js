import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function useWebinar() {
  const [webinar, setWebinar] = useState(null);
  const [webinarID, setWebinarID] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("")

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function getWebinar() {
    await axios.get('/webinars', { withCredentials: true, config })
    .then(res => {
        setWebinar(res.data);
        setLoading(false);
    }).catch(err => {
        console.log(err);
        setLoading(false);
    });
    }
    
    getWebinar();  
  }, []);

  const getWebinarById = async (data) => {
    return axios
      .get(
        `${data}`,
        { withCredentials: true, config }
      ).then(res => {
          setWebinarID(res.data)
      })
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };
  
  return {
      webinar,
      webinarID,
      getWebinarById,
      isLoading,
      error
  }
}