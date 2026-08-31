import React from 'react'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Users from './Pages/Users'
import Cadastro from './Pages/Cadastro'
import Comentario from './Pages/Comentario'
import Menu from './Components/Menu'
import NotFound from './Pages/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
    return (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/users" element={<Users />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
