import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { API } from "../services/dataApi";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);
  const getPost = async () => {
    const { data } = await axios.get(`${API}/posts/${id}`);
    setPost(data?.result);
  };
  const getPostByCat = async () => {
    const { data } = await axios.get(
      `http://13.214.58.126:3001/posts/bycat/${post?.cat}`
    );
    setPosts(data?.result);
  };
  useEffect(() => {
    getPost();
    getPostByCat();
  }, [post, posts]);
  return (
    <div className="container">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold my-3">{post?.title}</h1>
        <img
          src={`${API}/uploads/${post?.image}`}
          className="w-96 h-auto rounded my-5"
          alt=""
        />
        <p className="text-xl tracking-wider">{post?.content}</p>
        <p className="my-5 mr-auto font-bold">Date - {post?.created?.split("T")[0]}</p>
      </div>
      <h1 className="text-xl mt-10 font-semibold text-blue-600">Related News</h1>
      <div className="flex flex-wrap items-center gap-10 mt-3 mb-20">
        {posts?.map((news) => (
          <Card news={news} key={news._id} />
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
