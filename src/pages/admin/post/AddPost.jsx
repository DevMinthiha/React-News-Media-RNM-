import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API } from "../../../services/dataApi";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [cat, setCat] = useState("");
  const [tag, setTag] = useState("");
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();

  const fetchCats = async () => {
    const { data } = await axios.get(`${API}/cats`);
    setCats(data?.result);
  };
  const fetchTags = async () => {
    const { data } = await axios.get(`${API}/tags`);
    setTags(data?.result);
  };
  useEffect(() => {
    fetchCats();
    fetchTags();
  }, []);

  const apiAddPost = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);
    formData.append("cat", cat);
    formData.append("tag", tag);
    const { data } = await axios.post(`${API}/posts`, formData, {
      headers: { authorization: `Bearer ${user.token}` },
    });
    if (data.con) {
      setIsLoading(false);
      navigate("/admin/posts/all");
    } else {
      setIsLoading(false);
      console.log(data);
    }
  };

  const addPostHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiAddPost();
  };

  return (
    <form
      onSubmit={addPostHandler}
      className="bg-white w-96 text-center p-5 rounded-xl shadow-xl flex flex-col justify-center items-center gap-5"
    >
      <h1 className="text-blue-500 text-xl">Create New Post</h1>
      <input
        type="text"
        placeholder="Title"
        className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="w-full flex gap-3">
        <select
          id="cat"
          className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
          onChange={(e) => setCat(e.target.value)}
        >
          <option disabled defaultValue={true}>
            Categories
          </option>
          {cats?.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select
          id="tag"
          className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
          onChange={(e) => setTag(e.target.value)}
        >
          <option disabled defaultValue={true}>
            Tags
          </option>
          {tags?.map((tag) => (
            <option key={tag._id} value={tag._id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
        rows="3"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <input
        type="file"
        className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-blue-500 text-white rounded mr-auto"
      >
        create
      </button>
    </form>
  );
};

export default AddPost;
