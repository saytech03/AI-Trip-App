// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center mt-16 mr-0'>
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span>
        Curated Specially for you.
      </h1>
      <br />
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner planning trips tailored just for you!</p>
      <Link to={'/create-trip'}>
      <Button>Get Started</Button>
      </Link>
      </div>
  )
}

export default Hero