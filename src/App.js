import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './SignIn/SignIn'
import Display from './SignIn/Display'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<SignIn />}></Route>
     <Route path='/Display' element={<Display />}></Route>
    </Routes>
    </BrowserRouter>
  )
}
