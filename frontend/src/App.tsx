import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/pages/Shop/Shop";
import About from "./components/pages/About.tsx/About";
import Contact from "./components/pages/Contact/Contact";
import Header from "./components/ui/Header/Header";
import Footer from "./components/ui/Footer/Footer";
import Home from "./components/pages/Home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
