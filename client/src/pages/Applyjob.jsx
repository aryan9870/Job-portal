import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import moment from "moment";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { AlertContext } from "../context/AlertContext";

const Applyjob = () => {
  const { id } = useParams();

  const { jobs, backendUrl } = useContext(AppContext);
  const { showAlert } = useContext(AlertContext);
  const [jobData, setJobData] = useState(null);
  const navigate = useNavigate();

  const fetchJob = async () => {
    const data = await jobs.filter((job) => job._id == id);
    if (data.length !== 0) {
      setJobData(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  // Same company ke aur jobs
  const sameCompanyJobs = jobData
    ? jobs
        .filter(
          (job) =>
            job.createdBy.id === jobData.createdBy.id &&
            job._id !== jobData._id,
        )
        .slice(0, 3)
    : [];

  const applyForJob = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + `/api/applications/${id}`,
        {},
        { withCredentials: true },
      );
      if (data.success) {
        showAlert(data.message, "success");
        console.log
      }
    } catch (error) {
      showAlert(error?.response?.data?.message, "error");
      if(error.response.status === 422) {
        navigate("/applications");
      }
    }
  };

  return jobData ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container px-10 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
            <div className="flex flex-row items-center">
              <img
                className="h-24 bg-white rounded-lg p-4 mr-4 boder"
                src={jobData.createdBy.image}
                alt=""
              />
              <div className="text-left text-neutral-700">
                <h1 className="text-4xl font-medium">{jobData.title}</h1>
                <div className="flex flex-row flex-wrap gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="" />
                    {jobData.createdBy.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="" />
                    {jobData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="" />
                    {jobData.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="" />
                    {jobData.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="" />
                    CTC: {jobData.salary}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-end text-sm">
              <button
                onClick={applyForJob}
                className="bg-blue-600 p-2.5 px-10 text-white rounded"
              >
                Apply Now
              </button>
              <p className="mt-1 text-gray-600">
                Posted {moment(jobData.date).fromNow()}
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between items-start">
            <div className="w-2/3">
              <h2 className="font-bold text-2xl mb-4">Job description</h2>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></div>
              <button
                onClick={applyForJob}
                className="bg-blue-600 p-2.5 px-10 text-white rounded mt-10"
              >
                Apply Now
              </button>
            </div>
            {/* Right Section | More jobs from same company */}
            <div className="w-1/3 ml-8 space-y-5">
              <h2>More jobs from {jobData.createdBy.name}</h2>
              {sameCompanyJobs.map((job, index) => {
                return <JobCard key={index} job={job} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default Applyjob;
