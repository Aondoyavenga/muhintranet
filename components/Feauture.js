import Image from 'next/image';
import React, { Fragment } from 'react';

import img from '../imgs/img.png'
import imgpermission from '../imgs/imgpermission.png'
import imgorganisefolders from '../imgs/imgorganisefolder.png'
import imgrealtimemonitor from '../imgs/imgrealtimemonitor.png'

const Feauture = () => {
    return (
        <Fragment>
            <section className='w-full my-5 mt-10 sm:px-2 bg-cleotrades_color-green'>
                <div className='grid grid-flow-row-dense gap-2 container
                    md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto'>
                    <div className="md:col-span-12 lg:col-span-4 sm:col-span-12 flex justify-center flex-col">
                        <div className="w-full justify-center mx-3 flex flex-col bg-cleotrades_color-green">
                           <h1
                            className='text-6xl text-white'
                           >Safe and <br /> stress-free folder sharing for the whole team</h1>
                           <h3
                            className='text-lg py-3 font-semibold text-white'
                           >Collaboration Made Easy</h3>
                       </div>
                    </div>
                    <div className="md:col-span-12 lg:col-span-8 sm:col-span-12 flex flex-col">
                       <Image 
                            src={img}
                            objectFit='contain'
                            height={720}
                            
                       />
                    </div>
                </div>
            </section>


            <section className='w-full my-5 mt-10 sm:px-2 bg-gray-300'>
                <div className='grid grid-flow-row-dense gap-2 container
                    md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto'>
                    
                    <div className="md:col-span-12 lg:col-span-5 sm:col-span-12 flex flex-col">
                       <Image 
                            src={imgpermission}
                            objectFit='contain'
                            height={1100}
                            
                       />
                    </div>

                    <div className="md:col-span-12 lg:col-span-7 sm:col-span-12 flex justify-center flex-col">
                        <div className="w-full justify-center px-3 flex flex-col bg-gray-300">
                           <h1
                            className='text-6xl text-black'
                           >Share folders <br /> with no worry Share with permission</h1>

                           <h3
                            className='text-lg py-3 font-semibold text-black'
                           >
                               Different permission levels make it easy to give people
                                access to specific subfolders rather than allowing them to see the entire folder. For example, they can see the “Website Rebrand Images”
                                subfolder, but not the “All Images” folder it lives in.
                           </h3>
                       </div>
                    </div>
                </div>
            </section>

            <section className='w-full my-5 mt-10 sm:px-2 bg-white'>
                <div className='grid grid-flow-row-dense gap-2 container
                    md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto'>
                    <div className="md:col-span-12 lg:col-span-4 sm:col-span-12 flex justify-center flex-col">
                        <div className="w-full justify-center mx-3 flex flex-col">
                           <h1
                            className='text-6xl text-black'
                           >Organize your folders in one place</h1>
                           <h3
                            className='text-lg py-3 px-3 font-semibold text-black'
                           >Organizing and sharing folders when they live in multiple
                            locations can be an overwhelming and stressful task. 
                            DMS gives you peace of mind with one secure storage space for all your
                             folders and files. You’ll always know exactly where your work is so
                              you can retrieve and share your folders 
                           easily and safely, whether it’s your desktop or online.</h3>
                       </div>
                    </div>
                    <div className="md:col-span-12 
                    bg-slate-100
                    lg:col-span-8 sm:col-span-12 flex flex-col">
                       <Image 
                            src={imgorganisefolders}
                            objectFit='contain'
                            height={720}
                            
                       />
                    </div>
                </div>
            </section>

            <section className='w-full my-5 mt-10 sm:px-2 bg-cleotrades_color-green'>
                <div className='grid grid-flow-row-dense gap-2 container
                    md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto'>
                    <div className="md:col-span-12 lg:col-span-4 sm:col-span-12 flex justify-center flex-col">
                        <div className="w-full justify-center mx-3 flex flex-col bg-cleotrades_color-green">
                           <h1
                            className='text-6xl text-white'
                           >Realtime</h1>
                           <h3
                            className='text-lg py-3 font-semibold text-white'
                           >DMS gives you one unified solution that lets you see 
                           all of your folders and customize their unique sharing 
                           permissions. You’ll also automatically receive notifications
                            when someone has viewed, edited, moved, or deleted files or 
                            folders with our file activity feature. DMS folder sharing
                             help you keep track of your team, streamline your work, and be
                              more productive together.</h3>
                       </div>
                    </div>
                    <div className="md:col-span-12 lg:col-span-8 sm:col-span-12 flex flex-col">
                       <Image 
                            src={imgrealtimemonitor}
                            objectFit='contain'
                            height={720}
                            
                       />
                    </div>
                </div>
            </section>

            

            <section hidden className='w-full py-5 my-5 mt-10 sm:px-2 bg-gray-300'>
                <div className='grid grid-flow-row-dense gap-2 container
                    md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto'>
                    <div className="md:col-span-6 lg:col-span-6 sm:col-span-6 flex flex-col">
                       <div className="w-full flex-1 flex flex-col justify-center">
                           <div
                                className=' shadow-md flex-1 bg-white'
                           >
                               <img 
                                className=' flex-1 w-full h-56'
                                src='https://images.pexels.com/photos/4939658/pexels-photo-4939658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                               
                           </div>
                       </div>
                    </div>
                    <div className="md:col-span- lg:col-span-3 sm:col-span-3 flex flex-col">
                       <div className="w-full flex flex-col justify-center">
                           <div
                                className=' shadow-md bg-white'
                           >
                               <img 
                                className='object-contain w-full h-56'
                                src='https://images.pexels.com/photos/4939658/pexels-photo-4939658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                               
                           </div>
                       </div>
                    </div>
                    <div className="md:col-span- lg:col-span-3 sm:col-span-3 flex flex-col">
                       <div className="w-full flex flex-col justify-center">
                           <div
                                className=' shadow-md bg-white'
                           >
                               <img 
                                className='object-contain w-full h-56'
                                src='https://images.pexels.com/photos/4939658/pexels-photo-4939658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                               
                           </div>
                       </div>
                    </div>
                    <div className="md:col-span- lg:col-span-6 sm:col-span-6 flex flex-col">
                       <div className="grid lg:grid-cols-12 bg-white">


                       <div className="md:col-span-6 lg:col-span-6 sm:col-span-3 flex flex-col">
                            <div className="w-full flex flex-col justify-center">
                                <div
                                        className=' shadow-md bg-white'
                                >
                                    <img 
                                        className='object-contain w-full h-56'
                                        src='https://images.pexels.com/photos/4939658/pexels-photo-4939658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-6 lg:col-span-6 sm:col-span-3 flex flex-col">
                            <div className="w-full flex-1 flex flex-col justify-between">
                                <div
                                    className=' shadow-md flex-1 w-full bg-red-300'
                                >
                                 <h2>hell0</h2>   
                                </div>
                                <div
                                    className=' shadow-md flex-1 w-full bg-black'
                                >
                                    <h2>helo</h2>
                                </div>
                            </div>
                            {/* <div className="w-full flex flex-col justify-between">
                                <div
                                    className=' shadow-md h-[10] w-full bg-white'
                                >
                                    <img 
                                        className=' w-full'
                                        src='https://images.pexels.com/photos/4939658/pexels-photo-4939658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                                    
                                </div>
                            </div> */}
                        </div>

                       </div>
                       
                       
                    
                    </div>

                    <div className="md:col-span- lg:col-span-3 sm:col-span-3 flex flex-col">
                       <div className="w-full flex flex-col justify-center">
                           <div
                                className=' shadow-md bg-white'
                           >
                               <img 
                                className='object-contain w-full h-56'
                                src='https://images.pexels.com/photos/4939658/pexels-photo-4939658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                               
                           </div>
                       </div>
                    </div>
                    <div className="md:col-span- lg:col-span-3 sm:col-span-3 flex flex-col">
                       <div className="w-full flex flex-col justify-center">
                           <div
                                className=' shadow-md bg-white'
                           >
                               <img 
                                className='object-contain w-full h-56'
                                src='https://images.pexels.com/photos/4939658/pexels-photo-4939658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
                               
                           </div>
                       </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Feauture;
