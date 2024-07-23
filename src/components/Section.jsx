import React from 'react'
import copilot from '../assets/copilot.avif';

const Section = () => {
    return (
        <>
            <div className='laptop'>
                <div className="laptop">
                    <div className="right w-full">
                        <img src={copilot} alt="copilotpc" className='w-full' />
                    </div>
                </div>
                <div className="left bg-white static mx-0 py-1 px-3 lg:absolute xl:absolute top-20 lg:w-[35vw] xl:w-[35vw] xl:mx-14 lg:mx-14 lg:px-8 lg:py-8 xl:px-8 xl:py-8 md:static md:w-[100vw] md:mx-0 shadow-md md:py-1 md:px-3">
                    <h1 className='heading my-4 text-3xl font-semibold'>Meet Surface Pro</h1>
                    <p className='about my-4'>This laptops unrivalled flexibility and AI features like Live Captions and Cocreator, enable you to do more than you ever imagined.</p>
                    <button className='bg-bcg my-4 text-white font-semibold py-2 px-3'>Learn More</button>
                </div >
            </div>
        </>
    )
}

export default Section;