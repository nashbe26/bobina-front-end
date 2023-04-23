import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode:"",
    lang:""
}

export const modeSlice = createSlice({
    name:"mode",
    initialState,
    reducers:{
        fetchMode:(state,{payload})=>{
            console.log(payload);
            state.mode = payload
        },
        fetchLang:(state,{payload})=>{
            console.log(payload);
            state.lang = payload
        },
    }
});

export const {fetchMode,fetchLang} = modeSlice.actions;

export default modeSlice.reducer;