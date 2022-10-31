import React from "react";
import Logo from "../components/Logo";
import { AiFillHeart } from "react-icons/ai";
import { TfiFacebook } from "react-icons/tfi";
import {FiGithub, FiMail} from "react-icons/fi"
import {FaFacebookMessenger} from "react-icons/fa"

const Contact = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex justify-center items-center h-full">
        <form className="login-form md:w-550">
          <Logo />
          <h3 className="text-xl font-bold flex items-center gap-5">
            Support Me
            <AiFillHeart className="text-3xl text-red-600" />
          </h3>
          <div className="flex justify-center items-center gap-5">
            <TfiFacebook className="bg-gray-300 text-4xl p-2 rounded-full shadow-xl text-blue-600 hover:text-white hover:bg-blue-600 transition-all ease-linear duration-200" />
            <FiGithub className="bg-gray-300 text-4xl p-2 rounded-full shadow-xl text-black hover:text-white hover:bg-black transition-all ease-linear duration-200" />
            <FaFacebookMessenger className="bg-gray-300 text-4xl p-2 rounded-full shadow-xl text-blue-600 hover:text-white hover:bg-blue-600 transition-all ease-linear duration-200" />
            <FiMail className="bg-gray-300 text-4xl p-2 rounded-full shadow-xl text-black hover:text-white hover:bg-black transition-all ease-linear duration-200" />
          </div>
          <input
            className="outline-none w-full p-3 rounded"
            type="text"
            placeholder="Name"
          />
          <input
            className="outline-none w-full p-3 rounded"
            type="email"
            placeholder="Email Address"
          />
          <textarea name="" id="" rows="5" placeholder="Message" className="outline-none p-3 w-full rounded"></textarea>
          <button
            className="bg-red-600 w-full py-3 rounded text-white font-bold"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
