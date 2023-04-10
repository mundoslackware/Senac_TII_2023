import { Link } from 'react-router-dom'

import './estilo.rodape.css'

export default function Rodape() {

    return (
        <div className='footerGeral'>
            <p>©Todos os Direitos Reservados - 2023</p>
            <Link to='https://www.mundoslackware.com.br' target='_blank'>
                <p>Desenvolvido por Mundo Slackware Security®™</p>
            </Link>
        </div>
    )
}