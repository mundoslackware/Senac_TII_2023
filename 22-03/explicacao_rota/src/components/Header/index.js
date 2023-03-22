import { Link } from 'react-router-dom'
import './estilo.header.css'

export default function Header() {

    return (
        <div className='container'>
            <h1>
                <Link className='link' to='/'>Início</Link>
                <Link className='link' to='/QSomos'>Quem Somos</Link>
            </h1>
        </div>
    )
}