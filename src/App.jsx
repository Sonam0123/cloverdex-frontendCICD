import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/Signup';
import Home from './components/Home'
import Account from './components/Account'

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
        <Route
          path ='/account'
          element={
            <Account/>
          }
        />
      </Routes>
    </>
  )
}

export default App
