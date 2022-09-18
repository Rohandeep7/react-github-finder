import "../styles.css";
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
    </>
  );
}

export default App;
