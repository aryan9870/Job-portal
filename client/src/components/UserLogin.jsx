import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { AlertContext } from "../context/AlertContext";
import axios from "axios";

const UserLogin = () => {

  const { setShowUserLogin, setIsLoggedIn, backendUrl } = useContext(AppContext);
  const [state, setState] = useState("Login");
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);
  const { showAlert } = useContext(AlertContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === "Signup" && !isTextDataSubmited) {
        setIsTextDataSubmited(true);
      } else if (state === "Signup" && isTextDataSubmited) {
        const response = await axios.post(
          backendUrl + '/api/users/register',
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: "applicant",
          },
          {
            withCredentials: true,
          },
        );
        setIsLoggedIn(true);
        showAlert("Welcome! Account created succesfully", "success");
        setShowUserLogin(false);
      } else {
        const response = await axios.post(
          backendUrl + '/api/users/login',
          {
            email: formData.email,
            password: formData.password,
            role: "applicant",
          },
          {
            withCredentials: true,
          },
        );
        console.log("login condition", response)
        setIsLoggedIn(true);
        showAlert("Login Successful", "success");
        setShowUserLogin(false);
      }
    } catch (error) {
      showAlert(error.response?.data?.message, "error");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          User {state}
        </h1>
        <p className="text-sm">
          {state === "Login"
            ? "Welcome back! Please sign in to continue"
            : "Create your account to start applying"}
        </p>
        {state === "Signup" && isTextDataSubmited ? (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="w-16 rounded-full"
                  src={
                    formData.image
                      ? URL.createObjectURL(formData.image)
                      : assets.upload_area
                  }
                  alt=""
                />
                <input onChange={handleChange} name="image" type="file" hidden id="image" />
              </label>
              <p>
                Upload Profile <br /> image
              </p>
            </div>
          </>
        ) : (
          <>
            {state === "Signup" && (
              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.person_icon} alt="" />
                <input
                onChange={handleChange}
                  name="name"
                  className="outline-none text-sm"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} alt="" />
              <input
              onChange={handleChange}
                name="email"
                className="outline-none text-sm"
                type="email"
                placeholder="Email Id"
                required
              />
            </div>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.lock_icon} alt="" />
              <input
              onChange={handleChange}
                name="password"
                className="outline-none text-sm"
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </>
        )}
        {state === "Login" && (
          <p className="text-sm text-blue-600 mt-4 cursor-pointer">
            Forgot password?
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2  rounded-full mt-4"
        >
          {state === "Login"
            ? "login"
            : isTextDataSubmited
              ? "create account"
              : "Next"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Signup")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Alredy have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img
        onClick={() => setShowUserLogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
        />
      </form>
    </div>
  );
};

export default UserLogin;
