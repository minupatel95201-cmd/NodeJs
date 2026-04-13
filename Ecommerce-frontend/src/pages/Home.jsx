import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='w-full h-screen flex items-center justify-center'>
        <Link to='/login'>
        <button className='w-full rounded-2xl text-white bg-black'><Link to="/JoinUs">Go To Login Page</Link></button>
        </Link>
    </div>
    
    </>
  )
}

export default Home