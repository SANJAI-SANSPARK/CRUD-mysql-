import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'
import Read from './Read'
import { Route , Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/read/:id" element={<Read/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
