import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='shadow py-4'>
        <div className='container px-10 mx-auto flex justify-between items-center'>
            <img onClick={() => navigate("/")} className='cursor-pointer' src={assets.logo} alt="" />
            <div className='flex gap-4'>
                <button className='text-gray-600 cursor-pointer'>Recruiter Login</button>
                <button className='bg-blue-600 cursor-pointer text-white px-9 py-2 rounded-full'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar