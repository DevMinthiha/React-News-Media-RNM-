import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { API } from "../../../services/dataApi";

const EditTag = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const fetchTag = async () => {
    const { data } = await axios.get(`${API}/tags/${id}`);
    setName(data?.result.name);
  };
  useEffect(() => {
    fetchTag();
  }, []);
  const apiEditTag = async () => {
    const response = await fetch(`${API}/tags/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ name }),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
    });
    const resData = await response.json();
    if (resData.con) {
      navigate("/admin/tags/all");
    } else {
      console.log(resData);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    apiEditTag();
  };
  return (
    <form onSubmit={onSubmitHandler} className="bg-white w-96 p-5 rounded-xl">
      {isLoading && <Loader />}
      <h1 className="text-green-500 text-xl my-3">Edit Tag</h1>
      <input
        type="text"
        defaultValue={name}
        className="border-2 border-gray-300 p-3 rounded-xl my-3"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-green-500 text-white rounded-xl"
      >
        update
      </button>
    </form>
  );
};

export default EditTag;
