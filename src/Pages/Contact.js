import React, { useState } from 'react'

export default function Contact() {

    const [inputName, getName] = useState('')
    const [inputPhoneNo, getPhoneNo] = useState('')
    const [inputMsg, getMsg] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    const sentAnim = ()=>{
        window.alert(`Order Details \n Name: ${inputName} \n PhoneNo: ${inputPhoneNo} \n Order: ${inputMsg} \n Status: Sent Successfully`)
        getName('')
        getPhoneNo('')
        getMsg('')
    }

    return (
        <>
            <div className='flex justify-center items-center bg-yellow-500 h-48 mb-16'>
                <h1 className='lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-black '>Reach Out</h1>
            </div>
            <div className='lg:w-8/12 md:min-w-fit m-auto'>
                <form className='h-80 flex items-center justify-center' onSubmit={handleSubmit}>
                    <div className='w-8/12 md:w-96 lg:w-96'>
                        <div className='Name flex flex-col items-start justify-between'>
                            <label for='name'>Name</label>
                            <input type="text" name="name" className='inputStyle' value={inputName} onChange={(e)=> getName(e.target.value)}/>
                        </div>
                        <div className='PhoneNo flex flex-col items-start justify-between'>
                            <label for='name'>Phone No</label>
                            <input type="tel" name="name" className='inputStyle' value={inputPhoneNo} onChange={(e)=> getPhoneNo(e.target.value)}/>
                        </div>
                        <div className='Message flex flex-col items-start justify-between'>
                            <label for='name'>Order</label>
                            <input type="textarea" name="name" cols='10' rows='20' className='inputStyle' value={inputMsg} onChange={(e)=> getMsg(e.target.value)} placeholder='Egg Muffin | Eggy Burger'/>
                        </div>
    
                        <button className='px-4 py-2 bg-yellow-500 mt-2 rounded-full' type='submit' onClick={sentAnim}>Send</button>

                    </div>
                </form>
            </div>
            <div className='h-64'></div>
        </>
    )
}
