import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import img from '../imgs/puaa.jpg'


const Card = ({name, title, note}) =>{
    return (
        <Fragment>
            
            <div className="md:col-span-3 sm:col-span-6 xs:col-span-12">
                <div 
                    className="w-full flex items-center
                    shadow-md bg-white rounded-lg flex-col justify-between py-5 px-2 min-h-[420px]
                    "
                >
                    <h1
                        className='text-lg font-bold text-black py-2'
                    > {name} </h1>
                    <div
                        className='bg-slate-50 rounded-full w-32 h-32
                        
                        '
                    >
                        <Image 
                            src={img}
                            width={128}
                            height={128}
                            objectFit='cover'
                            className='rounded-full'
                        />
                    </div>
                    <h2
                        className='text-center font-semibold'
                    > {title} </h2>
                    <p
                        className='text-center text-sm'
                    >
                        {note}
                    </p>
                </div>
            </div>

        </Fragment>
    )
}

const Projects = () => {
  return (
      <section
        className='bg-gray-100 w-screen h-screen'
      >
           
                <Header 
                    auth={true} 
                /> 
            <main
                className='bg-gray-100 flex-1 py-5 px-3 sm:w-full max-w-[80%] mx-auto'
            >
                <div className="w-full backdrop-blur-md">
                  
                </div>
                <div
                    className='grid items-center grid-flow-row-dense gap-2 container
                    md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto'
                >
                    
                    <Card 
                        name='HPO Global'
                        title='Global-Beta Technologies Solutions Limited'
                        note='Is a sister Company to Alfa O & O Limited, Methanes Nigerian Company 
                        Limited, and Pioneer-Alfa Petroleum Services Limited. As a result of Our 
                        association with several foreign partners including HPO Global Resources, we 
                        are the leading provider oil and gas field equipment processing technology in West Africa'
                    />
                    <Card 
                        name='ALFAO&O VENTURES'
                        title='Alfa o&o Ventures'
                        note='Is a full-service information communication technology (ICT) solution provider with emphasison
                         on IT infrastructure and video conferencing design, implementation, and maintenance.'
                    />
                    <Card
                        name='WIRELESS NG'
                        title='Wireless Internet Service Provider'
                        note='WirelessNG is one of the first internet service provider to launch unlimited internet service in Nigeria, We are committed to 
                        giving our esteemed customers excelent internet experience.'
                    />
                    <Card
                        name='SEIMAX PPS LIMITED'
                        title='Seismic-PPS'
                        note='Is a global leacer in providing solutions servicing the oil and gas industry in areas of seismic processing and imaging.'
                    />
                </div>
            </main>
      </section>
  )
}

export default Projects