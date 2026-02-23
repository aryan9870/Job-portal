import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import moment from "moment";
import { AlertContext } from "../context/AlertContext";

const ManageJobs = () => {
  const { backendUrl, fetchGlobalJobs } = useContext(AppContext);
  const { showAlert } = useContext(AlertContext);
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/jobs/recruiter", {
        withCredentials: true,
      });
      if (data.success) {
        setJobs(data.jobs.reverse());
      }
    } catch (error) {
      console.log(error?.responce?.data?.message);
    }
  };

  const toggleVisibility = async (id) => {
    try {
      const { data } = await axios.patch(
        backendUrl + `/api/jobs/${id}`,
        {},
        { withCredentials: true },
      );
      if (data.success) {
        showAlert(data.message, "success");
        fetchJobs();
        fetchGlobalJobs();
      }
    } catch (error) {
      showAlert(error?.responce?.data?.message, "error");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return jobs.length < 1 ? (
    <div className="flex justify-center items-center container p-4 max-w-5xl">
      <div className="bg-white rounded-xl max-w-lg w-full">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          No jobs posted yet
        </h1>

        <p className="text-gray-500 mb-6">
          Start hiring by posting your first job.
        </p>

        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="px-4 py-3 mt-4 bg-black text-white rounded"
        >
          Add Your First Job
        </button>
      </div>
    </div>
  ) : (
    <div className="container p-4 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left border-gray-200">
                #
              </th>
              <th className="py-2 px-4 border-b text-left border-gray-200">
                Job Title
              </th>
              <th className="py-2 px-4 border-b text-left border-gray-200">
                Date
              </th>
              <th className="py-2 px-4 border-b text-left border-gray-200">
                Location
              </th>
              <th className="py-2 px-4 border-b text-center border-gray-200">
                Applicants
              </th>
              <th className="py-2 px-4 border-b text-left border-gray-200">
                Visible
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => {
              return (
                <tr key={job._id} className="text-gray-700">
                  <td className="py-2 px-4 border-b border-gray-200">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {job.title}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {moment(job.date).format("DD MMM YYYY")}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {job.location}
                  </td>
                  <td className="py-2 px-4 border-b text-center border-gray-200">
                    {job.applicantsCount}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <input
                      checked={job.visible}
                      onChange={() => toggleVisibility(job._id)}
                      className="scale-125 ml-4"
                      type="checkbox"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="bg-black text-white py-2 px-4 rounded"
        >
          Add new job
        </button>
      </div>
    </div>
  );
};

export default ManageJobs;
