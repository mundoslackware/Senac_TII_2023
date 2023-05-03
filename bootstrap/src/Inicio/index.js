import VacaLoka from '../assets/vacaloka.jpg'
import './inicio.index.css'

export default function Inicio() {
    return (
        <div className='containerIniGeral'>
            <div className='row'>
                <div class="col-6">
                   <img src={VacaLoka} alt={VacaLoka} className='img-fluid' />
                </div>
                <div class="col-2">
                   <h1>Coluna 2</h1>
                </div>
                <div class='col coluna3'>
                   <h1>Coluna 3</h1>
                </div>
            </div>
        </div>
    )
}