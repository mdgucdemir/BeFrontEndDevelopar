import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Discover from "./pages/discover/Discover";
import SearchResult from "./pages/searchResult/SearchResult";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/discover/:media/:mediaType" element={<Discover />} />
          <Route path="/search/:query" element={<SearchResult />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
