// import { BrowserRouter as Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Movies from './pages/Movies';
// import Footer from "./components/Footer";
// import TvShows from './pages/TvShows';
// import Navbar from './components/Navbar';

// function App() {

//   return (
//     <>
//     <div className='bg-neutral-900 h-full'>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/tvshows" element={<TvShows />} />
//         <Route path="/movies" element={<Movies />} />
//       </Routes>
//       <Footer />
//       </div>
//     </>
//   )
// }

// export default App;



import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Footer from "./components/Footer";
import TvShows from './pages/TvShows';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className='bg-neutral-900 h-full'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

