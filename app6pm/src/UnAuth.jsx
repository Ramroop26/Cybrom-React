import { useState, useContext } from "react";
import { MyLoginContext } from "./LoginContext";

const UnAuth = () => {
  const [txtval, setTxtVal] = useState("");
  const { login } = useContext(MyLoginContext);

  return (
    <>
      Enter Name:
      <input
        type="text"
        value={txtval}
        onChange={(e) => setTxtVal(e.target.value)}
      />
      <button onClick={() => login(txtval)}>Login!</button>
    </>
  );
};

export default UnAuth;
