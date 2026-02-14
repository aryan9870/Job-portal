import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import { assets, jobsApplied } from '../assets/assets';
import Footer from '../components/Footer'

const Applictions = () => {

  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);


  return (
    <>
        <Navbar />
        <div className='container min-h-[65vh] px-10 mx-auto my-10'>
          <h2 className='text-xl font-semibold'>Your Resume</h2>
          <div className='flex gap-2 mb-6 mt-3'>
            { isEdit ? <>
                <label className='flex items-center' htmlFor="resumeUpload">
                  <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
                  <input onChange={e => setResume(e.target.files[0])} type="file" name="" id="resumeUpload" hidden/>
                  <img src={assets.profile_upload_icon} alt="" />
                </label>
                <button onClick={(e) => setIsEdit(false)} className='bg-green-100 border border-green-400 rounded-lg px-4 py-2'>Save</button>
            </> : <div className='flex gap-2'>
              <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg ' href="">Resume</a>
              <button onClick={() => setIsEdit(true)} className='text-gray-500 border border-gray-200 rounded-lg px-4 py-2'>Edit</button>
              </div>}
          </div>
          <h2 className='text-xl font-semibold mb-4'>Jobs Applied</h2>
          <table className='min-w-full bg-white border rounded-lg border-gray-200'>
            <thead>
              <tr>
                <th className='py-3 px-4 border-b text-left border-gray-200'>Company</th>
                <th className='py-3 px-4 border-b text-left border-gray-200'>Job Title</th>
                <th className='py-3 px-4 border-b text-left border-gray-200'>Location</th>
                <th className='py-3 px-4 border-b text-left border-gray-200'>Date</th>
                <th className='py-3 px-4 border-b text-left border-gray-200'>Status</th>
              </tr>
            </thead>
            <tbody>
              {jobsApplied.map((job, index) => {
                return <tr key={index}>
                  <td className='py-3 px-4 flex items-centergap-2 border-b border-gray-200'>
                    <img className='w-8 h-8' src={job.logo} alt="" />
                    {job.company}
                  </td>
                  <td className='py-2 px-4 border-b border-gray-200'>{job.title}</td>
                  <td className='py-2 px-4 border-b border-gray-200'>{job.location}</td>
                  <td className='py-2 px-4 border-b border-gray-200'>{job.date}</td>
                  <td className='py-2 px-4 border-b border-gray-200'>
                    <span className={`${job.status == "Interview" ? 'bg-green-100' : job.status == "Rejected" ? 'bg-red-100' : 'bg-blue-100' } px-4 py-1.5 rounded`}>{job.status}</span>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <Footer />
    </>
  )
}

export default Applictions