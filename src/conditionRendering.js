import React, { useState } from "react";

//Create Component PrivatePage
function Dashboard(props){
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  )
}

//Create Component GuestPage
function Login(props){
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={props.login}>Login</button>
    </div>
  )
}

function ConditionRenderin() {
  //init State

  const [isLogin, setIsLogin] = useState(false)
  console.log("isLgoin", isLogin);

  return (
    // Code Inside div
    <div>
      {isLogin ? <Dashboard logout={() => setIsLogin(false)} /> : <Login login={() => setIsLogin(true)} />}
    </div>
  );
}

export default ConditionRenderin;
