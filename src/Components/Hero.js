import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div>
            <div className='bg-white h-screen flex flex-col justify-center items-center'>
                <h1 className='lg:text-9xl md:text-7xl sm:text-6xl text-5xl font-black mb-14'>
                    Eggy Meals
                </h1>
                <Link to="/menu" className='py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'>
                    Select Meal
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
