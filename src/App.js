import React from "react";

// import component Header
import Header from "./components/header";

function App() {
  return (
    //   Code Here
    <div>
      <Header />
      Selamat Datang
      <Footer />
    </div>
  );
}

// Create a new component here
function Footer(){
    return(
      <div>
        <h2>Ini Footer</h2>
      </div>
    )
}

export default App;
