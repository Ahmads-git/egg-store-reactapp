import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div className='w-full'>
            <nav className='z-20 flex justify-between items-center h-20 shadow-sm bg-white text-black font-bold relative font-mono md:pl-16 md:pr-16 pl-4 pr-4'>
                <Link className='text-2xl' to="/">Egg Store </Link>
                <div className=' cursor-pointer md:hidden' onClick={props.toggle}>
                    {props.isOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                         strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg> 
                    }
                </div>
                <div className='pr-8 md:block hidden'>
                        <Link className='p-4 hover:bg-yellow-500 duration-300 rounded-full' to="/">Home</Link>
                        <Link className='p-4 hover:bg-yellow-500 duration-300 rounded-full' to="/menu">Menu</Link> 
                        <Link className='p-4 hover:bg-yellow-500 duration-300 rounded-full' to="/about">About</Link> 
                        <Link className='p-4 hover:bg-yellow-500 duration-300 rounded-full' to="/contact">Contact</Link> 
                </div>
            </nav>
        </div>
    )
}
