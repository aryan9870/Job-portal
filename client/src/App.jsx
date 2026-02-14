import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Applyjob from "./pages/Applyjob";
import Applictions from "./pages/Applictions";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContext";
import UserLogin from "./components/UserLogin"


const App = () => {

  const { showRecruiterLogin, showUserLogin } = useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      {showUserLogin && <UserLogin />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/apply-job/:id" element={<Applyjob />}/>
        <Route path="/applications" element={<Applictions />}/>
      </Routes>
    </div>
  );
};

export default App;
