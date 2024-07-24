// import { useState } from 'react';
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from "./Home";
import Movies from "./Movies";

import Footer from "./components/Footer";
import Tvshow from "./Tvshow";
import Navbar from './components/Navbar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<Tvshow />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
