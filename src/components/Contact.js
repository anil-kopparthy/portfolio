import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const validateForm = () => {
    if (!name || !email || !message || !email.includes('@')) {
      setShowAlert(true)
      return false
    }
    return true
  }

  const handleForm = async e => {
    e.preventDefault()
    if (validateForm()) {
      const formData = {
        name,
        email,
        message
      }
      await axios.post(
        'https://getform.io/f/fbda7775-904b-40e4-9516-14057be286c0',
        formData
      )
      setName('')
      setEmail('')
      setMessage('')
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } else {
      setFormError(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 5000)
    }
  }
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
    >
      <form
        action='https://getform.io/f/fbda7775-904b-40e4-9516-14057be286c0'
        target='_blank'
        method='POST'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Reach out if you want to learn more about my work or simply have a
            chat over coffee.
          </p>
        </div>
        <input
          className='p-2 bg-[#ccd6f6] outline-none'
          type='text'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6] outline-none'
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          className='p-2 bg-[#ccd6f6] outline-none'
          name='message'
          rows='10'
          placeholder='Message'
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        {submitted && (
          <div
            class='flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 my-4'
            role='alert'
          >
            <p>Thank you for submitting</p>
          </div>
        )}
        {formError && showAlert && (
          <div
            class='bg-red-100 border border-red-400 text-red-700 rounded relative flex items-center text-sm font-bold px-4 py-3 my-4'
            role='alert'
          >
            <span class='block sm:inline'>
              Please check the fields before submitting
            </span>
          </div>
        )}
        <button
          onClick={handleForm}
          className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
        >
          Lets' Collaborate
        </button>
      </form>
    </div>
  )
}

export default Contact
