import React from "react";
import { Link } from "react-router-dom";
import { API } from "../../../services/dataApi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const TagCard = ({ tag, apiDeleteTag }) => {
  return (
    <div className="w-40 h-60 p-2 flex flex-col justify-center items-center rounded-xl gap-3 border-black border-2 shadow-xl">
      <img
        src={`${API}/uploads/${tag.image}`}
        className="w-20 h-20 rounded-full object-cover"
        alt=""
      />
      <p>{tag.name}</p>
      <div className="flex gap-4">
        <Link to={`/admin/tags/edit/${tag._id}`}>
          <button className="text-green-600 text-2xl">
            <AiFillEdit />
          </button>
        </Link>

        <button
          className="text-red-600 text-2xl"
          onClick={() => apiDeleteTag(tag._id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default TagCard;
