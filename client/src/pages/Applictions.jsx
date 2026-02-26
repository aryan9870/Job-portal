import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { AlertContext } from "../context/AlertContext";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Applictions = () => {
  const { backendUrl } = useContext(AppContext);
  const { showAlert } = useContext(AlertContext);
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const navigate = useNavigate();

  const fecthJobApplications = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/applications", {
        withCredentials: true,
      });
      if (data.success) {
        console.log(data.applications);
        setAppliedJobs(data.applications);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthJobApplications();
  }, []);

  const saveResume = async (e) => {
    e.preventDefault();
    console.log(resume);
    const formData = new FormData();
    formData.append("resume", resume);
    try {
      const { data } = await axios.post(
        backendUrl + "/api/users/resume",
        formData,
        { withCredentials: true },
      );
      if (data.success) {
        showAlert(data.message, "success");
        setIsEdit(false);
      }
    } catch (error) {
      showAlert(error?.responce?.data?.message, "error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container min-h-[65vh] px-4 xl:px-10 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
                  Select Resume
                </p>
                <input
                  onChange={(e) => setResume(e.target.files[0])}
                  type="file"
                  name=""
                  id="resumeUpload"
                  hidden
                />
                <img src={assets.profile_upload_icon} alt="" />
              </label>
              <button
                onClick={saveResume}
                className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg "
                href=""
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-200 rounded-lg px-4 py-2"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        {appliedJobs.length < 1 ? (
          <div className="container min-h-[50vh] flex flex-col items-center justify-center text-center mx-auto px-4">
            <h2 className="text-3xl font-bold mb-3"><i class="fa-solid fa-briefcase"></i> No Applications Yet</h2>

            <p className="text-gray-500 mb-6">
              You haven't applied to any jobs yet. Start exploring and apply
              now!
            </p>

            <button
          onClick={() => navigate("/")}
          className="px-4 py-3 mt-4 bg-black text-white rounded"
        >
          Browse Jobs
        </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
            <table className="min-w-full bg-white border rounded-lg border-gray-200">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left border-gray-200">
                    Company
                  </th>
                  <th className="py-3 px-4 border-b text-left border-gray-200">
                    Job Title
                  </th>
                  <th className="py-3 px-4 border-b text-left border-gray-200 max-sm:hidden">
                    Location
                  </th>
                  <th className="py-3 px-4 border-b text-left border-gray-200 max-sm:hidden">
                    Date
                  </th>
                  <th className="py-3 px-4 border-b text-left border-gray-200">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {appliedJobs.map((job, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-3 px-4 flex items-center gap-2 border-b border-gray-200">
                        <img
                          className="w-8 h-8"
                          src={job.job.createdBy.image}
                          alt=""
                        />
                        {job.job.createdBy.name}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 sm:text-lg text-xs">
                        {job.job.title}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 max-sm:hidden">
                        {job.job.location}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 max-sm:hidden">
                        {moment(job.createdAt).format("ll")}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        <span
                          className={`${job.status == "accepted" ? "bg-green-100" : job.status == "rejected" ? "bg-red-100" : "bg-blue-100"} px-4 py-1.5 rounded`}
                        >
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Applictions;
