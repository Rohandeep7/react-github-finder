import '../styles.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";
import {GithubProvider} from '../context/github/GithubContext'
import {AlertProvider} from '../context/alert/AlertContext'
function App() {
  return (
    <>
      <GithubProvider>
        <AlertProvider>
          <div className="flex flex-col justify-between h-screen">
            <Navbar  />
            <main className="container mx-auto px-3 pb-5">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<UserProfile/>}/>
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </AlertProvider>
      </GithubProvider>
    </>
  );
}

export default App;
