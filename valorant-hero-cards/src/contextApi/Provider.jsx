import React, { useState, useEffect } from "react";
import axios from "axios";
import Context from "./Context";

const Provider = ({ children }) => {
  const [character, setCharacter] = useState([]);

  

  useEffect(()=>{
    const func = async() => {await 
      axios.get('https://valorant-api.com/v1/agents')
      .then((response) =>setCharacter(response.data.data))
  }
  func();
},[])
  return (
    <Context.Provider value={{ character, setCharacter }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
