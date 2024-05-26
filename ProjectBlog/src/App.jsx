import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/read/:id" element={<Article />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
