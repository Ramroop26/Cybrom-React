import Comp1 from "./Comp1";
import { useState } from "react";
const App=()=>{

  const [user, setUser] =  useState("Ramroop");
  return(
    <>
    <h1>welcome tio cybrome! welcome: {user}</h1>
    <Comp1 user={user}/>
    </>
  )
}
export default App;