import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import SearchResult from "./pages/searchResult/SearchResult";
import Discover from "./pages/discover/Discover";
import NotPage from "./pages/notPage/NotPage";
import Header from "./componenets/header/Header";
import Footer from "./componenets/footer/Footer";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res)

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promise = [];
    let endPoints = [];
    let allGenres = {};

    endPoints.forEach((url) => {
      promise.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promise);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Detail />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/discover/:mediaType" element={<Discover />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
