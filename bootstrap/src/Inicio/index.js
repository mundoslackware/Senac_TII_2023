import VacaLoka from '../assets/vacaloka.jpg'
import './inicio.index.css'

export default function Inicio() {
    return (
        <div className='containerIniGeral'>
            <div className='row'>
                <div class='col-12 col-sm-6 col-md-4 col-lg-2 col-xl-1'>
                   <img src={VacaLoka} alt={VacaLoka} className='img-fluid' />
                </div>
                <div class='col-12 col-sm-2 col-md-4 col-lg-2 col-xl-1'>
                   <h1>Coluna 2</h1>
                </div>
                <div class='col-12 col-sm-4 col-md-4 col-lg-2 col-xl-1 coluna3'>
                   <h1>Coluna 3</h1>
                </div>
            </div>
        </div>
    )
}