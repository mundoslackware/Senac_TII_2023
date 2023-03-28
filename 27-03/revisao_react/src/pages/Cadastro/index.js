import React, { Component } from 'react'

class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            senha: '',
            sexo: ''
        }
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(event) {
        event.preventDefault()
        const { nome, email, senha, sexo } = this.state
        if (nome === '' || email === '' || senha === '' || sexo === '') {
            alert('Campos em Branco')
            return
        }
        alert(`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha} \nSexo: ${sexo}`)
        this.setState({
            nome: '',
            email: '',
            senha: '',
            sexo: ''
        })

    }



    render() {
        return (
            <div>
                <h1>Cadastro</h1>
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input
                        type='text'
                        value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })}
                    /><br />
                    <label>E-mail:</label>
                    <input
                        type='text'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    /><br />
                    <label>Senha:</label>
                    <input
                        type='password'
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })}
                    /><br />
                    <select
                        value={this.state.sexo}
                        onChange={(e) => this.setState({ sexo: e.target.value })}>
                        <option value=''></option>
                        <option value='feminino'>Feminino</option>
                        <option value='masculino'>Masculino</option>
                    </select><br />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        )
    }
}

export default Cadastro