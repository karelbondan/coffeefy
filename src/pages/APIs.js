import React, { useState } from 'react'

const APIs = () => {
    const [request, setRequest] = useState()
    const [response, setResponse] = useState()
    const [apiURL, setApiURL] = useState()
    const [APImethod, setAPImethod] = useState()
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const [signUpForm, setsignUpForm] = useState({
        username: "",
        email: "",
        password: "",
        confirm_p: ""
    })
    const [suggestion, setSuggestion] = useState({
        name: "",
        suggestion: ""
    })

    const setChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const setChangeSignUp = (e) => {
        setsignUpForm({ ...signUpForm, [e.target.name]: e.target.value })
    }

    const setChangeSuggestion = (e) => {
        setSuggestion({ ...suggestion, [e.target.name]: e.target.value })
    }

    const signIn = async (e) => {
        if (!form.username || !form.password) {
            alert("Please fill all the required fields")
            return
        }
        e.preventDefault()
        setRequest(form)
        setApiURL('https://coffeefy-backend.herokuapp.com/auth/')
        setAPImethod('POST')
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
            setResponse(jsoned)
        })
    }

    const signUp = async (e) => {
        e.preventDefault()
        if (!signUpForm.email || !signUpForm.username || !signUpForm.password || !signUpForm.confirm_p) {
            alert("Please fill all the required fields")
            return
        }
        else if (signUpForm.password !== signUpForm.confirm_p) {
            alert("Password do not match")
            return
        }
        setRequest(signUpForm)
        setApiURL('https://coffeefy-backend.herokuapp.com/api/users/')
        setAPImethod('POST')
        await fetch('https://coffeefy-backend.herokuapp.com/api/users/', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "username": signUpForm.username,
                "password": signUpForm.password
            })
        }).then(response => {
            return response.json()
        }).then(jsoned => {
            setResponse(jsoned)
        })
    }

    const getData = async (e) => {
        e.preventDefault()
        setRequest("GET(/api/coffee)")
        setApiURL('https://coffeefy-backend.herokuapp.com/api/coffee/')
        setAPImethod('GET')
        await fetch('https://coffeefy-backend.herokuapp.com/api/coffee/', {
            method: "GET"
        }).then(response => {
            return response.json()
        }).then(jsoned =>
            setResponse(jsoned)
        )
    }

    const uploadSuggestion = async (e) => {
        e.preventDefault()
        if (!suggestion.name || !suggestion.suggestion) {
            alert("Please fill in all fields")
            return
        }
        setRequest(suggestion)
        setApiURL('https://coffeefy-backend.herokuapp.com/api/suggestions/')
        setAPImethod('POST')
        await fetch('https://coffeefy-backend.herokuapp.com/api/suggestions/', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "name": suggestion.name,
                "suggestion": suggestion.suggestion
            })
        }).then(response => {
            return response.json()
        }).then(jsoned => {
            setResponse(jsoned)
        })
    }

    const getSuggestion = async (e) => {
        e.preventDefault()
        setRequest("GET(/api/suggestions)")
        setApiURL('https://coffeefy-backend.herokuapp.com/api/suggestions/')
        setAPImethod('GET')
        await fetch('https://coffeefy-backend.herokuapp.com/api/suggestions/', {
            method: "GET"
        }).then(response => {
            return response.json()
        }).then(jsoned => {
            setResponse(jsoned)
        })
    }

    return (
        <div className='h-full bg-slate-800 items-center flex'>
            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <div className='flex space-x-3'>
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
                    <div className='w-[400px] h-full flex flex-col space-y-4 px-10 py-10 rounded-2xl bg-slate-700'>
                        <p className='text-white text-3xl font-semibold'>
                            Sign Up
                        </p>
                        <form className='text-white space-y-3 pt-5' onSubmit={signIn}>
                            <div className='space-y-1'>
                                <label>Email</label>
                                <input onChange={setChangeSignUp} name='email' required placeholder='Email' type='text' className='py-2 px-3 outline-none w-full bg-transparent border border-slate-400 rounded-full hover:bg-slate-600 transition-all focus:bg-yellow-600 focus:border-yellow-500 focus:bg-opacity-40' />
                            </div>
                            <div className='space-y-1'>
                                <label>Username</label>
                                <input onChange={setChangeSignUp} name='username' required placeholder='Username' type='text' className='py-2 px-3 outline-none w-full bg-transparent border border-slate-400 rounded-full hover:bg-slate-600 transition-all focus:bg-yellow-600 focus:border-yellow-500 focus:bg-opacity-40' />
                            </div>
                            <div className='space-y-1'>
                                <label>Password</label>
                                <input onChange={setChangeSignUp} name='password' required placeholder='Password' type='password' className='py-2 px-3 outline-none w-full bg-transparent border border-slate-400 rounded-full hover:bg-slate-600 transition-all focus:bg-yellow-600 focus:border-yellow-500 focus:bg-opacity-40' />
                            </div>
                            <div className='space-y-1'>
                                <label>Confirm password</label>
                                <input onChange={setChangeSignUp} name='confirm_p' required placeholder='Confirm password' type='password' className='py-2 px-3 outline-none w-full bg-transparent border border-slate-400 rounded-full hover:bg-slate-600 transition-all focus:bg-yellow-600 focus:border-yellow-500 focus:bg-opacity-40' />
                            </div>
                            <div className='flex items-center justify-center pt-5'>
                                <button onClick={signUp} className='outline-none rounded-full text-black border-yellow-500 bg-yellow-500 px-4 py-[7px] hover:bg-yellow-600 transition-all'>
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='text-white border-blue-300 w-full py-10 px-20 flex flex-col justify-center space-y-4'>
                    <div className='h-full space-y-3 py-10'>
                        <p className='font-bold text-[40px]'>
                            Have something in mind?
                        </p>
                        <p className='text-lg'>
                            Don't hesitate to write us something! We'll always listen to our customers' words.
                        </p>
                        {/* <div className='py-3'><hr/></div> */}
                        <div className='py-3'></div>
                        <form className='space-y-4'>
                            <div className='flex space-x-4 items-center'>
                                <p className='min-w-[100px]'>Name</p>
                                <input onChange={setChangeSuggestion} name='name' placeholder='Anonymous' type="text" className='px-3 py-1 outline-none text-black w-full' />
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <p className='min-w-[100px]'>Suggestion</p>
                                <textarea onChange={setChangeSuggestion} name='suggestion' placeholder='Please improve the taste of the coffees. Thank you!' type="text" className='min-h-[100px] px-3 py-1 outline-none text-black w-full' />
                            </div>
                            <div className='py-1'></div>
                            <div className='flex justify-end'>
                                <button onClick={uploadSuggestion} className='px-5 py-2 border border-yellow-600 hover:bg-yellow-600 transition-all rounded-full'>
                                    Send my suggestion
                                </button>
                            </div>
                            <div className='flex justify-end'>
                                <button onClick={getSuggestion} className='px-5 py-2 border border-yellow-600 hover:bg-yellow-600 transition-all rounded-full'>
                                    Get all suggestions
                                </button>
                            </div>
                            <div className='flex justify-end'>
                                <button onClick={getData} className='px-5 py-2 border border-yellow-600 hover:bg-yellow-600 transition-all rounded-full'>
                                    Get coffee list
                                </button>
                            </div>
                            <div className='py-3'></div>
                        </form>
                        <div className='bg-black sticky bottom-0 space-y-2 rounded-xl px-3 py-3'>
                            <p className='text-white'>
                                API URL: {apiURL}
                            </p>
                            <p className='text-white'>
                                Request: {JSON.stringify(request)}
                            </p>
                            <p className='text-white'>
                                Method: {APImethod}
                            </p>
                            <p className='text-white'>
                                Response: {JSON.stringify(response)}
                            </p>
                            <p className='text-white'>
                                Backend GitHub: <a className='text-white' href='https://github.com/karelbondan/coffeefy_backend'>https://github.com/karelbondan/coffeefy_backend</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APIs