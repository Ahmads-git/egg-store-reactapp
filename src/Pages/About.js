import React from 'react'
import ChefImage from '../Img/the-egg-chef.jpg'

export default function About() {
    return (
        <>
            <div className='flex justify-center items-center bg-yellow-500 h-48'>
                <h1 className='lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-black'>About The Egg Store</h1>
            </div>
            <div className='lg:w-6/12 md:min-w-fit w-96 m-auto min-h-fit px-6 py-4 flex items-start justify-between flex-wrap '>
                <div>
                        <h2 className='font-black text-3xl mt-20'>
                            Our Priority 
                        </h2>
                        <p className='chef-disc pr-4 mt-4 ml-2 mb-16'>
                        Rooted in the belief that food is medicine, CHEF is a Culinary Health Education Program that teaches children and families basic nutrition and practical cooking skills, with the long-term goal of motivating individuals and communities to adopt and sustain healthier eating habits.
                        </p>
                </div>
                <div className='chef-pic-container my-20'>
                    <img src={ChefImage} alt='Egg Store' className=' h-full rounded shadow-md' />
                </div>
            </div>
        </>
    )
}
