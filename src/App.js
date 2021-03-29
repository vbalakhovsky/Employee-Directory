import React from "react";
import Engine from "./pages/Engine";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {


  return (
      <div>
        <Navbar />
        <Wrapper>
          <Engine />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;