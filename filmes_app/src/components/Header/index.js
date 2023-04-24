import './style.header.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div>
           <header>
            <Link className='logo' to='/'>Sinopse de Filmes</Link>
            <Link className='favoritos' to='/Favoritos'>Filmes Favoritos</Link>
           </header>
        </div>
    )
}