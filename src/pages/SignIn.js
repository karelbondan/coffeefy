import React, { useState } from 'react'

const SignIn = () => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const setChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const signIn = async (e) => {
    if (!form.username || !form.password) {
      alert("Please fill all the required fields")
      return
    }
    e.preventDefault()
    await fetch('https://coffeefy-backend.herokuapp.com/auth/', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "username": form.username,
        "password": form.password
      })
    }).then(response => {
      return response.json()
    }).then(jsoned => {
      alert(jsoned)
    })
  }

  return (
    <div className='h-screen bg-slate-800 items-center flex'>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-[400px] h-full flex flex-col space-y-4 px-10 py-10 rounded-2xl bg-slate-700'>
          <p className='text-white text-3xl font-semibold'>
            Sign in
          </p>
          <form className='text-white space-y-3 pt-5' onSubmit={signIn}>
            <div className='space-y-1'>
              <label>Username</label>
              <input onChange={setChange} name='username' required placeholder='Username' type='text' className='py-2 px-3 outline-none w-full bg-transparent border border-slate-400 rounded-full hover:bg-slate-600 transition-all focus:bg-yellow-600 focus:border-yellow-500 focus:bg-opacity-40' />
            </div>
            <div className='space-y-1'>
              <label>Password</label>
              <input onChange={setChange} name='password' required placeholder='Password' type='password' className='py-2 px-3 outline-none w-full bg-transparent border border-slate-400 rounded-full hover:bg-slate-600 transition-all focus:bg-yellow-600 focus:border-yellow-500 focus:bg-opacity-40' />
            </div>
            <div className='flex items-center justify-center pt-5'>
              <button onClick={signIn} className='outline-none rounded-full text-black border-yellow-500 bg-yellow-500 px-4 py-[7px] hover:bg-yellow-600 transition-all'>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn