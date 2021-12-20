import React from 'react'
import { Link } from 'react-router-dom'
import imageOne from '../Img/egg-1.jpg'
import imageTwo from '../Img/egg-2.jpg'

export default function Content() {
    return (
        <div className='h-full'>
            <div className='menu-card'>
                <img src={imageOne} className='h-full rounded mb-20 shadow'/>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl mb-2'>
                        Egg Muffins
                    </h2>
                    <p className='mb-2'>
                        Crispy, delicious and nutritious
                    </p>
                    <Link to='/contact' className='text-black font-bold py-4 px-6 rounded-full bg-yellow-500 hover:-translate-y-2 duration-300 mt-2'>
                        <span className='mr-1'>Order:</span>
                        20$
                    </Link>
                </div>
            </div>

            <div className='menu-card'>
                <img src={imageTwo} className='h-full rounded mb-20 shadow'/>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl mb-2'>
                        Eggy Burger
                    </h2>
                    <p className='mb-2'>
                        Yummy, delicious and nutritious
                    </p>
                    <Link to='/contact' className='text-black font-bold py-4 px-6 rounded-full bg-yellow-500 hover:-translate-y-2 duration-300 mt-2'>
                        <span className='mr-1'>Order:</span>
                        25$
                    </Link>
                </div>
            </div>
        </div>
    )
}
