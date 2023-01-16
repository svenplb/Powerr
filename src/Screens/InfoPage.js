import React from 'react'
import Navbar from '../Components/Navbar'
function InfoPage() {
  return (
    <div>
      <section>
      <Navbar/>
      <div className=" my-20">
        <div className='place-content-center'>
          <h1 className=" text-4xl my-8">Powerr</h1>
          <p className=''>Built by <a href='https://github.com/ThinkingSven' className=' text-skin-base underline'>Sven</a>.</p>
          <div className='my-8'>
          <p className='my-3'>Powerr is a minimal typing test with a smooth design, built with React.</p>
          <p className='my-3'> It is a "remake" of an older typing test I made a while ago called Quoteleaf, but more responsive, built with a different tech stack and built better and cleaner from a code perspective.</p>
          <p className='my-3'>This project is heavily inspired by Monkeytype and is being developed as a way for me to improve my skills with React.</p>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default InfoPage