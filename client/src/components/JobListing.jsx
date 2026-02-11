import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, jobsData } from '../assets/assets';
import JobCard from './JobCard';

const JobListing = () => {

    const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext);

  return (
    <div className='container px-10 mx-auto flex py-8'>
        
        {/* Side bar  */}
        <div className='w-1/4 bg-white px-4'>

            {/* Search Filter from hero component  */}
            {isSearched && (searchFilter.title != '' || searchFilter.location != '') && (
                <>
                    <h3 className='font-medium text-lg mb-4 '>Current Search</h3>
                    <div className='mb-4 text-gray-600'>
                        {searchFilter.title && (
                            <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                                {searchFilter.title}
                                <img onClick={() => {
                                    setSearchFilter((prev) => ({
                                        ...prev,
                                        title: ''
                                    }));
                                }} className='cursor-pointer' src={assets.cross_icon} alt="" />
                            </span>
                        )}
                        {searchFilter.location && (
                            <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                                {searchFilter.location}
                                <img onClick={() => {
                                    setSearchFilter((prev) => ({
                                        ...prev,
                                        location: ''
                                    }))
                                }}  className='cursor-pointer' src={assets.cross_icon} alt="" />
                            </span>
                        )}
                    </div>
                </>
            )}

            {/* Filter by categories  */}
            <div className='max-lg:hidden'>
                <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
                <ul className='space-y-4 text-gray-600'>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Programming</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Data Science</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Networking</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Designing</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Cybersecurity</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Marketing</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Management</li>
                </ul>
            </div>

            {/* Filter by locations  */}
            <div className='max-lg:hidden'>
                <h4 className='font-medium text-lg py-4 pt-14'>Search by Location</h4>
                <ul className='space-y-4 text-gray-600'>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Bangalore</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Washington</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Hyderabad</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Mumbai</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> California</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> Chennai</li>
                    <li className='flex gap-3 items-center'><input className='scale-125' type="checkbox" name="" id="" /> New York</li>
                </ul>
            </div>
        </div>

        {/* Job listings  */}
        <div className='w-3/4 text-gray-800'>
            <h3 className='font-medium text-3xl py-2' id='job-list'>Latest jobs</h3>
            <p className='mb-8'>Get your desired job from top companies</p>
            <div className='grid grid-cols-3 gap-4'>
                {jobsData.map((job, idx) => {
                    return <JobCard job={job} key={idx}/>
                })}
            </div>
        </div>


    </div>
  )
}

export default JobListing