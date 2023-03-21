import React, { Component } from 'react'
import Botao from '../Botao'

class Contador extends Component{

    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            hora: '00:00:00'
        }

        this.diminuir = this.diminuir.bind(this)
        this.aumentar = this.aumentar.bind(this)
    }

    componentDidMount(){
        setInterval( () => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000)
    }

    diminuir(){
        let estado = this.state
        estado.contador -= 1
        this.setState(estado)
    }

    aumentar(){
        let estado = this.state
        estado.contador += 1
        this.setState(estado)

    }

    render(){
        return(
            <div>
                <h2>Hora certa: {this.state.hora}</h2>
                <h2>Contador Positivo</h2>
                <Botao nome='Diminuir' acaoBtn={this.diminuir} />
                <p>{this.state.contador}</p>
                <Botao nome='Aumentar' acaoBtn={this.aumentar} />
            </div>
        )
    }
}

export default Contador