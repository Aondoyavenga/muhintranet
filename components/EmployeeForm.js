import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectIsLoading, selectSuccess } from '../app/slices/uiSlice'
import { handleRegistration } from '../appHook/userHooks'
import AppSpinner from '../global/AppSpinner'

const EmployeeForm = () => {
    const dispatch = useDispatch()
    const Error = useSelector(selectError)
    const success = useSelector(selectSuccess)
    const isLoading = useSelector(selectIsLoading)
    const [data, setData] = useState({
        age: '',
        bday: '',
        city: '',
        state: '',
        email: '',
        gender: '',
        mobile: '',
        address: '',
        zipeCode: '',
        telehone: '',
        education: '',
        last_name: '',
        department: '',
        first_name: '',
        maritalStatus: '',
        password: '',
        passwordConfirm: ''
    })
    const handleChage = e => {
        const { name, value } = e.target
        
        setData({
            ...data,
            [name]: value
        })
        if(name == 'bday') {
            const d = new Date().getFullYear()
            const birth = new Date(value).getFullYear()
            const myAge = d - birth
           
            setData({
                ...data,
                bday: value,
                age: myAge
            })
        }
    }

    const gError = Error && Error?.includes('Is')

    return (
        <Fragment>
            <div id="step1">
                {
                    Error && !gError &&
                    <p className='text-red-500'> {Error} </p>
                }
                {
                    success &&
                    <div
                        className='w-full 
                        bg-cleotrades_color-green text-white text-lg shadow-md 
                        rounded-md px-3 animate-pulse
                        '
                    >
                        <p> {success} </p>
                    </div>
                }
                <fieldset className="form-step">
                        <div className="grid items-center grid-flow-row-dense gap-2 container
                        md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto">
                            <label className="text-right md:col-span-3 sm:col-span-2 xs:col-span-12" htmlFor="first_name">
                                First Name
                            </label>
                            <div className="my-3 md:col-span-9 sm:col-span-6 xs:col-span-12">
                                {
                                    Error && Error?.includes('First Name') &&
                                    <span className='text-red-500'>{Error}</span>
                                }
                                <input 
                                    type="text" 
                                    id="first_name"  
                                    className="w-full rounded-md focus:ring-0" 
                                    name="first_name" 
                                    value={data.first_name}
                                    placeholder="First Name" 
                                    onChange={e =>handleChage(e)}
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                                
                            </div> 
                        </div>
                        <div className="grid items-center grid-flow-row-dense gap-2 container
                        md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto">
                            <label className="text-right md:col-span-3 sm:col-span-2 xs:col-span-12" htmlFor="family_name">
                                Last Name  
                            </label>
                            <div className="my-3 md:col-span-9 sm:col-span-6 xs:col-span-12">
                                {
                                    Error && Error?.includes('Last Name') &&
                                    <span className='text-red-500'>{Error}</span>
                                }
                                <input 
                                    type="text" 
                                    id="last_name"  
                                    className="w-full rounded-md focus:ring-0" 
                                    name="last_name"
                                    value={data.last_name}
                                    placeholder="Last Name" 
                                    onChange={e =>handleChage(e)}
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                            </div> 
                        </div>
                        <div className="grid items-center grid-flow-row-dense gap-2 container
                        md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto">
                            <label className="text-right md:col-span-3 sm:col-span-2 xs:col-span-12" htmlFor="last-name">
                                Address  
                            </label>
                            <div className="my-3 md:col-span-9 col-sm-9 xs:col-span-12">
                                {
                                    Error && Error?.includes('Address') &&
                                    <span className='text-red-500'>{Error}</span>
                                }
                                <input 
                                    type="text" 
                                    id="streetaddress"  
                                    className="w-full rounded-md focus:ring-0" 
                                    name="address" 
                                    placeholder="Address"
                                    value={data.address} 
                                    onChange={e =>handleChage(e)}
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                            </div>
                        </div>
                        <div className="grid items-center grid-flow-row-dense gap-2 container
                        md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto">
                            <label htmlFor="city" className="control-label md:col-span-3 sm:col-span-2 xs:col-span-12">&nbsp;</label>
                            <div className="my-3 md:col-span-3 sm:col-span-3 xs:col-span-12">
                                {
                                    Error && Error?.includes('City') &&
                                    <span className='text-red-500'>{Error}</span>
                                }
                                <input 
                                    type="text" 
                                    id="city"  
                                    className="w-full rounded-md focus:ring-0" 
                                    name="city" 
                                    value={data.city}
                                    placeholder="City" 
                                    onChange={e =>handleChage(e)}
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                            </div>
                            <div className="my-3 md:col-span-3 sm:col-span-3 xs:col-span-12">
                                {
                                    Error && Error?.includes('State') &&
                                    <span className='text-red-500'>{Error}</span>
                                }
                                <input 
                                    type="text" 
                                    id="state"  
                                    className="w-full rounded-md focus:ring-0" 
                                    name="state" 
                                    value={data.state}
                                    placeholder="State" 
                                    onChange={e =>handleChage(e)}
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                            </div>
                            <div className="my-3 md:col-span-3 sm:col-span-3 xs:col-span-12">
                                <input 
                                    type="text" 
                                    id="zipeCode"  
                                    className="w-full rounded-md focus:ring-0" 
                                    name="zipeCode"
                                    value={data.zipeCode} 
                                    placeholder="Zipe Code" 
                                    onChange={e =>handleChage(e)}
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                            </div>
                        </div>
                        <div className="grid items-center grid-flow-row-dense gap-2 container
                        md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto">
                            <label className="text-right md:col-span-3 sm:col-span-2 xs:col-span-12">Gender</label>
                            <div className="my-3 md:col-span-3 sm:col-span-3 xs:col-span-12">
                                {
                                    Error && Error?.includes('Gender') &&
                                    <span className='text-red-500'>{Error}</span>
                                }
                                <select
                                    name='gender'
                                    value={data.gender}
                                    onChange={e =>handleChage(e)}
                                    className='w-full focus:ring-0 rounded-md'
                                >
                                    <option value=""></option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <label className="md:col-span-1 col-sm-1 xs:col-span-12">Birthday</label>
                            <div className="my-3 md:col-span-3 col-sm-3 xs:col-span-12">
                                
                                <div className="form-group">
                                    {
                                        Error && Error?.includes('Birth') &&
                                        <span className='text-red-500'>{Error}</span>
                                    }
                                    <input 
                                        type="date" 
                                        id="bday" 
                                        className="w-full rounded-md focus:ring-0" 
                                        name="bday" 
                                        value={data.bday}
                                        placeholder="Birth Date" 
                                        onChange={e =>handleChage(e)}
                                        required="required" data-parsley-group='block1' minlength="2"
                                    />
                                </div>
                            </div>

                            <div className="my-3 md:col-span-2 sm:col-span-2 xs:col-span-12">
                                {
                                    Error && Error?.includes('Age') &&
                                    <span className='text-red-500'>{Error}</span>
                                }
                                <input 
                                    type="number" 
                                    id="age" 
                                    className="w-full rounded-md focus:ring-0" 
                                    name="age"
                                    readOnly
                                    value={data.age}
                                    placeholder="Age"                                    
                                />
                            </div>
                        </div>
                        
                        <div className="grid items-center grid-flow-row-dense gap-2 container
                        md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto">
                            <label className="text-right md:col-span-3 sm:col-span-2 xs:col-span-12">
                                Contact
                            </label>
                            <div className="my-3 md:col-span-3 sm:col-span-3 xs:col-span-12">
                                {
                                    Error && Error?.includes('Email') &&
                                    <span className='text-red-500'>{Error}</span>
                                }
                                <input 
                                    type="text" 
                                    id="email"  
                                    className="w-full rounded-md focus:ring-0" 
                                    name="email" 
                                    value={data.email}
                                    placeholder="Email Address" 
                                    onChange={e =>handleChage(e)}
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                            </div>
                            <div className="my-3 md:col-span-3 sm:col-span-3 xs:col-span-12">
                                {
                                    Error && Error?.includes('Mobile') &&
                                    <span className='text-red-500'>{Error}</span>
                                }
                                <input 
                                    type="tel" 
                                    id="mobile" 
                                    name="mobile" 
                                    value={data.mobile}
                                    onChange={e =>handleChage(e)}
                                    className="w-full rounded-md focus:ring-0" 
                                    placeholder="Mobile Number" 
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                            </div>
                            <div className="my-3 md:col-span-3 sm:col-span-3 xs:col-span-12">
                                <input 
                                    type="tel" 
                                    name="telehone" 
                                    id="telephone" 
                                    value={data.telehone} 
                                    onChange={e =>handleChage(e)}
                                    className="w-full rounded-md focus:ring-0" 
                                    placeholder="Telephone Number" 
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                            </div>
                        </div>

                        <div className="grid items-center grid-flow-row-dense gap-2 container
                        md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto">

                            <label className="text-right md:col-span-3 sm:col-span-2 xs:col-span-12">
                                Marital Status
                            </label>
                            <div className="my-3 md:col-span-4 sm:col-span-3 xs:col-span-12">
                                
                                <select 
                                    name="maritalStatus" 
                                    id="maritalStatus"
                                    value={data.maritalStatus}
                                    onChange={e =>handleChage(e)}
                                    className='w-full focus:ring-0 rounded-md'
                                >
                                    <option value=""></option>
                                    <option value="Single">Single</option>
                                    <option value="Marrid">Married</option>
                                </select>
                               
                            </div>
                            <label className="md:col-span-1 sm:col-span-2 xs:col-span-12">
                                Education
                            </label>
                            <div className="my-3 md:col-span-4 sm:col-span-3 xs:col-span-12">
                                <input 
                                    type="tel" 
                                    id="education" 
                                    name="education"
                                    value={data.education}
                                    className="w-full rounded-md focus:ring-0" 
                                     onChange={e =>handleChage(e)}
                                    placeholder="Qualification" 
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                                <div className="clearfix"></div>
                                <div id="e-status-error"></div>
                            </div>
                        </div>
                        
                        <div className="grid items-center grid-flow-row-dense gap-2 container
                        md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto">

                            <label className="text-right md:col-span-3 sm:col-span-2 xs:col-span-12">
                                Password
                            </label>
                            <div className="my-3 md:col-span-4 sm:col-span-3 xs:col-span-12">
                                
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password"
                                    value={data.password}
                                    className="w-full rounded-md focus:ring-0" 
                                     onChange={e =>handleChage(e)}
                                    placeholder="Password" 
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                            </div>
                            <label className="md:col-span-1 sm:col-span-2 xs:col-span-12">
                                Confirm
                            </label>
                            <div className="my-3 md:col-span-4 sm:col-span-3 xs:col-span-12">
                                <input 
                                    type="password" 
                                    id="passwordConfirm" 
                                    name="passwordConfirm"
                                    value={data.passwordConfirm}
                                    className="w-full rounded-md focus:ring-0" 
                                     onChange={e =>handleChage(e)}
                                    placeholder="Confirm Password" 
                                    required="required" data-parsley-group='block1' minlength="2"
                                />
                                
                            </div>
                        </div>
                        
                        <div className="grid items-center grid-flow-row-dense gap-2 container
                        md:grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto">
                            <label className="text-right md:col-span-3 sm:col-span-2 xs:col-span-12">
                                Department
                            </label>
                            <div className="my-3 md:col-span-9 col-sm-9 xs:col-span-12 col-md-offset-2 text-right">
                                <select 
                                    name="department" 
                                    id="department"
                                    value={data.department}
                                    onChange={e =>handleChage(e)}
                                    className='w-full focus:ring-0 rounded-md'
                                >
                                    <option value=""></option>
                                    <option value="ICT">ICT</option>
                                    <option value="HRM">HRM</option>
                                </select>
                            </div>
                            
                        </div>
                        
                    </fieldset>
                
    
            </div>
        <div className="my-3 md:col-span-12 col-sm-12 xs:col-span-12 col-md-offset-2 text-center">    
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

                <button
                    disabled={isLoading}
                    onClick={() =>handleRegistration(data, dispatch, setData)}
                    className='Btn bg-cleotrades_color-green px-6 rounded-md text-white py-2'
                >
                    { 
                        isLoading ?
                        <AppSpinner />
                        :
                        'Submit'
                    }
                </button>
            </div>
        </div>
    </Fragment>
    )
}

export default EmployeeForm