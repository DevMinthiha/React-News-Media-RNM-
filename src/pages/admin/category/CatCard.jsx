import React from "react";
import { API } from "../../../services/dataApi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const CatCard = ({ cat, apiCatDelete }) => {
  return (
    <div className="w-40 h-60 p-2 flex flex-col justify-center items-center rounded-xl gap-3 border-black border-2 shadow-xl">
      <img
        src={`${API}/uploads/${cat.image}`}
        className="w-20 h-20 rounded-full object-cover"
        alt=""
      />
      <p>{cat.name}</p>
      <div className="flex gap-4">
        <Link to={`/admin/cats/edit/${cat._id}`}>
          <button className="text-green-600 text-2xl">
            <AiFillEdit />
          </button>
        </Link>

        <button
          className="text-red-600 text-2xl"
          onClick={() => apiCatDelete(cat._id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default CatCard;
