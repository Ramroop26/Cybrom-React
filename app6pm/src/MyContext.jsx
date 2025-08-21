import { createContext, useState } from "react";

const UserContext = createContext();
const MyContext=({children})=>{
    const [user, setUser] = useState("Rohit");
    return(
        <>
<UserContext.Provider value={{user, setUser}}>
    {children}
</UserContext.Provider>

        </>
    )
}
export default MyContext;
export {UserContext};