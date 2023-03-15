import React, { Component } from 'react'
import Botao from '../botao'

class Contador extends Component {

    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            zero: 'Chegou a zero'
        }
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }

    diminuir(){
        let state = this.state
        if(this.state.contador === 0){
            return
        }
        state.contador -= 1
        this.setState(state)
    }
    aumentar(){
       let state = this.state
       state.contador +=1
       this.setState(state)
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Botao nome='Diminuir' acaoBtn={this.diminuir} />
                <h2>{this.state.contador}</h2><br />
                <Botao nome='Aumentar' acaoBtn={this.aumentar} />
            </div>
        )
    }
}
export default Contador