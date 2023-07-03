import { Link } from 'react-router-dom'

export default function Inicio(){
    return(
        <div>
            <h1>Inicio</h1>
            <Link to='/Cadastro'>Cadastro</Link>
        </div>
    )
}