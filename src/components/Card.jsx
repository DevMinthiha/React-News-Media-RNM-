import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ news }) => {
  return (
    <Link to={`/post/${news._id}`}>
      <div className="card relative h-96">
        <button className="absolute top-5 right-5 bg-white rounded-full shadow-xl">
          <AiFillHeart className="text-3xl rounded-full p-1 text-gray-400" />
        </button>
        <img
          src={`http://13.214.58.126:3001/uploads/${news?.image}`}
          className="mx-auto h-40 object-cover w-full"
          alt=""
        />
        <div className="p-2">
          <h2 className="font-semibold tracking-wider my-3">{news?.title}</h2>
          <p className="text-gray-600">{news?.content.substring(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
