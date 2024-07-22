import React from 'react'

const Footer = ({ title, content, content1, content2, content3, content4 }) => {
    return (
        <>
            <ul className='text-xs lg:my-0 xl:my-0 md:my-2'>
                <h3 className='font-semibold my-2 text-base'>{title}</h3>
                <li className='my-2'>{content}</li>
                <li className='my-2'>{content1}</li>
                <li className='my-2'>{content2}</li>
                <li className='my-2'>{content3}</li>
                <li className='my-2'>{content4}</li>
            </ul>
        </>
    )
}

export default Footer;
