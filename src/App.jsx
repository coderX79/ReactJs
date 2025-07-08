import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const name=`coderX`;
  const clgName=`Dr. D. Y. Patil Institute of Technology`
  const age=21;
  
  return(
    <>
      <h1>{name}</h1>
      <h1>{clgName}</h1>
     {age>18 ? <h1>Eligible!</h1> : <h1>Not eligible</h1>}
    </>
  );
}

export default App
