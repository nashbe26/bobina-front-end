import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:"waiting" | "succeeded" | "fetching",
    text:null,
    premPack:false,
    modePrem:false
}

export const rewriteStatusSlice = createSlice({
    name:"rewriteStatus",
    initialState,
    reducers:{
        isRewriteLoading:(state,{payload})=>{
            console.log(payload);
            state.status = payload
        },
        rewriteData:(state,{payload})=>{
            console.log(payload);
            state.text = payload
        },
        setPremPack:(state,{payload})=>{
            console.log(payload);
            state.premPack = payload
        },
        setModePrem:(state,{payload})=>{
            console.log(payload);
            state.modePrem = payload
        }
    }
    
});

export const {isRewriteLoading,rewriteData,setPremPack,setModePrem} = rewriteStatusSlice.actions;

export default rewriteStatusSlice.reducer;