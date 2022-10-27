import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Card = () => {
  return (
    <div className="card relative">
      <button className="absolute top-5 right-5">
        <AiFillHeart className="text-3xl rounded-full p-1 text-gray-400" />
      </button>
      <img
        src="https://i.pinimg.com/236x/1e/9c/7a/1e9c7aa26a8da5152913243acfe1609c.jpg"
        className="mx-auto h-40 object-cover w-full"
        alt=""
      />
      <div className="p-2">
        <h2 className="font-semibold tracking-wider my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing eli vel.
        </h2>
        <p className="text-gray-700 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing el! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Temporibus, ducimus!
        </p>
      </div>
    </div>
  );
};

export default Card;
