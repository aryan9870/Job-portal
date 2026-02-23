import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  console.log(backendUrl);
  const [searchFilter, setSearchFilter] = useState({ title: "", location: "" });
  const [isSearched, setIsSearched] = useState(false);

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const [jobs, setJobs] = useState([]);


  const fetchGlobalJobs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/jobs", {withCredentials: true});
      if(data.success) {
        console.log(data);
        setJobs(data.jobs);
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  }

  const checkIsLoggedIn = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/users/is-auth', {
        withCredentials: true,
      });
      console.log(data);
      if (data.success) {
        setIsLoggedIn(true);
        setUser(data.user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      setIsLoggedIn(false);
      setUser(null);
      console.log(error.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchGlobalJobs();
    checkIsLoggedIn();
  }, []);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    showRecruiterLogin,
    setShowRecruiterLogin,
    showUserLogin,
    setShowUserLogin,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    backendUrl,
    checkIsLoggedIn,
    jobs,
    setJobs,
    fetchGlobalJobs
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
