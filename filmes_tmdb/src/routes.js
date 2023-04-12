import React, { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

import Inicio from './pages/Inicio'
import Populares from './pages/Populares'
import EmCartaz from './pages/EmCartaz'
import Estreias from './pages/Estreias'

import SPopulares from './pages/SPopulares'
import HojeNaTv from './pages/HojeNaTv'
import NaTv from './pages/NaTv'

import Contato from './pages/Contato'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Populares' element={<Populares />} />
                <Route path='/EmCartaz' element={<EmCartaz />} />
                <Route path='/Estreias' element={<Estreias />} />
                <Route path='/SPopulares' element={<SPopulares />} />
                <Route path='/HojeNaTv' element={<HojeNaTv />} />
                <Route path='/NaTv' element={<NaTv />} />
                <Route path='/Contato' element={<Contato />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}