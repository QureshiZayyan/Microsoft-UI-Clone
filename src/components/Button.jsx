import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='bg-bcg my-4 text-white font-semibold py-2 px-3 lg:absolute xl:absolute md:absolute lg:bottom-2 xl:bottom-2 md:bottom-0 '>{text}</button>
  )
}

export default Button