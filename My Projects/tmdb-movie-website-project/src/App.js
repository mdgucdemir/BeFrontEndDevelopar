
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Discover from './pages/discover/Discover';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/discover' element={<Discover />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
