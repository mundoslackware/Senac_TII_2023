import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <div>
           <Link to='/'>Início</Link>
           <Link to='/QSomos'>Quem Somos</Link>
           <Link to='/Cadastro'>Cadastro</Link>
        </div>
    )
}