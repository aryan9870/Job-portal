import React from 'react'
import { manageJobsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ManageJobs = () => {

  const navigate = useNavigate();

  return (
    <div className='container p-4 max-w-5xl'>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b text-left border-gray-200'>#</th>
              <th className='py-2 px-4 border-b text-left border-gray-200'>Job Title</th>
              <th className='py-2 px-4 border-b text-left border-gray-200'>Date</th>
              <th className='py-2 px-4 border-b text-left border-gray-200'>Location</th>
              <th className='py-2 px-4 border-b text-center border-gray-200'>Applicants</th>
              <th className='py-2 px-4 border-b text-left border-gray-200'>Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => {
              return <tr key={index} className='text-gray-700'>
                <td className='py-2 px-4 border-b border-gray-200'>{index+1}</td>
                <td className='py-2 px-4 border-b border-gray-200'>{job.jobTitle}</td>
                <td className='py-2 px-4 border-b border-gray-200'>{job.date}</td>
                <td className='py-2 px-4 border-b border-gray-200'>{job.location}</td>
                <td className='py-2 px-4 border-b text-center border-gray-200'>{job.applicants}</td>
                <td className='py-2 px-4 border-b border-gray-200'>
                  <input className='scale-125 ml-4' type="checkbox"/>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      <div className='mt-4 flex justify-end'>
        <button onClick={() => navigate('/dashboard/add-job')} className='bg-black text-white py-2 px-4 rounded'>Add new job</button>
      </div>
    </div>
  )
}

export default ManageJobs