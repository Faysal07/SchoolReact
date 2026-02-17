import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'
import StudentForm from './components/StudentForm'
import ProductList from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Please Entry Student Information</h2>
      <StudentForm />

      <div className="cardbox">
        <h1>Hi, </h1>
        <h1>If you click me, I will count you.</h1>
        <a href="#" onClick={() => setCount(count+1)}>Click Me</a>
      </div>

      <Student name="Faysal" catagory="CSE" />

      <p>You click me :  {count} Times</p>

    <ProductList />
    </>
  )
}

export default App
