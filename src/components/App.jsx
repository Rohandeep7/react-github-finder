import "../styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import {GithubProvider} from '../context/GithubContext'
function App() {
  return (
    <>
      <GithubProvider>
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
      </GithubProvider>
    </>
  );
}

export default App;
