import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='name' className='w-full h-screen bg-[#0a192f]'>
      
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600 text-2xl'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Orem Gitonga</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I'm a full-stack developer specializing in building and occasionally
            designing exceptional experiences. I'm focused on building full-stack
            web apps with integrated technologies like Airtificial Intelligence and
            Blockchain. Before I forget, I am a long-life learner.
        </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500'>View Projects 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
            </button>
        </div>
      </div>

    </div>
  )
}

export default Home
