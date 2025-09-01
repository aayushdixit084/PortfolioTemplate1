import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";
import SupportUs from "./components/Supportus";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <SupportUs />
      <Footer/>
    </div>
  );
}

export default App;
