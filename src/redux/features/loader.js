import { createSlice } from '@reduxjs/toolkit'


export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        loading: false
    },
    reducers: {
        startLoading: (state) => {
            state.loading = true
        },
        stopLoading: (state) => {
            state.loading = false
        }
    }
})

export default loaderSlice.reducer;

export const { startLoading, stopLoading } = loaderSlice.actions;
