import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Applyjob from "./pages/Applyjob";
import Applictions from "./pages/Applictions";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/apply-job/:id" element={<Applyjob />}/>
        <Route path="/applications" element={<Applictions />}/>
      </Routes>
    </div>
  );
};

export default App;
