import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Cadastro from './pages/Cadastro'
import Altera from './pages/Altera'
import Manipulacao from './pages/Manipulacao'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Inicio /> } />
                <Route path='/Cadastro' element={ <Cadastro /> } />
                <Route path='/Alterar/:id' element={ <Altera /> } />
                <Route path='/Manipulacao' element={ <Manipulacao /> } />
            </Routes>
        </BrowserRouter>
    )
}