import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { API } from "../../../services/dataApi";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cat, setCat] = useState("");
  const [tag, setTag] = useState("");
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const { id } = useParams();
  const getPost = async () => {
    const { data } = await axios.get(`${API}/posts/${id}`);
    setTitle(data?.result.title);
    setCat(data?.result.cat);
    setTag(data?.result.tag);
    setContent(data?.result.content);
  };
  const fetchCats = async () => {
    const { data } = await axios.get(`${API}/cats`);
    setCats(data?.result);
  };
  const fetchTags = async () => {
    const { data } = await axios.get(`${API}/tags`);
    setTags(data?.result);
  };
  useEffect(() => {
    getPost();
    fetchCats();
    fetchTags();
  }, []);
  const apiUpdatPost = async () => {
    const response = await fetch(`${API}/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title, content, tag, cat }),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    if (data.con) {
      setIsLoading(false);
      navigate("/admin/posts/all");
    } else {
      setIsLoading(false);
      console.log(data);
    }
  };
  const editPostHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiUpdatPost();
  };
  return (
    <form
      onSubmit={editPostHandler}
      className="bg-white w-96 text-center p-5 rounded-xl shadow-xl flex flex-col justify-center items-center gap-5"
    >
      {isLoading && <Loader />}
      <h1 className="text-green-500 text-xl">Create New Post</h1>
      <input
        type="text"
        placeholder="Title"
        className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
        defaultValue={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="w-full flex gap-3">
        <select
          id="cat"
          className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
          onChange={(e) => setCat(e.target.value)}
        >
          {cats?.map((el) => (
            <option key={el._id} value={el._id} defaultValue={el._id === cat}>
              {el.name}
            </option>
          ))}
        </select>

        <select
          id="tag"
          className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
          onChange={(e) => setTag(e.target.value)}
        >
          {tags?.map((el) => (
            <option key={el._id} value={el._id} defaultValue={el._id === tag}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
        rows="3"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <button
        type="submit"
        className="px-3 py-1 bg-green-500 text-white rounded mr-auto"
      >
        update
      </button>
    </form>
  );
};

export default EditPost;
