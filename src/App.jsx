import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/Signup';
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Login />
          }
        />
        <Route
          path='/sign-up'
           element={
            <SignUp />
          }
        />
        <Route
          path ='/home'
          element={
            <Home/>
          }
        />
      </Routes>
    </>
  )
}

export default App
