import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import Extra from "../components/Extra";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../services/dataApi";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [hotNews, setHotNews] = useState([]);
  const [international, setInternational] = useState([]);
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const getHotNews = async () => {
    const { data } = await axios.get(
      `http://13.214.58.126:3001/posts/bytag/635eefd402e3e94e7b32d065`
    );
    setHotNews(data?.result);
    setIsLoading(false);
  };
  const getInternationalNews = async () => {
    const { data } = await axios.get(
      `http://13.214.58.126:3001/posts/bytag/635eefff02e3e94e7b32d06f`
    );
    setInternational(data?.result);
    setIsLoading(false);
  };
  const fetchCats = async () => {
    const { data } = await axios.get(`${API}/cats`);
    setCats(data?.result);
    setIsLoading(false);
  };
  const searchByCat = async () => {
    const { data } = await axios.get(
      `http://13.214.58.126:3001/posts/bycat/${search}`
    );
    setFiltered(data?.result);
    setIsLoading(false);
  };
  useEffect(() => {
    searchByCat();
  }, [search]);
  useEffect(() => {
    setIsLoading(true);
    getHotNews();
    getInternationalNews();
    fetchCats();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container relative">
          <Navbar />
          <div className="flex flex-wrap gap-5 mb-10">
            <button
              onClick={() => setFiltered(null)}
              className="text-sm bg-red-600 text-white px-3 py-1 rounded-full"
            >
              Home Page
            </button>
            {cats
              ?.map((cat) => (
                <button
                  key={cat._id}
                  className="text-sm bg-red-600 text-white px-3 py-1 rounded-full"
                  onClick={() => setSearch(cat._id)}
                >
                  {cat.name}
                </button>
              ))}
          </div>
          <div className="flex justify-center md:justify-start items-center gap-10 flex-wrap mt-3">
            {filtered && filtered?.map((el) => <Card key={el._id} news={el} />)}
          </div>
          {!filtered && (
            <>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold tracking-wider bg-black text-white px-4 py-1 rounded-full shadow-xl">
                  Hot
                </h2>
                <button
                  onClick={() => setShow(!show)}
                  className="text-sm text-gray-500 cursor-pointer underline"
                >
                  Read More
                </button>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-10 flex-wrap mt-3 mb-10">
                {show &&
                  hotNews?.map((news) => <Card news={news} key={news._id} />)}
                {!show &&
                  hotNews
                    ?.map((news) => <Card news={news} key={news._id} />)
                    .splice(0, 4)}
              </div>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold tracking-wider bg-black text-white px-4 py-1 rounded-full shadow-xl">
                  International
                </h2>
                {/* <button
                  onClick={() => setShow(true)}
                  className="text-sm text-gray-500 cursor-pointer underline"
                >
                  Read More
                </button> */}
              </div>
              <div className="flex justify-center md:justify-start items-center gap-10 flex-wrap mt-3 mb-10">
                {!show &&
                  international
                    ?.map((news) => <Card news={news} key={news._id} />)
                    .splice(0, 4)}
                {show &&
                  international?.map((news) => (
                    <Card news={news} key={news._id} />
                  ))}
              </div>
            </>
          )}

          <Extra />
          <Link to="/contact">
            <button className="fixed right-8 bottom-20">
              <MdMessage className="text-3xl text-blue-600" />
            </button>
          </Link>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
