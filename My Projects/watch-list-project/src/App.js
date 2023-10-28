
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // ( BrowserRouter as ) yazarsan hata almazsin
import './App.css';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Watchlist />} />
        <Route path='/watched' element={<Watched />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
