import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";

export default function useLikes() {
  const [error, setError] = useState(null);
  const [likeStatus, setLiked] = useState(null);

  const { user } = useContext(UserContext);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  const checkBlogLikes = async (data, url) => {
    return axios
      .get(`https://gocure.netlify.app/api${data}`, { withCredentials: true, config })
      .then((res) => {
          const statusLiked = user.liked_blog.find(blog => blog._id === url)
          if (statusLiked !== undefined) {
            setLiked(true)
          } else {
            setLiked(false)
          }
        }
      )
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

  //register user
  const likeBlog = async (id_blog, id_user) => {
    console.log(id_blog, id_user)
    return axios
      .patch(
        `https://gocure.netlify.app/api/blogs/like`,
        { id_blog, id_user },
        { withCredentials: true, config }
      ).then(setLiked(true))
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

  //login user
  const unlikeBlog = async (id_blog, id_user) => {
    console.log(id_blog, id_user)
    return axios
      .patch(
        `https://gocure.netlify.app/api/blogs/unlike`,
        { id_blog, id_user },
        { withCredentials: true, config }
      ).then(setLiked(false))
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

  return {
    likeBlog,
    unlikeBlog,
    checkBlogLikes,
    likeStatus,
    error,
  };
}
