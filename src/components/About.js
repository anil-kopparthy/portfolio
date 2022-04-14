import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-left text-4xl font-bold'>
            <p>Currently working as Sr Software Engineer at Wells Fargo</p>
          </div>
          <div>
            <p className='leading-loose'>
              Experienced Web developer specializing in front end development
              with a demonstrated history of working on various technologies.
              Currently at Wells Fargo I'm aiding the organization in migrating
              the legacy apps to modern tech stack and pioneer newer
              technologies to remodel the architecture. Strong engineering
              professional with a Masters degree focused in Computer Science.
              <br />
              Apart from tech, I love to hike, run, play sports and stay active.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
