import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Posts from "./pages/Posts";

import CvIncPost from "./pages/posts/CvIncPost";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/posts" element={<Posts />} />

        <Route path="/posts/cv-include" element={<CvIncPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
