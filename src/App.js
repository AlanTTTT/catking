import React, { Component, useEffect } from "react";
import { Button, Navbar } from 'reactstrap';
import Row1 from "./Row1";
import Row2 from "./Row2";
import Poster from "./Carousel";
import Example from "./Cards"
import Footer from "./footer";
import Lastpart from "./Lastpart";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  
  return (
    <div className="App">
    <Navbar />
      <Row1 />
      <section style={{ backgroundColor: 'white' }}>
      <Row2 />
      </section>
      <Poster className="CatPoster" />
      <section style={{ backgroundColor: 'white', textAlign: "center" }}>
      <Example />
      </section>
      <Lastpart />
      <Footer />
    </div>
  );
}

export default App;
