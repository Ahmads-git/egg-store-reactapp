import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div>
            <div className='flex justify-center items-center bg-yellow-500 h-48'>
                <h1 className='lg:text-5xl md:text-3xl sm:text-2 text-xl font-black'>This is a custom path created for github Pages</h1>
            </div>
            <p className='text-center font-mono text-xl'>Click the following link to visit Home page.</p>
            <div className='h-96 grid place-items-center'>
                <Link className='text-3xl font-bold' to="/">Click me</Link>
            </div>
            <div className='h-60'></div>

        </div>
    )
}

export default PageNotFound
