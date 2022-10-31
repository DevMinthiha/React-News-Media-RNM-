import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API } from "../../../services/dataApi";
import Loader from "../../../components/Loader/Loader";

const AddCat = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const apiAddCat = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    const response = await fetch(`${API}/cats`, {
      method: "POST",
      body: formData,
      headers: { authorization: `Bearer ${user.token}` },
    });
    const resData = await response.json();
    if (resData.con) {
      setIsLoading(false);
      navigate("/admin/cats/all");
    } else {
      setIsLoading(false);
      console.log(resData.msg);
    }
  };
  const addCatHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiAddCat();
  };
  return (
    <form
      onSubmit={addCatHandler}
      className="bg-white w-96 text-center p-5 rounded-xl shadow-xl flex flex-col justify-center items-center gap-5"
    >
      {isLoading && <Loader />}
      <h1 className="text-blue-500 text-xl">Create New Category</h1>
      <input
        type="text"
        placeholder="Name"
        className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="file"
        className="bg-transparent outline-none border-gray-300 border-2 p-2 w-full rounded-xl"
        required
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

export default AddCat;
