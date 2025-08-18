import { useState, createContext } from "react";

import Bhopal from "./Bhopal";

const myContext = createContext();

const App = () => {
  const [city, setCity] = useState("Ramroop");

  return (
    <>
    <button onClick={()=>{}}></button>
      <h1>welcome to : {city}</h1>
      <myContext.Provider value={city}>
        <Bhopal />
      </myContext.Provider>
    </>
  );
};

export default App;
export { myContext };
