import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'
import StudentForm from './components/StudentForm'
import ProductList from './components/Product'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h2>Please Entry Student Information</h2>
      <StudentForm /> */}

      <nav className='navbar'>
        <Link to='/' className='pageLink'>Home</Link>
        <Link to='/about' className='pageLink'>About</Link>
        <Link to='/product' className='pageLink'>Product</Link>
        <Link to='/contact' className='pageLink'>Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product' element={<ProductList />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
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
