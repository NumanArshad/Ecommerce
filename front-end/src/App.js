import React, { useEffect,useState } from 'react';
import Header from "./common/layouts/header"
import Root from "./routes"

function App() {
  const [isVisible,setVisible]=useState(true)

  useEffect(()=>{
const path=window.location.pathname.split('/')
if(path.includes("admin") || path.includes("login") || path.includes("signup")){
  setVisible(false)
}
  },[])
  return (
    <>
  {isVisible && <Header /> }
<Root />
    </>
  );
}

export default App;
