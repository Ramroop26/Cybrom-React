import { useState, createContext } from "react";
import Cybrom from "./Cybrom";
import Bhopal from "./Bhopal";
const MyContext = createContext();
const App = () => {
  const [city, setCity] = useState("Ramroop");
  return (
    <>
    <button onClick={()=>setCity("Ujjain")}>click me</button>
      <h1>welcome to : {city}</h1>
      <MyContext.Provider value={{city, setCity}}>
        <Bhopal />
      </MyContext.Provider>
    </>
  );
};
export default App;
export{MyContext};





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


//useMemo used to Memorized value Dalta hai or Performance  
// import { useState } from "react";
// import { useMemo } from "react";
// const App=()=>{
//   const[add, setAdd] = useState(0);
//   const [sub, setSub] = useState(100);
//   const  myMultiVal = useMemo(myMulti, [add]);
//   function myMulti(){
//     console.log("*****");
//     return add*2;
//   }
//   return(
//     <>
//     <h1>My App</h1>
//     <h1>My Multiplication : {myMultiVal} </h1>
//     <button onClick={()=>{setAdd(add+1)}}>Addition</button>
//     <h2>Addition : {add}</h2>
//     <button onClick={()=>{setSub(sub-1)}}>Substraction</button>
//     <h2>Substraction : {sub}</h2>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import { useMemo } from "react";
// const App=()=>{
//   const [name, setName] = useState("");
//   const [num, setNum] = useState("");
//   const myVal = useMemo(MyFunction, [num]);
//   function MyFunction(){
//     for(var i=0; i<1000000; i++){}
//     return num*2;
//   }
//   return(
//     <>
// <h1>My App</h1>
// Select Number : <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}} /> <br /><br />
// Enter Name : <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}}/> <br /> <br />
// <h2>My Thousand : {myVal}</h2>
//     </>
//   )
// }
// export default App;

// import {useSelector, useDispatch} from "react-redux";
// import { increment, decrement } from "./counterSlice";
// const App=()=>{
//   const mycount = useSelector(state=>state.mycounter.count);
//   const dispatch = useDispatch();
//   return(
//     <>
//     <h1>Welcome to My App</h1>
//     <button onMouseOver={()=>{dispatch(increment())}}>Increment</button>
//     <h1>Count:{mycount}</h1>
//     <button onMouseOver={()=>{dispatch(decrement())}}>Decrement</button>
//     </>
//   )
// }
// export default App;

// import { useDispatch, useSelector } from "react-redux";
// import {colorChange,Blue,Green,Yellow} from "./colorSlice";
// const App=()=>{
//   const bgcolor = useSelector(state=>state.mycolor.color);
//   const dispatch = useDispatch();
//   return(
//     <>
//     <h1>Welcome!</h1>
//     <button onClick={()=>{dispatch(colorChange())}}>Red</button>
//     <button onClick={()=>{dispatch(Blue())}}>Blue</button>
//     <button onClick={()=>{dispatch(Green())}}>green</button>
//     <button onClick={()=>{dispatch(Yellow())}}>yellow</button>



//     <div style={{width:"500px", height:"200px", backgroundColor:bgcolor}}>

//     </div>
//     </>
//   )
// }
// export default App;

// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
// import { colorIn } from "./colorSlice";

// const App = () => {
//   const bgcolor = useSelector((state) => state.mycolor.color);
//   const dispatch = useDispatch();
//   const [inputColor, setInputColor] = useState("");

//   return (
//     <>
//       <h1>Welcome! Color: red,
//         blue,  green,
//         yellow, grey,
//         white, black,
//         pink,  orange,
//         aliceblue, aqua,
//         aquamarine, azure,
//         beige, chartreuse,
//         chocolate, coral,
//         cornflowerblue, cyan,
//         firebrick, forestgreen,
//         fuchsia, indigo,
//         khaki, lavender,
//         lime, magenta,
//         maroon, midnightblue,
//         moccasin, plum,
//         salmon, silver,
//         skyblue, slategrey,
//         springgreen, steelblue,
//         wheat, purple,
//         antiquewhite, bisque,
//         blueviolet, burlywood,
//         cadetblue, cornsilk,
//         crimson, darkblue, darkcyan</h1>
//       Enter Color: <input type="text" value={inputColor} onChange={(e) => setInputColor(e.target.value)} />
//       <button onClick={() => dispatch(colorIn(inputColor))}>Click Me</button>
//       <br /> <br />
//       <div
//         style={{ width: "100%", height: "200px", backgroundColor: bgcolor, border: "2px solid firebrick", boxShadow: "2 0 0 black",  }}>

//       </div>
//     </>
//   );
// };

// export default App;
// src/App.jsx
// import { useState } from "react"
// import { useDispatch, useSelector} from "react-redux";
// import { addTask, editTaskSave, taskComplete, taskDelete, taskInComplete } from "./todoSlice";

// const App=()=>{
//   const [txtval, setTxtVal]= useState("");
//   const [btnStatus, setBtnStatus] = useState(true);
//   const [myid, setMyId] = useState("");
//   const myTask= useSelector(state=>state.mytodo.task);
//   console.log(myTask);
//   const dispatch=useDispatch();
//   const taskEdit=(id, work)=>{
//     setMyId(id)
//     setTxtVal(work);
//     setBtnStatus(false);
//   }
//   const myEditSave=()=>{
//     dispatch(editTaskSave({id:myid, newTask:txtval}))
//     setBtnStatus(true);
//     setTxtVal("");
//   }

//   let sno=0;
//   const ans= myTask.map((key)=>{
//     sno++;
//     return(
//       <>
//       <tr>
//         <td>{sno}</td>
//         <td>
//           {key.status ? (<>
//           <span style={{color:'red', textDecoration:'line-through'}}> {key.work}</span>
//           </>) : (<>
//           {key.work}
//           </>)}
//         </td>
//         <td>
//           <button onClick={()=>{dispatch(taskDelete({id:key.id}))}}>Delete</button>
//         </td>
//         <td>
//           <button onClick={()=>{dispatch(taskComplete({id:key.id}))}}>Complete</button>
//         </td>
//         <td>
//           <button onClick={()=>{dispatch(taskInComplete({id:key.id}))}}>InComplete</button>
//         </td>
//         <td>
//           <button onClick={()=>{taskEdit(key.id, key.work)}}>Edit</button>
//         </td>
//       </tr>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>To do App:</h1>
//     <hr />
//     Enter Your Task: <input type="text" value={txtval}
//     onChange={(e)=>{setTxtVal(e.target.value)}} />

//     {btnStatus ? (<>
    
   
//     <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txtval, status:false}))}}>Add</button>
//     </>) : (<>
//     <button onClick={myEditSave}>Edit Save</button>

//        </>)}

//     <hr />
//     <table>
//       <tr>
//         <th> Sno.</th>
//         <th> your Task</th>
//         <th></th>
//         <th></th>
//         <th></th>
//       </tr>
//       {ans}
//     </table>
//     </>
//   )
// }
// export default App;


import { useState } from "react";
import axios from "axios";
const App=()=>{
  const [image, setImage] =  useState("");

  const handleInputImage=(e)=>{
    setImage(e.target.files[0]);

  }

  const handleSubmit=async()=>{
    const formData = new FormData();
   formData.append("file", image);
    formData.append("upload_preset", "image1");
    const response = await axios.post("https://api.cloudinary.com/v1_1/dkm5xgamv/image/upload", formData);
    console.log(response.data);
    console.log(response.data.url);
    document.getElementById("myimg").src=response.data.url;

  }
  return(
    <>

<h1>Upload Image</h1>
Upload Image: <input type="file"  onChange={handleInputImage} />
<button onClick={handleSubmit}>Upload !</button>
<img  id="myimg"/>
    </>
  )
}
export default App;