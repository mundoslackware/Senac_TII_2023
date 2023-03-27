import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Inicio from './pages/Inicio'
import QSomos from './pages/QSomos'
import Cadastro from './pages/Cadastro'

export default function Rotas() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={ <Inicio /> } />
                <Route path='/QSomos' element={ <QSomos /> } />
                <Route path='/Cadastro' element={ <Cadastro /> } />
            </Routes>
        </BrowserRouter>
    )
}