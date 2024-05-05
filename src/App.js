import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Rover from "./components/Rover";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route Component={Home} path="/home" exact />
          <Route Component={NasaPhoto} path="/nasaphoto" />
          <Route Component={Login} path="/" />
          <Route Component={Footer} path="/footer" />
          <Route Component={Loading} path="/loading" />
          <Route Component={Rover} path="/rover" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
