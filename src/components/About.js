import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-left text-4xl font-bold'>
            <p>Currently working as Senior Software Engineer at Wells Fargo</p>
          </div>
          <div>
            <p className='leading-loose'>
              4 years of professional web development expertise with a focus on
              front end development with a demonstrated history of working with
              a range of technologies. At Wells Fargo, I'm currently assisting
              the company in transitioning legacy apps to a modern tech stack
              and pioneering innovative technologies to remodel the
              architecture. Professional engineer with a Masters degree focused
              in Computer Science.
              <br />
              Aside from technology, I enjoy hiking, running, and staying
              active.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
