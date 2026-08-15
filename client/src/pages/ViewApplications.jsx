import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { AlertContext } from "../context/AlertContext";
import { useNavigate } from "react-router-dom";

const ViewApplications = () => {
  const { backendUrl } = useContext(AppContext);
  const { showAlert } = useContext(AlertContext);
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  const fetchApplications = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/applications/recruiter",
        { withCredentials: true },
      );
      if (data.success) {
        setApplications(data.applications);
      }
    } catch (error) {
      console.log(error.responce.data.message);
    }
  };

  const updateApplicationStatus = async (id, status) => {
    try {
      const { data } = await axios.patch(
        backendUrl + `/api/applications/${id}`,
        { status },
        { withCredentials: true },
      );
      if (data.success) {
        showAlert(data.message, "success");
        fetchApplications();
      }
    } catch (error) {
      showAlert(error?.responce?.data?.message, "error");
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return applications.length < 1 ? (
    <div className="flex justify-center items-center container p-4 max-w-5xl">
      <div className="bg-white rounded-xl max-w-lg w-full">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          No applications received yet
        </h1>

        <p className="text-gray-500 mb-6">
          Once candidates apply to your jobs, you'll see them here.
        </p>

        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="w-28 py-3 mt-4 bg-black text-white rounded"
        >
          Post a Job
        </button>
      </div>
    </div>
  ) : (
    <div className="container mx-auto p-4">
      <div>
        <table className="w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="">#</th>
              <th className="py-2 px-4 max-sm:px-2 text-left">User name</th>
              <th className="py-2 px-4 max-sm:px-2 text-left max-sm:hidden">
                Job Title
              </th>
              <th className="py-2 px-4 max-sm:px-2 text-left max-sm:hidden">
                Location
              </th>
              <th className="py-2 px-4 max-sm:px-2 text-left">Status</th>
              <th className="py-2 px-4 max-sm:px-2 text-left">Resume</th>
              <th className="py-2 px-4 max-sm:px-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => {
              return (
                <tr key={index} className="text-gray-700">
                  <td className="py-2 px-4 max-sm:px-2 border-b text-center border-gray-200">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 max-sm:px-2 border-b flex justify-center items-center border-gray-200">
                    <img
                      className="w-8 h-8 rounded-full mr-3 max-sm:hidden"
                      src={application.applicant.image || assets.upload_area}
                      alt=""
                    />
                    <span>{application.applicant.name}</span>
                  </td>
                  <td className="py-2 px-4 max-sm:px-2 border-b border-gray-200 max-sm:hidden">
                    {application.job.title}
                  </td>
                  <td className="py-2 px-4 max-sm:px-2 border-b border-gray-200 max-sm:hidden">
                    {application.job.location}
                  </td>
                  <td className="py-2 px-4 max-sm:px-2 border-b border-gray-200">
                    <span
                      className={`${application.status == "accepted" ? "bg-green-100" : application.status == "rejected" ? "bg-red-100" : "bg-blue-100"} px-2 py-1 max-sm:p-1 rounded`}
                    >
                      {application.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 max-sm:px-2 border-b border-gray-200">
                    <a
                      href={application.resume.replace(
                        "/image/upload/",
                        "/image/upload/fl_attachment/",
                      )}
                      className="bg-blue-50 text-blue-400 py-1 px-2 max-sm:p-1 rounded inline-flex gap-2 items-center"
                    >
                      Resume
                      <img
                        className="max-sm:hidden"
                        src={assets.resume_download_icon}
                        alt=""
                      />
                    </a>
                  </td>
                  <td className="py-2 px-4 max-sm:px-2 border-b relative border-gray-200">
                    <div className="relative inline-block text-left group">
                      <button className="text-gray-500 action-button text-3xl">
                        ...
                      </button>
                      <div className="z-10 hidden absolute ring-0 left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
                        <button
                          onClick={() =>
                            updateApplicationStatus(application._id, "accepted")
                          }
                          className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() =>
                            updateApplicationStatus(application._id, "rejected")
                          }
                          className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
