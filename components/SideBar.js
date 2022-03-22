import { UserIcon, XIcon } from '@heroicons/react/solid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPayLoad, selectToken, setToken } from '../app/slices/userSlice'
import { authenticatedUser } from '../appHook/userHooks'

const SideBar = () => {
    const token = useSelector(selectToken)
    const dispatch = useDispatch()
    const user = useSelector(selectPayLoad)
    useEffect(() =>{
       if(token) return authenticatedUser(token, dispatch)
    }, [token])

    useEffect( async() =>{
        const tokenkey = await AsyncStorage.getItem('token')

        if(tokenkey) return dispatch(setToken(tokenkey)) 
        window.location('/')
    }, [])
    return (
        <Fragment>
            
            <div
                className='flex-[0.3] bg-slate-100 h-[100vh]'
            >

                <div className="flex-shrink-0 flex-1 flex flex-row items-center
					bg-gray-200 px-2 py-4 justify-between shadow-sm  sticky z-10 top-0
				"
				onClick={() =>{}}
                >
                  
					 <XIcon
                        
                        className='w-8 mr-1 hover:text-cleotrades_color-yellow
                            hidden sm:flex
                        '
                    />
                </div>

                <section 
                    className='px-3'
                >

                   <div 
                        className='flex items-center flex-col justify-center py-4'
                   >
                       <div
                            className='flex justify-center items-center
                                rounded-full w-28 h-28 shadow-md p-3
                            '
                       >
                           <UserIcon 
                                className='h-28 w-28 text-gray-500'
                           />
                        </div>

                        <ul 
                            className='flex flex-row'
                        >
                            <li
                                className='text-sm text-gray-500 font-semibold cursor-pointer'
                            > 
                                {`${user?.first_name} ${user?.last_name}`} 
                            </li>
                        </ul>
                        <ul 
                            className='flex flex-row'
                        >
                            <li
                                className='text-sm text-gray-500 font-semibold cursor-pointer'
                            > 
                                {` ${user?.mobile}`} 
                            </li>
                        </ul>
                        <ul 
                            className='flex flex-row'
                        >
                            <li
                                className='text-sm text-gray-500 font-semibold cursor-pointer'
                            > 
                                {` ${user?.email}`} 
                            </li>
                        </ul>
                        <ul 
                            className='flex flex-row'
                        >
                            <li
                                className='text-sm text-gray-500 font-semibold cursor-pointer'
                            > 
                                {` ${user?.department}`} 
                            </li>
                        </ul>
                        <ul 
                            className='flex flex-row'
                        >
                            <li
                                className='text-sm text-gray-500 font-semibold cursor-pointer'
                            > 
                                {` ${user?.address}`} 
                            </li>
                        </ul>
                   </div>
                </section>

            </div>
        </Fragment>
  )
}

export default SideBar