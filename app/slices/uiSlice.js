import { createSlice } from "@reduxjs/toolkit"

const initialState  = {
    Error: null,
    success: null,
    isReg: false,
    isLoading: false,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setError: (state, action) => {
            state.Error = action.payload
        },
        setSuccess: (state, action) => {
            state.success = action.payload
        },
        setIsReg: (state, action) => {
            state.isReg = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setError, setIsReg, setSuccess, setIsLoading } = uiSlice.actions

export const selectError = state => state.ui.Error
export const selectIsReg = state => state.ui.isReg
export const selectSuccess = state => state.ui.success
export const selectIsLoading = state => state.ui.isLoading

export default uiSlice.reducer