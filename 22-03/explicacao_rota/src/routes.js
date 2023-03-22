import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './pages/Inicio'
import QSomos from './pages/QSomos'
import Header from './components/Header'

export default function Rotas() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/QSomos' element={<QSomos />} />
            </Routes>
        </BrowserRouter>
    )
}