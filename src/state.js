import React, { useState } from "react";

function State() {
  //init State
  const [counter, setCounter] = useState(0)
  console.log(counter);

  //Create Function Add
  function Add(){
   return setCounter(counter + 1)
  }

  //Create Function Less
  function Less(){

    if(counter > 0){
      return setCounter(counter - 1)
    } 
  }

  return (
    // Code Inside div
    <div>
      <h2>{counter}</h2>
      <button onClick={Add}>Add Number</button>
      <button onClick={Less}>Less Number</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default State;
