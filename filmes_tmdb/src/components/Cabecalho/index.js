import { Link } from 'react-router-dom'
import './estilo.cabecalho.css'

export default function Cabecalho() {

    return (
        <div className='containerCabecalho'>
            <div className='titulo'>
                <h2>Sinopse de Filmes</h2>
            </div>
            <div>
                <Link className='linkInicio' to='/'>Início</Link>
                <div className='dropdown'>
                    <h2>Filmes</h2>
                    <div class="dropdown-content">
                        <p><Link className='linkText' to='/Populares'>Populares</Link></p>
                        <p><Link className='linkText' to='/EmCartaz'>Em Cartaz</Link></p>
                        <p><Link className='linkText' to='/Estreias'>Estreias</Link></p>
                    </div>
                </div>
                <div className='dropdown'>
                    <h2>Séries</h2>
                    <div class="dropdown-content">
                        <p><Link className='linkText' to='/SPopulares'>Populares</Link></p>
                        <p><Link className='linkText' to='/HojeNatV'>Hoje na TV</Link></p>
                        <p><Link className='linkText' to='/NaTV'>Na TV</Link></p>
                    </div>
                </div>
                <Link className='linkContato' to='/Contato'>Contato</Link>
            </div>
        </div>
    )
}