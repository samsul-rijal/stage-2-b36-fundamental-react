import React from "react";

function Event() {
  //Create function here
  function Hello() {
    return alert("Hallo Batch 36")
  }

  const name = 'Surya'

  return (
    // Code Inside div
    <div>
      <button onClick={Hello}>Klik Batch</button>
      <button onClick={() => alert("Selamat Pagi")}>Klik Me</button>
      <button onClick={() => alert(name)}>Klik Name</button>
    </div>
  );
}

export default Event;
