import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditCat = () => {
  const { id } = useParams();
  const [cat, setCat] = useState({});
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const fetchCat = async () => {
    const res = await fetch(`http://13.214.58.126:3001/cats/${id}`);
    const data = await res.json();
    setCat(data?.result);
  };
  useEffect(() => {
    fetchCat();
  }, []);
  const apiUpdateCat = async () => {
    const res = await fetch(`http://13.214.58.126:3001/cats/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ name }),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
    });
    const data = await res.json();
    if (data.con) {
      setIsLoading(false);
      navigate("/admin/cats/all");
    } else {
      setIsLoading(false);
      console.log(data);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiUpdateCat();
  };
  return (
    <form onSubmit={onSubmitHandler} className="bg-white w-96 p-5 rounded-xl">
      <h1 className="text-green-500 text-xl my-3">Edit Category</h1>
      <input
        type="text"
        defaultValue={cat.name}
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

export default EditCat;
