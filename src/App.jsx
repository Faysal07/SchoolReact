import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>If you click me, I will count you.</h1>
      <a href="#" onClick={() => setCount(count+1)}>Click Me</a>

      <p>You click me :  {count} Times</p>
    </>
  )
}

export default App
