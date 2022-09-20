import "../styles.css";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { SearchProvider } from "./context/SearchContext";
function App() {
  return (
    <>
      <SearchProvider>
        <div
          className="flex flex-col justify-between h-screen"
          data-theme="dark"
        >
          <Navbar theme="dark" />
          <main className="container mx-auto px-3 pb-5">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer theme="dark" />
        </div>
      </SearchProvider>
=======
import {Routes,Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Navbar theme="dark" />
        <main className="container mx-auto px-3 pb-5">Content</main>
        <Footer />
      </div>
>>>>>>> 3e1fdc8559caf4b45c646a9504ac1927da7cc845
    </>
  );
}

export default App;
