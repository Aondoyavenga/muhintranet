import axios from "axios"
import { setError, setSuccess } from '../app/slices/uiSlice'
import { setToken } from "../app/slices/userSlice"

export const handleRegistration = async (body, dispatch) => {
    try {
        const { data } = await axios.post(`${process.env.APP_BASE_URL}/user/register`, body)
        dispatch(setSuccess(data.message))
    } catch (error) {
        dispatch(setError(error?.response?.data?.message))
    }
    
}

export const handleUserLogIn = async ( body, dispatch ) =>{
    try {
        const { data } = await axios.post(`${process.env.APP_BASE_URL}/user/login`, body)
        dispatch(setToken(data))
    } catch (error) {
        dispatch(setError(error?.response?.data?.message))
    }
}