import React, { Component } from 'react'
import './estilo.contato.css'
import Botao from '../../components/Buttons'

class Contato extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            sexo: '',
            preferencia: ''
        }
        this.cadastrar = this.cadastrar.bind(this)
    }


    cadastrar(e) {
        e.preventDefault()
        const { nome, email, sexo, preferencia } = this.state
        if (nome === '' || email === '' || sexo === '' || preferencia === '') {
            alert('Existem Campos em Branco')
            return
        }

        alert(
            `Nome: ${nome} \nEmail: ${email} \nSexo: ${sexo} \nPreferencia: ${preferencia}`
        )
        this.setState({
            nome: '',
            email: '',
            sexo: '',
            preferencia: ''
        })
    }

    render() {
        return (
            <div className='containerContato'>
                <form className='formulario' onSubmit={this.cadastrar}>
                    <h1>Contato</h1>
                    <label>Nome:</label>
                    <input
                        type='text'
                        value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })}
                    /><br />
                    <label>E-Mail:</label>
                    <input
                        type='text'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    /><br />
                    <select
                        value={this.state.sexo}
                        onChange={(e) => this.setState({ sexo: e.target.value })}
                    >Sexo:
                        <option value=''>Selecione...</option>
                        <option value='feminino'>Feminino</option>
                        <option value='masculino'>Masculino</option>
                    </select><br />
                    <label>Preferência:</label><br />
                    <input
                        type='radio'
                        value='filme'
                        checked={this.state.value}
                        onChange={(e) => this.setState({ preferencia: e.target.value })}
                        name='pref' /> Filme <br />
                    <input
                        type='radio'
                        value='serie'
                        checked={this.state.value}
                        onChange={(e) => this.setState({ preferencia: e.target.value })}
                        name='pref' /> Série
                    <Botao />
                </form>
            </div>
        )
    }
}

export default Contato