import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, categories, locations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);  // remove this - step 1 
  
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleLocationChange = (location) => {
    setSelectedLocations((prev) => {
      if (prev.includes(location)) {
        return prev.filter((l) => l !== location);
      } else {
        return [...prev, location];
      }
    });
  };

  useEffect(() => {
    setFilteredJobs(jobs);
    let tempJobs = jobs;

    // Title Search Filter
    if (searchFilter.title !== "") {
      tempJobs = tempJobs.filter((job) =>
        job.title.toLowerCase().includes(searchFilter.title.toLowerCase()),
      );
    }

    // Location Search (hero input wala)
    if (searchFilter.location !== "") {
      tempJobs = tempJobs.filter((job) =>
        job.location
          .toLowerCase()
          .includes(searchFilter.location.toLowerCase()),
      );
    }

    // Category Checkbox Filter
    if (selectedCategories.length > 0) {
      tempJobs = tempJobs.filter((job) =>
        selectedCategories.includes(job.category),
      );
    }

    // Sidebar Location Checkbox Filter
    if (selectedLocations.length > 0) {
      tempJobs = tempJobs.filter((job) =>
        selectedLocations.includes(job.location),
      );
    }

    setFilteredJobs(tempJobs);
  }, [searchFilter, selectedCategories, selectedLocations, jobs]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; // 6 jobs per page

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="container px-10 mx-auto flex py-8">
      {/* Side bar  */}
      <div className="w-1/4 bg-white px-4">
        {/* Search Filter from hero component  */}
        {isSearched &&
          (searchFilter.title != "" || searchFilter.location != "") && (
            <>
              <h3 className="font-medium text-lg mb-4 ">Current Search</h3>
              <div className="mb-4 text-gray-600">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      onClick={() => {
                        setSearchFilter((prev) => ({
                          ...prev,
                          title: "",
                        }));
                      }}
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded">
                    {searchFilter.location}
                    <img
                      onClick={() => {
                        setSearchFilter((prev) => ({
                          ...prev,
                          location: "",
                        }));
                      }}
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
              </div>
            </>
          )}

        {/* Filter by categories  */}
        <div className="max-lg:hidden">
          <h4 className="font-medium text-lg py-4">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {categories.map((category, index) => {
              return (
                <li key={index} className="flex gap-3 items-center">
                  <input
                    onClick={(e) => handleCategoryChange(category)}
                    className="scale-125"
                    type="checkbox"
                    name={category}
                    id=""
                  />{" "}
                  {category}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Filter by locations  */}
        <div className="max-lg:hidden">
          <h4 className="font-medium text-lg py-4 pt-14">Search by Location</h4>
          <ul className="space-y-4 text-gray-600">
            {locations.map((location, index) => {
              return (
                <li key={index} className="flex gap-3 items-center">
                  <input
                    onClick={(e) => handleLocationChange(location)}
                    className="scale-125"
                    type="checkbox"
                    name={location}
                    id=""
                  />{" "}
                  {location}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Job listings  */}
      <div className="w-3/4 text-gray-800">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest jobs
        </h3>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-3 gap-4">
          {currentJobs.map((job, idx) => {
            return <JobCard job={job} key={idx} />;
          })}
        </div>
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 text-gray-500 rounded disabled:opacity-50"
          >
            <img src={assets.left_arrow_icon} alt="" />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 border border-gray-300 rounded ${
                currentPage === index + 1
                  ? "bg-blue-100 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === Math.ceil(jobs.length / jobsPerPage)}
            className="px-4 py-2 border border-gray-300 text-gray-500 rounded disabled:opacity-50"
          >
            <img src={assets.right_arrow_icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
