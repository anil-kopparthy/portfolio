import React from 'react'
import Goals from '../assets/goals.png'
import Contact from '../assets/contact-keeper.png'
import Movie from '../assets/movie.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-16 md:pt-0'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>
            Check out a few of my fun side projects apart from my work
          </p>
        </div>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* grid-item */}
          <div
            style={{ backgroundImage: `url(${Contact})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              {/* <span className='text-2xl font-bold text-white tracking-wider'></span> */}
              <div className='pt-8 text-center'>
                <a
                  href='https://contact-keeper-33046.herokuapp.com/login'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/anil-kopparthy/contact-keeper'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid-item2 */}
          <div
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  bg-cover'
            style={{ backgroundImage: `url(${Goals})` }}
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              {/* <span className='text-2xl font-bold text-white tracking-wider'></span> */}
              <div className='pt-8 text-center'>
                <a
                  href='https://goal-setter-ak.herokuapp.com/login'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/anil-kopparthy/goal-setter'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid-item3 */}
          <div
            style={{ backgroundImage: `url(${Movie})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a
                  href='https://movie-search-ak.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/anil-kopparthy/movie-watchlist'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
