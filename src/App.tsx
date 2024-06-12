import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="We Can Solve your 101% Problems with our Designs."
        />
        <meta property="og:image" content="/images/social-cover.png" />
        <meta property="og:url" content="https://doxdesigner.netlify.app/" />
      </Helmet>
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
    </HelmetProvider>
  );
}

export default App;
