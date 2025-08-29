// import {configureStore} from "@reduxjs/toolkit";
// import myReducer from "./counterSlice";

// const store = configureStore({
//     reducer:{
//         mycounter:myReducer
//     }
// })
// export default store;


import {configureStore} from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";

const store = configureStore({
    reducer:{
        mycolor:colorReducer
    }
})
export default store;