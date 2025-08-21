// import College from "./College";
import { useContext } from "react";
import {UserContext} from "./MyContext";

const Cybrom=()=>{
    const {user, setUser} =  useContext(UserContext);
    return(
        <>
        <h1>welcome to Cybrom : {user} </h1>
        <button onClick={()=>setUser("Ramroop")}>click me</button>
      
        </>
    )
}
export default Cybrom;