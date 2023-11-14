// import 'swiper/swiper.min.css';
import "./assets/boxicons-2.1.4/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';


function App() {
  
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/:category/search/:keyword' element={<Catalog />} />
        <Route path='/:category/:id' element={<Detail />} />
        <Route path='/:category' element={<Catalog />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
