import { useState } from "react";
import { MyLoginContext } from "./LoginContext";

const Auth=()=>{
    const [user, logout] = useState({MyLoginContext});
    return (
        <>
        <h1>welcome {user.name} !</h1>
        <button onClick={()=>{logout()}}>Logout</button>
        <br />
        </>
    )
}
export default Auth;