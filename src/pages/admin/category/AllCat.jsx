import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { API } from "../../../services/dataApi";
import CatCard from "./CatCard";

const AllCat = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user.value);
  const fetchCats = async () => {
    const { data } = await axios.get(`${API}/cats`);
    setCategories(data?.result);
    setIsLoading(false)
  };
  useEffect(() => {
    fetchCats();
    setIsLoading(true);
  }, []);
  const apiCatDelete = async (id) => {
    const { data } = await axios.delete(`${API}/cats/${id}`, {
      headers: { authorization: `Bearer ${user.token}` },
    });
    fetchCats();
  };
  return (
    <>
      <Link to="/admin/cats/add">
        <button className="bg-blue-600 px-3 py-2 text-white border-none rounded">
          Add Category
        </button>
      </Link>
      {isLoading && <Loader />}
      <div className="flex flex-wrap items-center gap-5 my-5">
        {categories?.map((cat) => (
          <CatCard key={cat._id} cat={cat} apiCatDelete={apiCatDelete} />
        ))}
      </div>
    </>
  );
};

export default AllCat;
