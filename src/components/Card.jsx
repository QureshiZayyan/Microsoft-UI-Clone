import React from 'react'
import Button from './Button'

const Card = ({ imageurl, heading, info, link, btntext }) => {
  return (
    <div className='card w-[90vw] lg:w-[21vw] xl:w-[21vw] md:w-[46vw] shadow-md md:my-5 my-4'>
      <div className='card-img'>
        <img src={imageurl} alt="" className='w-full' />
      </div>
      <div className='card-content bg-white px-6 py-7 xl:h-[370px] lg:h-[370px] md:h-[250px]'>
        <h1 className="text-2xl font-semibold my-2">{heading}</h1>
        <p className='my-2'>{info}</p>
        <p className='my-2'>{link}</p>
        <Button text={btntext} />
      </div>
    </div>
  )
}

export default Card