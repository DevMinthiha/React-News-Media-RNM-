import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../../../services/dataApi";
import PostCard from "./PostCard";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [number, setNumber] = useState(1);
  const user = useSelector((state) => state.user.value);
  const getPosts = async () => {
    const { data } = await axios.get(`${API}/posts/paginate/${number}`);
    setPosts(data?.result);
  };
  useEffect(() => {
    getPosts();
  }, [number]);
  const apiDeletePost = async (id) => {
    await axios.delete(`${API}/posts/${id}`, {
      headers: { authorization: `Bearer ${user.token}` },
    });
    getPosts();
  };
  const increasePage = () => {
    if (posts.length !== 0) setNumber((prev) => prev + 1);
  };
  const decreasePage = () => {
    if (number >= 2) setNumber((prev) => prev - 1);
  };
  return (
    <>
      <Link to="/admin/posts/add">
        <button className="bg-blue-600 px-3 py-2 text-white border-none rounded">
          Add Post
        </button>
        {posts.length === 0 && <h1 className="my-10 text-3xl text-yellow-600">Coming soon ...</h1>}
      </Link>
      <div className="flex flex-wrap items-center gap-5 my-5">
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} apiDeletePost={apiDeletePost} />
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <BiSkipPreviousCircle
          className="text-2xl text-blue-600"
          onClick={decreasePage}
        />
        <p className="font-bold">{number}</p>
        <BiSkipNextCircle
          className="text-2xl text-blue-600"
          onClick={increasePage}
        />
      </div>
    </>
  );
};

export default Posts;
