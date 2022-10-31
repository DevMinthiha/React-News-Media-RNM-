import React from "react";
import { API } from "../../../services/dataApi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const PostCard = ({ post, apiDeletePost }) => {
  return (
    <div className="w-40 h-60 p-2 flex flex-col justify-center items-center rounded-xl gap-3 border-black border-2 shadow-xl">
      <img
        src={`${API}/uploads/${post.image}`}
        className="w-20 h-20 rounded-full object-cover"
        alt=""
      />
      <h2>{post.title.slice(0, 20)}...</h2>
      <div className="flex gap-4">
        <Link to={`/admin/posts/edit/${post._id}`}>
          <button className="text-green-600 text-2xl">
            <AiFillEdit />
          </button>
        </Link>

        <button className="text-red-600 text-2xl" onClick={() => apiDeletePost(post._id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
