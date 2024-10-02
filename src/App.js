import "./App.css";
import React from "react";
import { originals, action, comdey, Horror, Romance } from "./urls";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="https://github.com/ashinack/netflix_clone_react.git">
      <div className="App">
        <Navbar />
        <Banner />
        <RowPost url={originals} title="Netflix Orginals" />
        <RowPost url={action} title="Action" isSmall />
        <RowPost url={comdey} title="comdey" isSmall />
        <RowPost url={Horror} title="Horror" isSmall />
        <RowPost url={Romance} title="Romance" isSmall />
      </div>
    </BrowserRouter>
  );
}

export default App;
