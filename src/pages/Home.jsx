import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import Extra from "../components/Extra";

const Home = () => {
  return (
    <div className="container relative">
      <Navbar />
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold tracking-wider bg-black text-white px-4 py-1 rounded-full shadow-xl">
          Latest News
        </h2>
        <p className="text-sm text-gray-500 cursor-pointer underline">
          Read More
        </p>
      </div>
      <div className="flex justify-center md:justify-start items-center gap-10 flex-wrap mt-3 mb-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold tracking-wider bg-black text-white px-4 py-1 rounded-full shadow-xl">
          Hot News
        </h2>
        <p className="text-sm text-gray-500 cursor-pointer underline">
          Read More
        </p>
      </div>
      <div className="flex justify-center md:justify-start items-center gap-10 flex-wrap mt-3 mb-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Extra />
      <Link to="/contact">
        <button className="fixed right-8 bottom-20">
          <MdMessage className="text-3xl text-blue-600" />
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
