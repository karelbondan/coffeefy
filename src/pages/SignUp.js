import React from 'react'
import { useState } from 'react'

const SignUp = () => {
  const [request, setRequest] = useState()
  const [response, setResponse] = useState()
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm_p: ""
  })

  const setChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const signIn = async (e) => {
    e.preventDefault()
    if (!form.email || !form.username || !form.password || !form.confirm_p) {
      alert("Please fill all the required fields")
      return
    }
    else if (form.password !== form.confirm_p){
      alert("Password do not match")
      return
    }
    setRequest(form)
    await fetch('https://coffeefy-backend.herokuapp.com/api/users/', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "email": form.email,
        "username": form.username,
        "password": form.password
      })
    }).then(response => {
      return response.json()
    }).then(jsoned => {
      setResponse(jsoned)
    })
  }

  return (
    <div className='h-screen bg-slate-800 items-center flex'>
      <div className='w-full flex items-center justify-center'>
        <div className='w-[400px] h-full flex flex-col space-y-4 px-10 py-10 rounded-2xl bg-slate-700'>
          <p className='text-white text-3xl font-semibold'>
            Sign Up
          </p>
          <form className='text-white space-y-3 pt-5' onSubmit={signIn}>
            <div className='space-y-1'>
              <label>Email</label>
              <input onChange={setChange} name='email' required placeholder='Email' type='text' className='py-2 px-3 outline-none w-full bg-transparent border border-slate-400 rounded-full hover:bg-slate-600 transition-all focus:bg-yellow-600 focus:border-yellow-500 focus:bg-opacity-40' />
            </div>
            <div className='space-y-1'>
              <label>Username</label>
              <input onChange={setChange} name='username' required placeholder='Username' type='text' className='py-2 px-3 outline-none w-full bg-transparent border border-slate-400 rounded-full hover:bg-slate-600 transition-all focus:bg-yellow-600 focus:border-yellow-500 focus:bg-opacity-40' />
            </div>
            <div className='space-y-1'>
              <label>Password</label>
              <input onChange={setChange} name='password' required placeholder='Password' type='text' className='py-2 px-3 outline-none w-full bg-transparent border border-slate-400 rounded-full hover:bg-slate-600 transition-all focus:bg-yellow-600 focus:border-yellow-500 focus:bg-opacity-40' />
            </div>
            <div className='space-y-1'>
              <label>Confirm password</label>
              <input onChange={setChange} name='confirm_p' required placeholder='Confirm password' type='text' className='py-2 px-3 outline-none w-full bg-transparent border border-slate-400 rounded-full hover:bg-slate-600 transition-all focus:bg-yellow-600 focus:border-yellow-500 focus:bg-opacity-40' />
            </div>
            <div className='flex items-center justify-center pt-5'>
              <button onClick={signIn} className='outline-none rounded-full text-black border-yellow-500 bg-yellow-500 px-4 py-[7px] hover:bg-yellow-600 transition-all'>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp