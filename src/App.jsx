import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import  Faq from "./components/Faq" 




const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <div id="blog">
          <Blogs />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="faq">
        <Faq/>
      </div>
     
      </main>

      <Footer />
    </div>
  );
};

export default App;
