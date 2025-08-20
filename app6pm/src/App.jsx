import { useState, createContext } from "react";

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
