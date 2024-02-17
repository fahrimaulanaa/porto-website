import React from 'react'
import Image from 'next/image'

export default function Skill(){
    return(
        <div className='flex flex-row ml-24 '>
            <div className='flex flex-col mr-8' id='left-section'>
                <div className='flex flex-row items-center bg-white rounded-md cursor-pointer px-24 py-4'>
                    <Image src='/logo_next.png' alt='next js' width={40} height={40} />
                    <p className='text-xl font-semibold ml-4 text-black'>Next.JS</p>
                </div>
                <div className='flex flex-row items-center bg-white rounded-md cursor-pointer px-24 py-4 mt-4'>
                    <Image src='/logo_react.png' alt='react js' width={40} height={40} />
                    <p className='text-xl font-semibold ml-4 text-black'>React.JS</p>
                </div>
                <div className='flex flex-row items-center bg-white rounded-md cursor-pointer px-24 py-4 mt-4'>
                    <Image src='/logo_laravel.png' alt='laravel' width={40} height={40} />
                    <p className='text-xl font-semibold ml-4 text-black'>Laravel</p>
                </div> 
            </div>
            <div className='flex flex-col' id='right-section'>
                <div className='flex flex-row items-center bg-white rounded-md cursor-pointer px-24 py-4'>
                    <Image src='/logo_firebase.png' alt='mongodb' width={40} height={40} />
                    <p className='text-xl font-semibold ml-4 text-black'>Firebase</p>
                </div>
                <div className='flex flex-row items-center bg-white rounded-md cursor-pointer px-24 py-4 mt-4'>
                    <Image src='/logo_javascript.png' alt='mysql' width={40} height={40} />
                    <p className='text-xl font-semibold ml-4 text-black'>JavaScript</p>
                </div>
                <div className='flex flex-row items-center bg-white rounded-md cursor-pointer px-24 py-4 mt-4'>
                    <Image src='/logo_mongodb.png' alt='mongodb' width={40} height={40} />
                    <p className='text-xl font-semibold ml-4 text-black'>MongoDB</p>
                </div>
            </div>
        </div>
    )
}