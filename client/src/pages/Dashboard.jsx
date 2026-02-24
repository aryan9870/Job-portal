import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AlertContext } from "../context/AlertContext";
import axios from "axios";

const Dashboard = () => {
  const { setIsLoggedIn, user, setUser, backendUrl } = useContext(AppContext);
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
    <div className="min-h-screen">
      {/* Navbar for recuriter panel */}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer"
            src={assets.logo}
            alt=""
          />
          <div className="flex items-center gap-3">
            <p className="">Welcome, {user?.name}</p>
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full"
                src={user?.image || assets.upload_area}
                alt=""
              />
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
          </div>
        </div>
      </div>
      <div className="flex items-start">
        {/* Left sidebar with options to add job, manage job, view applications */}
        <div className="inline-block min-h-screen border-r-2 w-[14%] border-gray-300">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 gap-2 w-full hover:bg-gray-100 ${isActive && "bg-blue-100 border-r-4 border-blue-500"}`
              }
              to={"/dashboard/add-job"}
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p>Add Job</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 gap-2 w-full hover:bg-gray-100 ${isActive && "bg-blue-100 border-r-4 border-blue-500"}`
              }
              to={"/dashboard/manage-jobs"}
            >
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p>Manage Jobs</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 gap-2 w-full hover:bg-gray-100 ${isActive && "bg-blue-100 border-r-4 border-blue-500"}`
              }
              to={"/dashboard/view-applications"}
            >
              <img className="min-w-4" src={assets.person_tick_icon} alt="" />
              <p>View Jobs</p>
            </NavLink>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
