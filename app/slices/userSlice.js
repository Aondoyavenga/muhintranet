import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null,
    payLoad: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setPayLoad: (state, action) => {
            state.payLoad = action.payload
        }
    }
})

export const { setToken, setPayLoad } = userSlice.actions

export const selectToken = state => state.user.token
export const selectPayLoad = state => state.user.payLoad

export default userSlice.reducer