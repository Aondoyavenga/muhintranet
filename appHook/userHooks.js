import axios from "axios"
import { setError, setIsLoading, setSuccess } from '../app/slices/uiSlice'
import { setPayLoad, setToken } from "../app/slices/userSlice"


export const authenticatedUser = async (token, dispatch) => {
    try {
        const { data, status } = await axios.get(`/api/user/authenticated/${token}`)
        if(status == 200) return dispatch(setPayLoad(data))
    } catch (error) {
        dispatch(setError(error?.response?.data?.message))
    }
}

export const handleRegistration = async (body, dispatch, setData) => {
    dispatch(setIsLoading(true))
    setTimeout(() =>{
        dispatch(setSuccess(null))
    }, 7000)
    try {
        dispatch(setError(null))
        const { data, status } = await axios.post(`/api/user/register`, body)
        
       if(status == 200) return (
            dispatch(setSuccess(data.message)),
            setData({
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
            }),
            dispatch(setIsLoading(false))

            
            )
    } catch (error) {
        dispatch(setIsLoading(false))
        dispatch(setError(error?.response?.data?.message))
    }
    
}

export const handleUserLogIn = async ( body, dispatch, setData, AsyncStorage ) =>{
    try {
        dispatch(setIsLoading(true))
        const { data, status } = await axios.post(`/api/user/login`, body)
       if(status == 200) return (
           AsyncStorage.setItem('token', data),
           dispatch(setToken(data)),
           setData({
                email: '',
                password: ''
           }),
        dispatch(setIsLoading(false))
        )
    } catch (error) {
        dispatch(setIsLoading(false))
        dispatch(setError(error?.response?.data?.message))
    }
}
