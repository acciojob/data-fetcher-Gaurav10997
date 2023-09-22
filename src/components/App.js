
import React, { useState } from "react";
import './../styles/App.css';
import { useEffect } from "react";

const App = () => {
  const [data,setData] = useState({})
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])
  return (
    <div>
       <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default App
