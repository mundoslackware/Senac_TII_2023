import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/apiCep'
import './estilo.index.css'

export default function Cadastro() {

    const [codCliente, setCodCliente] = useState('')
    const [nome, setNome] = useState('')
    const [telFixo, setTelFixo] = useState('')
    const [telCel, setCel] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    const [buscaCep, setBuscaCep] = useState('')

    useEffect(() => {
        function codigoCliente() {
            setCodCliente(Math.round(Math.random() * 10000))
        }
        codigoCliente()
    }, [])

    async function handleCep() {
        if (cep.length < 8 || cep.length > 8) {
            alert('CEP Incorreto')
        } else {
            const response = await api.get(`${cep}/json`)
            if (response.data.erro === true) {
                alert('CEP Inexistente')
            } else {
                setBuscaCep(response.data)
            }
        }

    }
    function handleCadastrar(e) {
        e.preventDefault()
        setRua(buscaCep.logradouro)
        setBairro(buscaCep.bairro)
        setCidade(buscaCep.localidade)
        setEstado(buscaCep.uf)
        if (nome === '' || telCel === '' || numero === '') {
            alert('Campos em Branco')
        }
        alert(`${codCliente} \n ${nome} \n ${telFixo} \n ${telCel} 
        \n ${cep} \n ${rua} \n ${numero}\n ${complemento} \n ${bairro}
        \n ${cidade} \n ${estado} `)
    }

    return (
        <div className='containerContato'>
            <h1>Cadastro</h1>
            <div >
                <form className='containerForm formulario' onSubmit={handleCadastrar} >
                    <div>
                        <label>Código Cliente:</label>
                        <input
                            type='number'
                            disabled
                            value={codCliente}
                            onChange={(e) => setCodCliente(e.target.value)}
                        />
                        <label>Nome:</label>
                        <input
                            type='text'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <label>Telefone Fixo:</label>
                        <input
                            type='text'
                            value={telFixo}
                            onChange={(e) => setTelFixo(e.target.value)}
                        />
                        <label>Telefone Celular:</label>
                        <input
                            type='text'
                            value={telCel}
                            onChange={(e) => setCel(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Cep:</label>
                        <input
                            type='text'
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            onBlur={handleCep}
                        />
                        <label>Rua:</label>
                        <input
                            type='text'
                            value={buscaCep.logradouro}
                            disabled
                        />
                        <label>Numero:</label>
                        <input
                            type='text'
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                        />
                        <label>Complemento:</label>
                        <input
                            type='text'
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Bairro:</label>
                        <input
                            type='text'
                            value={buscaCep.bairro}
                            disabled
                        />
                        <label>Cidade:</label>
                        <input
                            type='text'
                            value={buscaCep.localidade}
                            disabled
                        />
                        <label>Estado:</label>
                        <input
                            type='text'
                            value={buscaCep.uf}
                            disabled
                        />
                        <button className='button' type='submit'>Enviar</button>
                    </div>
                    <div>
                    </div>
                </form>
                <br />
                <Link to='/'>Voltar Inicio</Link>
            </div>
        </div>
    )
}