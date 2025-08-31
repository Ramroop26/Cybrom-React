// import { createSlice } from "@reduxjs/toolkit";

// const colorSlice = createSlice({
//     name:"mycolor",
//     initialState:{
//         color:"white"
//     },
//     reducers:{
//         colorChange:(state=>{
//             state.color="red";
//         }),
//         Blue :(state=>{
//             state.color="blue";
//         }),
//         Green:(state=>{
//             state.color="green";
//         }),
//         Yellow:(state=>{
//             state.color="yellow";
//         })
//     }
// })
// export const {colorChange, Blue,Green,Yellow} = colorSlice.actions;
// export default colorSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "mycolor",
  initialState: { color: "white" },
  reducers: {
    colorIn: (state, action) => {
      state.color = action.payload; 
    },
  },
});

export const { colorIn } = colorSlice.actions;
export default colorSlice.reducer;

