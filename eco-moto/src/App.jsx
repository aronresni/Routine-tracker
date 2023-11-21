import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Auth, Routine,Frecuency } from "./Pages/index.js"

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/addroutine' element={<Routine/>}/>
      <Route path='/musclesfrecuency' element={<Frecuency/>}/>
    </Routes>
  )
}

export default App
