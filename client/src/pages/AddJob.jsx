import React, { useContext } from "react";
import { useState, useEffect, useRef } from "react";
import { categories, locations } from "../assets/assets";
import Quill from "quill";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { AlertContext } from "../context/AlertContext";

const AddJob = () => {
  const { backendUrl } = useContext(AppContext);
  const { showAlert } = useContext(AlertContext);
  const [formData, setFormData] = useState({
    title: "",
    location: "Banglore",
    category: "Programming",
    level: "Beginner level",
    salary: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write job description...",
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const description = quillRef.current.root.innerHTML;

    const finalData = {
      ...formData,
      description,
    };

    console.log(finalData);

    try {
      const { data } = await axios.post(backendUrl + "/api/jobs", finalData, {
        withCredentials: true,
      });
      if (data.success) {
        showAlert(data.message, "success");
        setFormData({
          title: "",
          location: "Banglore",
          category: "Programming",
          level: "Beginner level",
          salary: 0,
        });
        quillRef.current.root.innerHTML = "";
      }
    } catch (error) {
      showAlert(error.response?.data?.message, "error");
    }
  };

  return (
    <form
      action=""
      className="container p-4 flex flex-col w-full items-start gap-3"
    >
      <div className="w-full">
        <p className="mb-2">Job Title</p>
        <input
          name="title"
          onChange={handleChange}
          value={formData.title}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="my-2">Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div className="flex flex-row w-full gap-8">
        <div>
          <p className="mb-2">Job Category</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p className="mb-2">Job Location</p>
          <select
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            {locations.map((location, index) => {
              return (
                <option key={index} value={location}>
                  {location}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p className="mb-2">Job Level</p>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded"
          >
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
      </div>

      <div>
        <p className="mb-2">Job Salary</p>
        <input
          className="w-full px-3 py-2 border-2 border-gray-300 rounded"
          name="salary"
          onChange={handleChange}
          value={formData.salary}
          type="number"
          placeholder="30000"
          min={0}
        />
      </div>

      <button
        className="w-28 py-3 mt-4 bg-black text-white rounded"
        onClick={handleSubmit}
      >
        ADD
      </button>
    </form>
  );
};

export default AddJob;
