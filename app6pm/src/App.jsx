// import { useState, createContext } from "react";

// import Cybrom from "./Cybrom";

// import Bhopal from "./Bhopal";

// const MyContext = createContext();

// const App = () => {
//   const [city, setCity] = useState("Ramroop");

//   return (
//     <>
//     <button onClick={()=>setCity("Ujjain")}>click me</button>
//       <h1>welcome to : {city}</h1>
//       <MyContext.Provider value={{city, setCity}}>
//         <Bhopal />
//       </MyContext.Provider>


//     </>
//   );
// };

// export default App;
// export{MyContext};

// import Cybrom1 from "./Cybrom1";

// const App=()=>{
//   return(
//     <>
//     <Cybrom1>
//       <h1>welcome to cybrom</h1>
//     </Cybrom1>
//     </>
//   )
// }

// export default App;
// import Auth from "./Auth";
// import UnAuth from "./UnAuth";
// import { useContext} from "react";
// import { MyLoginContext } from "./LoginContext";

// const App=()=>{
//   const {user} = useContext(MyLoginContext);
//   return(
//     <>
//     <h1>Login System</h1>
//     {user.auth? <Auth/> : <UnAuth/>}
//     </>
//   )
// }
// export default App;

// import { useRef } from "react";

// const App = () => {
//   const myRef = useRef();

//   const display1 = () => {
//     myRef.current.style.fontSize = "30px";
//     myRef.current.style.borderRadius = "10px";
//     myRef.current.style.border = "3px solid red";
//     myRef.current.style.width = "30px";
//     myRef.current.style.height = "70%";

//   };

//   const display2 = () => {
//     myRef.current.style.color = "blue";
//     myRef.current.style.fontWeight = "bold";
//   };

//   const display3 = () => {
//     myRef.current.style.backgroundColor = "yellow";
//     myRef.current.style.padding = "50px";
//   };

//   return (
//     <>
//       <button onClick={display1}>Style 1</button>
//       <button onClick={display2}>Style 2</button>
//       <button onClick={display3}>Style 3</button>
//       <div ref={myRef}>Welcome To Cybrom</div>
//     </>
//   );
// };

// export default App;


// import { useRef, useState, useEffect } from "react"

// const App=()=>{
//   const [txtval, setTxtVal] = useState("");
//   useEffect(()=>{
//     myRef.current=myRef.current+1;
//   })

//   const myRef = useRef(0);
//   console.log(myRef.current);
  
//   return(
//     <>
//     Enter Name: <input type="text" value={txtval}  onChange={(e)=>{setTxtVal(e.target.value)}}/>
//     <h1>My Render Count:</h1>
//     </>
//   )
// }
// export default App;

// import { useReducer } from "react";

// const App=()=>{
//   const myMethod=(state, action)=>{
//     switch(action){
//       case "Increase":
//         return state+1;
//         case "Decrease":
//           return state-1;
//           default:
//             return state;

//     }
//   }

//   const [count, dispatch] = useReducer(myMethod, 0);
//   return(
//     <>
//     <h1>My Counter Program Using useReducer</h1>
//     <button onClick={()=>{dispatch("Increase")}}>Increment</button>

//     <h1>Count: {count}</h1>
//     <button onClick={()=>{dispatch("Decrease")}}>Decrement</button>
//     </>
//   )

// }
// export default App;

import { useReducer } from "react";
const App=()=>{
  const myMethod=(state, action)=>{
    switch(action){
      case"red":
      return "red";
      case "green":
        return "green";
        case "blue":
          return "blue";
          case "yellow":
            return "yellow";
            default :
            return state;

    }

  }
  const [color, dispatch] = useReducer(myMethod, "red")
  return(
    <>
    <h1>My Color Program Using UseReducer</h1>
    <button onClick={()=>{dispatch("red")}}>Red</button>
    <button onClick={()=>{dispatch("green")}}>Green</button>
    <button onClick={()=>{dispatch("blue")}}>Blue</button>
    <button onClick={()=>{dispatch("yellow")}}>Yellow</button>
    <div style =  {{
      backgroundColor: color,
          width: "300px",
          height: "200px",
          marginTop: "20px",
          border: "2px solid black",}}>
    </div>
    </>
  )
}
export default App;
