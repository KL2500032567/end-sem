import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import RefExample from './assets/RefExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StateExample/>
      <RefExample/>
      <Timer/>
  )
}

export default App
