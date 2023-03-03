import { Route, Routes } from "react-router-dom";
import React from "react";
import AboutMe from "../Pages/aboutMe/aboutMe";
import Home from "../Pages/home";
import { SandBox1 } from "../Pages/sandBox1/sandBox1";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/sandbox1" element={<SandBox1 />} />
    </Routes>
  );
};

export default Rotas;
