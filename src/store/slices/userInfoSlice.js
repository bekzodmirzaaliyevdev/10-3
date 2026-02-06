import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userInfo: null
}

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload
        },
        logout: (state, action) => {
            state.userInfo = null
        }
    }
})

export const { login, logout } = userInfoSlice.actions

export default userInfoSlice.reducer