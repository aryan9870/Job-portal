import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { setShowRecruiterLogin, setShowUserLogin, isLoggedIn } =
    useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="shadow py-4">
      <div className="container px-10 mx-auto flex justify-between items-center">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer"
          src={assets.logo}
          alt=""
        />
        <div className="flex gap-4">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => navigate('/applications')}
                className="text-gray-600 cursor-pointer"
              >
                Applied jobs
              </button>
              <button
                className="bg-purple-900 cursor-pointer text-white flex items-center justify-center w-10 h-10 rounded-full"
              >
                A
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowRecruiterLogin(true)}
                className="text-gray-600 cursor-pointer"
              >
                Recruiter Login
              </button>
              <button
                onClick={() => setShowUserLogin(true)}
                className="bg-blue-600 cursor-pointer text-white px-9 py-2 rounded-full"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
