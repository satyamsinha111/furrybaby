import { createSlice } from "@reduxjs/toolkit"

export const dialogSlice = createSlice({
    name:"dialog",
    initialState:{
        show:false,
        message:null,
        isError:false,
        heading:''
    },
    reducers:{
        showDialog:(state)=>{
            state.show = true;
        },
        closeDialog:(state)=>{
            state.show = false;
        },
        setMessage: (state,message)=>{
            state.message = message
        },
        setFlag: (state,flag)=>{
            state.isError = flag
        },
        setHeading: (state,heading)=>{
            state.heading = heading
        }
    }
})

export default dialogSlice.reducer;

export const { showDialog, closeDialog,setMessage,setHeading,setFlag } = dialogSlice.actions;