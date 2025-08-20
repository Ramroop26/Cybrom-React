import { useContext } from "react";
import { MyContext } from "./App";
const Jabalpur=()=>{
    const {city, setCity} = useContext(MyContext);
    return(
        <>
        <h1>Welcome to Jabalpur: {city}</h1>
        <button onClick={()=>setCity("Indore")}>click me</button>
        </>
    )
}
export default Jabalpur;