import React, { useState } from 'react'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home className="home"/>
    </>
  )
}

export default App
