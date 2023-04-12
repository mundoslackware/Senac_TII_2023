import { Link } from 'react-router-dom'
import './style.erro.css'

export default function Erro(){
    return(
        <div className='nEncontrada'>
            <h1>404</h1>
            <h2>Página Não Encontrada</h2>
            <Link to='/' >Voltar para o Início</Link>
        </div>
    )
}