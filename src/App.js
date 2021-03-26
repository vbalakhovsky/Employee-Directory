import React from "react";
import Discover from "./pages/Discover";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {


  return (
      <div>
        <Navbar />
        <Wrapper>
          <Discover />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;