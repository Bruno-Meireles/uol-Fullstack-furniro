import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About.tsx/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleProductPage" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
