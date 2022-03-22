import Head from 'next/head'
import Team from '../components/Team'
import Feauture from '../components/Feauture'

import Header from '../components/Header'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectIsLoading, setError } from '../app/slices/uiSlice'
import { handleUserLogIn } from '../appHook/userHooks'
import { selectToken } from '../app/slices/userSlice'
import AppSpinner from '../global/AppSpinner'
import AsyncStorage from '@react-native-async-storage/async-storage'

const users = [
    {
        id: 1,
        userName: 'PUAA',
        firstName: 'Uaa Peter',
        password: '123'
    },

    {
        id: 2,
        userName: 'MUH',
        firstName: 'Muhammed Isa',
        pasword: 123
    }
]

export default function Home() {
    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    const Error = useSelector(selectError)
    const isLoading = useSelector(selectIsLoading)
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    
    const handleLogIn = () => {
        setTimeout(() =>dispatch(setError('')), 5000)

        handleUserLogIn(data, dispatch, setData, AsyncStorage )
        
    }

    useEffect( () =>{
        if(token) return Router.push('/dashboard')
    }, [token])

    return (
      <main>
        <Header 
            auth={false} 
        />

          <section 
            className='bg-gray-200 flex-1 py-5 px-3'
          >
            <div
                className='w-[90%] items-center mx-auto justify-between flex flex-row
                    flex-wrap
                '
            >
                <div className="items-center w-[70%] flex-nowrap">
                    <h1
                        className='text-4xl font-semibold'
                    >Ultimate Solution For Service</h1>

                    <p
                        className='text-sm font-medium'
                    >Members of your community deserve more. Let's offer them what they won't find on other websites.</p>
                </div>
                <div className=" flex-1 w-full px-2 py-5 self-end shadow-md">
                    <div>
                        <h1
                            className='text-lg font-medium'
                        >Log In</h1>
                        <p className='text-xs'>Log In To Your Account</p>
                    </div>
                    {
                        Error && 
                        <span className='text-red-500 text-sm'> {Error} </span>
                    }
                    <div className='py-4'>
                        <input 
                            type="text" 
                            name="userName" 
                            value={data.email}
                            placeholder='User Name' id=""
                            onChange={e =>setData({
                                ...data,
                                email: e.target.value
                            })}
                            className='ring-0 w-full border-0 rounded-md focus:ring-0' 
                        />
                    </div>
                    <div className='py-4'>
                        <input 
                            type="password" 
                            name="password" 
                            value={data.password}
                            placeholder='Password' id=""
                            onChange={e =>setData({
                                ...data,
                                password: e.target.value
                            })}
                            className='ring-0 w-full border-0 rounded-md focus:ring-0' 
                        />
                    </div>
                    
                    <div
                        className='flex justify-between'
                    >
                        <div
                            className='flex items-center gap-2 justify-between'
                        >
                            <input 
                                type="checkbox" 
                                name="" id="" 
                                className='ring-0 border-0 rounded-full focus:ring-0' 
                            />
                            <p
                                className='text-xs'
                            >Remember Me</p>
                        </div>
                        <button
                            onClick={() =>handleLogIn()}
                            className='bg-cleotrades_color-green text-white
                             px-5 py-1 rounded-md Btn text-center'
                        >
                           { 
                                isLoading ?
                                <AppSpinner />
                                :
                                'Log In'
                            }
                        </button>
                    </div>

                    <div
                        className='flex py-3 items-center justify-between'
                    >                            
                        <p
                            className='text-xs cursor-pointer'
                        >Forget Password</p>
                       
                        <div
                            className='
                            py-1 rounded-md text-center'
                        >
                            <p
                                className='text-xs cursor-pointer'
                            >Create Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Feauture />
        <Team />
        <section className='w-full py-5 mt-10 sm:px-2 bg-black flex items-center justify-center'>
                <h3 className='text-white'>
                    DMS Make File Access Easy 
                </h3>
            </section>
      </main>
  )
}
