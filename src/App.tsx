import React from "react";

// import components
import Header from "./components/header/Header";

// import pages
import Home from "./pages/home/Home";

// import styles
import "./styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
