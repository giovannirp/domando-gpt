import React from 'react'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Users from './Pages/Users'
import Menu from './Components/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
    return (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    </BrowserRouter>
  )
}
