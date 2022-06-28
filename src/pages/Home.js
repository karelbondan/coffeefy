import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-slate-800 h-full text-white border-yellow-300 flex flex-col items-center space-y-10'>
      <div className='h-[550px] flex bg-slate-700 w-full px-[250px]'>
        <div className=' border-blue-300 w-full py-10 px-20 flex flex-col justify-center space-y-4'>
          <div className='h-full space-y-3 py-10'>
            <p className='font-bold text-[70px]'>
              Meet the coffee
            </p>
            <p className='text-lg max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros lacus, venenatis non mollis rhoncus, venenatis id lacus. Nunc sagittis rhoncus fermentum. Nullam id ex orci. Suspendisse potenti. Sed ac accumsan risus. Praesent quis nisi eget massa volutpat imperdiet. Fusce eu sem ac arcu imperdiet pulvinar ut vitae nibh.
            </p>
            <div className='py-1'></div>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-full mb-2'>
              Learn more
            </button>
          </div>
          <div className='flex space-x-3 w-full justify-center'>
            <div className='bg-slate-400 border-4 border-slate-400 rounded-full h-3 w-3 cursor-pointer z-20' />
            <div className='bg-slate-400 border-4 border-slate-400 rounded-full h-3 w-3 cursor-pointer z-20' />
            <div className='bg-slate-400 border-4 border-slate-400 rounded-full h-3 w-3 cursor-pointer z-20' />
            <div className='bg-slate-400 border-4 border-slate-400 rounded-full h-3 w-3 cursor-pointer z-20' />
            <div className='bg-slate-400 border-4 border-slate-400 rounded-full h-3 w-3 cursor-pointer z-20' />
          </div>
        </div>
        <div className='border-l border-l-slate-500 flex items-center justify-center w-max px-20 text-yellow-500'>
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      <div className='flex py-16 px-[250px]'>
        <div className='px-20 py-2 space-y-5 flex items-center'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className='px-10 py-2 space-y-5'>
          <p className='font-semibold text-2xl'>
            A glimpse about Coffeefy
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros lacus, venenatis non mollis rhoncus, venenatis id lacus. Nunc sagittis rhoncus fermentum. Nullam id ex orci. Suspendisse potenti. Sed ac accumsan risus. Praesent quis nisi eget massa volutpat imperdiet. Fusce eu sem ac arcu imperdiet pulvinar ut vitae nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nisl mauris, dapibus sit amet elit nec, feugiat maximus urna. Ut vel pretium tortor. Nullam in fringilla neque, ut cursus elit. Donec mollis lobortis augue in fringilla.
          </p>
        </div>
      </div>
      <div className='text-5xl font-semibold w-full text-center py-2'>
        Our menu
      </div>
      <div className='flex space-x-10'>
        <div className='bg-slate-700 px-2 py-2 w-[300px] h-[370px] flex flex-col items-center rounded-xl'>
          <div className='flex items-center justify-center w-max h-full text-slate-500 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className='w-full px-6 h-full'>
            <p className='text-xl'>
              Latte
            </p>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex space-x-2'>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-slate-500 transition-all rounded-full mb-2'>
              View more
            </button>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-full mb-2'>
              Add to cart
            </button>
          </div>
        </div>
        <div className='bg-slate-700 px-2 py-2 w-[300px] h-[370px] flex flex-col items-center rounded-xl'>
          <div className='flex items-center justify-center w-max h-full text-slate-500 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className='w-full px-6 h-full'>
            <p className='text-xl'>
              Latte
            </p>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex space-x-2'>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-slate-500 transition-all rounded-full mb-2'>
              View more
            </button>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-full mb-2'>
              Add to cart
            </button>
          </div>
        </div>
        <div className='bg-slate-700 px-2 py-2 w-[300px] h-[370px] flex flex-col items-center rounded-xl'>
          <div className='flex items-center justify-center w-max h-full text-slate-500 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className='w-full px-6 h-full'>
            <p className='text-xl'>
              Latte
            </p>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex space-x-2'>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-slate-500 transition-all rounded-full mb-2'>
              View more
            </button>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-full mb-2'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='flex space-x-10'>
        <div className='bg-slate-700 px-2 py-2 w-[300px] h-[370px] flex flex-col items-center rounded-xl'>
          <div className='flex items-center justify-center w-max h-full text-slate-500 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className='w-full px-6 h-full'>
            <p className='text-xl'>
              Latte
            </p>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex space-x-2'>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-slate-500 transition-all rounded-full mb-2'>
              View more
            </button>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-full mb-2'>
              Add to cart
            </button>
          </div>
        </div>
        <div className='bg-slate-700 px-2 py-2 w-[300px] h-[370px] flex flex-col items-center rounded-xl'>
          <div className='flex items-center justify-center w-max h-full text-slate-500 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className='w-full px-6 h-full'>
            <p className='text-xl'>
              Latte
            </p>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex space-x-2'>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-slate-500 transition-all rounded-full mb-2'>
              View more
            </button>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-full mb-2'>
              Add to cart
            </button>
          </div>
        </div>
        <div className='bg-slate-700 px-2 py-2 w-[300px] h-[370px] flex flex-col items-center rounded-xl'>
          <div className='flex items-center justify-center w-max h-full text-slate-500 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className='w-full px-6 h-full'>
            <p className='text-xl'>
              Latte
            </p>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex space-x-2'>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-slate-500 transition-all rounded-full mb-2'>
              View more
            </button>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-full mb-2'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='flex space-x-10'>
        <div className='bg-slate-700 px-2 py-2 w-[300px] h-[370px] flex flex-col items-center rounded-xl'>
          <div className='flex items-center justify-center w-max h-full text-slate-500 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className='w-full px-6 h-full'>
            <p className='text-xl'>
              Latte
            </p>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex space-x-2'>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-slate-500 transition-all rounded-full mb-2'>
              View more
            </button>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-full mb-2'>
              Add to cart
            </button>
          </div>
        </div>
        <div className='bg-slate-700 px-2 py-2 w-[300px] h-[370px] flex flex-col items-center rounded-xl'>
          <div className='flex items-center justify-center w-max h-full text-slate-500 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className='w-full px-6 h-full'>
            <p className='text-xl'>
              Latte
            </p>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex space-x-2'>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-slate-500 transition-all rounded-full mb-2'>
              View more
            </button>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-full mb-2'>
              Add to cart
            </button>
          </div>
        </div>
        <div className='bg-slate-700 px-2 py-2 w-[300px] h-[370px] flex flex-col items-center rounded-xl'>
          <div className='flex items-center justify-center w-max h-full text-slate-500 '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className='w-full px-6 h-full'>
            <p className='text-xl'>
              Latte
            </p>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='flex space-x-2'>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-slate-500 transition-all rounded-full mb-2'>
              View more
            </button>
            <button className='border border-slate-500 px-4 py-[8px] hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-full mb-2'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <hr />
      <hr />
      <div className='h-full flex bg-slate-700 w-full px-[250px]'>
        <div className=' border-blue-300 w-full py-10 px-20 flex flex-col justify-center space-y-4'>
          <div className='h-full space-y-3 py-10'>
            <p className='font-bold text-[40px]'>
              Coupons are available!
            </p>
            <p className='text-lg'>
              Sign up today to be able to use them.
            </p>
            {/* <div className='py-3'><hr/></div> */}
            <div className='py-3'></div>
            <form className='space-y-4'>
              <div className='flex space-x-4 items-center'>
                <p className='min-w-[100px]'>Email</p>
                <input placeholder='email@mail.com' type="text" className='max-w-md px-3 py-1 outline-none text-black w-full' />
              </div>
              <div className='flex space-x-4 items-center'>
                <p className='min-w-[100px]'>Password</p>
                <input placeholder='••••••••' type="password" className='max-w-md px-3 py-1 outline-none text-black w-full' />
              </div>
              <div className='flex space-x-4 items-center'>
                <p className='min-w-[100px]'>Confirm pass.</p>
                <input placeholder='••••••••' type="password" className='max-w-md px-3 py-1 outline-none text-black w-full' />
              </div>
              <div className='py-1'></div>
              <button className='px-5 py-2 border border-yellow-600 hover:bg-yellow-600 transition-all rounded-full'>
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className='flex items-center justify-center w-max px-20 text-yellow-500'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        </div>
      </div>
      <div className='h-full flex bg-slate-800 w-full px-[250px]'>
        <div className='flex items-center justify-center w-max px-20 text-yellow-500'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
        <div className=' border-blue-300 w-full py-10 px-20 flex flex-col justify-center space-y-4'>
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
                <input placeholder='Anonymous' type="text" className='px-3 py-1 outline-none text-black w-full' />
              </div>
              <div className='flex space-x-4 items-center'>
                <p className='min-w-[100px]'>Suggestion</p>
                <textarea placeholder='Please improve the taste of the coffees. Thank you!' type="text" className='min-h-[100px] px-3 py-1 outline-none text-black w-full' />
              </div>
              <div className='py-1'></div>
              <div className='flex justify-end'>
                <button className='px-5 py-2 border border-yellow-600 hover:bg-yellow-600 transition-all rounded-full'>
                  Send my suggestion
                </button>
              </div>
              <div className='py-3'></div>
              <p className='font-bold text-[40px]'>
                Or use our social media
              </p>
              <p className='text-lg'>
                Click one of the buttons below to view our social media and to contact us from there.
              </p>
              <div className='flex space-x-3'>
                <button className='border rounded-full h-8 w-8'>fb</button>
                <button className='border rounded-full h-8 w-8'>ig</button>
                <button className='border rounded-full h-8 w-8'>twit</button>
                <button className='border rounded-full h-8 w-8'>tikt</button>
                <button className='border rounded-full h-8 w-8 flex justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='h-full flex bg-slate-900 w-full text-center py-5 items-center justify-center px-10'>
        <p className='text-sm text-slate-400'>
          Ⓒ Karel Bondan 2022. All rights reserved.
          <br />
          I think this is too much, sir. You gave us months to develop a website and we only got 5 hours to make both the frontend and the backend, not including bugs and technical difficulties.
          <br />
          At least give us more time if you're giving us this much task.
        </p>
      </div>
    </div>
  )
}

export default Home