import React from 'react'
import { Link } from 'react-router-dom'

export default function Dropdown(props) {
    return (
        <div id='open-menu' className={
            props.isOpen ? 'translate-y-0' : "close-menu" 
        }
        onClick={props.toggle}
        >
            <div className='grid grid-rows-4 text-center items-center bg-yellow-500 lg:hidden md:hidden ' >
                <Link className='p-4' to='/'>Home</Link>
                <Link className='p-4' to='/menu'>Menu</Link>
                <Link className='p-4' to='/about'>About</Link>
                <Link className='p-4' to='/contact'>Contact</Link>
            </div>
        </div>
    )
}
