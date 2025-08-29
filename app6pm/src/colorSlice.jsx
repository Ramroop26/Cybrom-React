import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name:"mycolor",
    initialState:{
        color:"white"
    },
    reducers:{
        colorChange:(state=>{
            state.color="red";
        })
         Blue :(state=>{
            state.color="blue";
        })
          Green:(state=>{
            state.color="green";
        })
          Yellow:(state=>{
            state.color="yellow";
        })
        
    }
})

export const {colorChange, Blue,Green} = colorSlice.actions;
export default colorSlice.reducer;