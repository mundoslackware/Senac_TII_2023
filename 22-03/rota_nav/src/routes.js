import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import QSomos from './QSomos'

export default function Rotas() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/QSomos' element={ <QSomos /> } />
            </Routes>
        </BrowserRouter>
    )
}