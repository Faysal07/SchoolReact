import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'
import StudentForm from './components/StudentForm'
import ProductList from './components/Product'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h2>Please Entry Student Information</h2>
      <StudentForm /> */}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product' element={<ProductList />}></Route>
      </Routes>



      {/* <div className="cardbox">
        <h1>Hi, </h1>
        <h1>If you click me, I will count you.</h1>
        <a href="#" onClick={() => setCount(count+1)}>Click Me</a>
      </div>

      <Student name="Faysal" catagory="CSE" />

      <p>You click me :  {count} Times</p>

    <ProductList /> */}
    </>
  )
}

export default App
