import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About.tsx/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import SingleProductPage from "./pages/SingleProductPage";
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route
          path="/products/category/:categoryId"
          element={<ProductsByCategory />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
