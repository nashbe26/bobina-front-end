import { createSlice } from "@reduxjs/toolkit";

let token_storage = localStorage.getItem('token')
console.log(token_storage)
const initialState = {
    token : token_storage ? true : false
}

export const loggedSlice = createSlice({
    name:"islogged",
    initialState,
    reducers:{
        setToken:(state,{payload})=>{
            console.log(payload);
            state.token = token_storage ? true : false
        }
    }
});

export const {setToken} = loggedSlice.actions;

export default loggedSlice.reducer;