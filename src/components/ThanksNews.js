import React from 'react'

function Thanks({rating}) {
  return (
    <div className='bg-black text-white relative w-full h-[100vh]'>
      <div className='absolute top-48 left-48 bg-gray-500 h-64 flex flex-col justify-center items-center gap-5 px-10  rounded-lg'>
      <p className='bg-gray-700 p-2 rounded-lg'>You selected  <span className='text-yellow-500'>{rating}</span>  out of 5</p>
      <h1 className='font-extrabold text-3xl text-yellow-500'>Thank You !</h1>
      <p className='text-sm text-gray-300 animate-bounce'>We appreciate you taking the time to give a rating.</p>
    </div>
    </div>
  )
}

export default Thanks