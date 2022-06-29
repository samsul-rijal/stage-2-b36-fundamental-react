import React from "react";

function EmbedExpression() {
  //Create function here

  function getJumlah(a, b){
    const jumlah = a + b

    return jumlah
  }
  //Create a variable here

  const name = 'Samsul Rijal'

  return (
    // Code Inside div
    <div>
      <h2>{name}</h2>
      <h2>{getJumlah(10, 20)}</h2>
    </div>
  );
}

export default EmbedExpression;
