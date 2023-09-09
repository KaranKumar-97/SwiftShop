import React from 'react'

const Spinner = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <div className='spinner' />
      <div className='font-semibold'>Loading...</div>
    </div>
  )
}

export default Spinner
