import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../../../services/dataApi";
import TagCard from "./TagCard";

const AllTag = () => {
  const [tags, setTags] = useState([]);
  const user = useSelector((state) => state.user.value);
  const fetchTags = async () => {
    const { data } = await axios.get(`${API}/tags`);
    setTags(data?.result);
  };
  const apiDeleteTag = async (id) => {
    await axios.delete(`${API}/tags/${id}`, {
      headers: { authorization: `Bearer ${user.token}` },
    });
    fetchTags();
  };
  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <>
      <Link to="/admin/tags/add">
        <button className="bg-blue-600 px-3 py-2 text-white border-none rounded">
          Add Tag
        </button>
      </Link>
      <div className="flex flex-wrap items-center gap-5 my-5">
        {tags?.map((tag) => (
          <TagCard tag={tag} key={tag._id} apiDeleteTag={apiDeleteTag} />
        ))}
      </div>
    </>
  );
};

export default AllTag;
