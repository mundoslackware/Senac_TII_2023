import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './Inicio'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Inicio />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}