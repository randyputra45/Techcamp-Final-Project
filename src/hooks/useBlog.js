import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";

export default function useBlog() {
  const [blogArticle, setArticle] = useState(null);
  const [blogArticleID, setArticleID] = useState(null);
  const [blogContent, setBlogContent] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isLiked, setLiked] = useState(false);
  const [isLoadingContent] = useState(true);
  const [error, setError] = useState("");

  const { user } = useContext(UserContext);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function getArticle() {
      await axios
        .get(
          "https://rumahbercerita.netlify.app/api/blogs",
          { withCredentials: true, config }
        )
        .then((res) => {
          setArticle(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }

    getArticle();
  }, []);

  const getArticleById = async (data) => {
    return axios
      .get(
        `https://rumahbercerita.netlify.app/api${data}`,
        { withCredentials: true, config }
      )
      .then((res) => {
        setBlogContent(JSON.parse(res.data.content[0])[0]);
        setArticleID(res.data);
      })
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

  return {
    blogArticle,
    blogArticleID,
    blogContent,
    isLiked,
    getArticleById,
    isLoading,
    isLoadingContent,
    error,
  };
}
