import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const name=`coderX`;
  const age=21;

  return (
    <>
    <h1>Hello, {name}!</h1>
    <h2>your age is, {age}</h2>
    <p>2 + 2 = {2 + 2}</p>
    </>
  );
}

export default App
