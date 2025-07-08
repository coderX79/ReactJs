import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const isLoggedIn = true;
  
  return(
    <>
     {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </>
  );
}

export default App
