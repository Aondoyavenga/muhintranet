import { BellIcon, DownloadIcon, StarIcon, XIcon } from '@heroicons/react/outline'
import {FolderIcon, MenuIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import React, { Fragment } from 'react'
import Header from '../components/Header'

import avatar from '../imgs/peace20.png'
import puaa from '../imgs/puaa.jpg'


const RenderAvatar = ({avatar, margin}) =>{
    return (
        <div 
            className='rounded-full shadow-md h-9 w-9'
        >
            <Image 
                src={avatar}
                height={36}
                width={36}
                className={`rounded-full -ml-${margin}`}
                objectFit='cover'
            
            />

        </div>
    )
}

const RenderFolder = ({title}) =>{
    return (
        
        <div
        className='flex flex-row justify-between w-full items-center'
    >
        <FolderIcon 
            className='h-6 text-slate-400'
        />

        <div
            className='flex-1 px-2'
        >
            <h3
                className='text-lg font-semibold'
            >{title}</h3>
        </div>


       <div
            className='flex flex-1'
       >
            <RenderAvatar 
                avatar={puaa}
            />
            <RenderAvatar
                margin={8}
                avatar={avatar}
            />
       </div>

       

       <StarIcon 
            className='w-6'
       />


    </div>
    )
}
const dashboard = () => {
  return (
    <Fragment>
       <main
            className='flex flex-row'
       >
            <div
                className='flex-[0.2] bg-slate-100 h-[100vh]'
            >

                <div className="flex-shrink-0 flex-1 flex flex-row items-center
					bg-gray-200 px-2 py-4 justify-between shadow-sm  sticky z-10 top-0
				"
				onClick={() =>{}}
                >
                   <DownloadIcon className='w-8' />
					 <XIcon
                        
                        className='w-8 mr-1 hover:text-cleotrades_color-yellow
                            hidden sm:flex
                        '
                    />
                </div>

                <section 
                    className='px-3'
                >
                    <ul
                        onClick={() =>{}} 
                        className='py-1 mb-2 flex gap-2'>
                        {/* <EmojiHappyIcon className='h-5 w-5 text-cleotrades_color' /> */}
                        <li className='text-sm cursor-pointer
                            hover:text-cleotrades_color-yellow'>Home</li>
                    </ul>
                    <ul
                        onClick={() =>{}} 
                        className='py-1 mb-2 flex gap-2'>
                        {/* <EmojiHappyIcon className='h-5 w-5 text-cleotrades_color' /> */}
                        <li className='text-sm cursor-pointer
                            hover:text-cleotrades_color-yellow'>Files</li>
                    </ul>
                    <ul
                        onClick={() =>{}} 
                        className='py-1 mb-2 flex gap-2'>
                        {/* <EmojiHappyIcon className='h-5 w-5 text-cleotrades_color' /> */}
                        <li className='text-sm cursor-pointer
                            hover:text-cleotrades_color-yellow'>Shared</li>
                    </ul>
                </section>

            </div>
            <div
                className='flex-1 bg-slate-200'
            >
                <Header auth />

                <main
                    className='flex items-center justify-center mt-4'
                >

                    <div
                        className='w-[50%] mx-auto shadow-md rounded-md px-3 bg-white'
                    >
                        <div
                            className='flex flex-row justify-between w-full items-center'
                        >
                            <FolderIcon 
                                className='h-6 text-slate-400'
                            />

                            <div>
                                <h3
                                    className='text-lg font-semibold'
                                >Project 2022</h3>
                            </div>


                           <div
                                className='flex'
                           >
                                <RenderAvatar 
                                    avatar={puaa}
                                />
                                <RenderAvatar
                                    margin={8}
                                    avatar={avatar}
                                />
                           </div>

                           <MenuIcon 
                                className='w-6'
                           />

                           <BellIcon 
                                className='w-6'
                           />

                           <RenderAvatar 
                           
                            avatar={puaa}
                           />

                        </div>
                        
                        <hr className='my-2' />
                        <div
                            className='ml-4'
                        >
                            <RenderFolder 
                                title='Expenses'
                            />

                        </div>
                        <hr className='my-2' />
                        <div
                            className='ml-4'
                        >
                            <RenderFolder 
                                title='Accounting'
                            />

                        </div>
                        <hr className='my-2' />
                        <div
                            className='ml-4'
                        >
                            <RenderFolder 
                                title='Logistics'
                            />

                        </div>
                        <hr className='my-2' />
                        <div
                            className='ml-4'
                        >
                            <RenderFolder 
                                title='Penalties'
                            />

                        </div>
                        <hr className='my-2' />
                        <div
                            className='ml-4'
                        >
                            <RenderFolder 
                                title='Procurement'
                            />

                        </div>

                    </div>

                </main>

            </div>
       </main>
    </Fragment>
  )
}

export default dashboard