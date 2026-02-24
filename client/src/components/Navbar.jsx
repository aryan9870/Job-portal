import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { AlertContext } from "../context/AlertContext";

const Navbar = () => {
  const {
    setShowRecruiterLogin,
    setShowUserLogin,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    backendUrl,
  } = useContext(AppContext);
  const { showAlert } = useContext(AlertContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/users/logout", {
        withCredentials: true,
      });
      if (data.success) {
        // Reset frontend auth state
        setIsLoggedIn(false);
        setUser(null);
        // Redirect to home
        navigate("/");

        showAlert("Logged out successfully", "success");
      }
    } catch (error) {
      console.error("Logout failed:", error?.response?.data?.message);
      showAlert(error?.response?.data?.message, "error");

      // Even if API fails, clear frontend state
      setIsLoggedIn(false);
      setUser(null);
      navigate("/");
    }
  };

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
              {user?.role == "applicant" ? (
                <button
                  onClick={() => navigate("/applications")}
                  className="text-gray-600 cursor-pointer"
                >
                  Applied jobs
                </button>
              ) : (
                <button
                  onClick={() => navigate("/dashboard")}
                  className="text-gray-600 cursor-pointer"
                >
                  Dashboard
                </button>
              )}
              <div className="relative group">
                <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full">
                  <img className="w-full h-full rounded-full" src={user?.image || assets.upload_area } alt="" />
                </button>
                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12 ">
                  <ul className="list-none m-0 p-2 bg-white rounded-md border border-gray-300 text-sm">
                    <li
                      onClick={logout}
                      className="py-1 px-2 cursor-pointer pr-10"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
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
