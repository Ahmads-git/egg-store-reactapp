import React from 'react'
import Content from '../Components/Content'

export default function Menu() {
    return (
        <>
            <div className='flex justify-center items-center bg-yellow-500 h-48'>
                <h1 className='lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-black'>Menu</h1>
            </div>
            <div className='w-8/12 m-auto h-full'>
                <Content />
            </div>
        </>
    )
}
