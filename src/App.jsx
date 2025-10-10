import { useState } from 'react'
import './App.css'
import Testing from './components/Testing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Testing/>
    </>
  )
}

export default App
