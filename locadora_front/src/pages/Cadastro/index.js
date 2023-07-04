import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import apiCep from '../../services/apiCep'
import apiBack from '../../services/apiBack'
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

    async function handleBuscaCep() {
        const response = await apiCep.get(`${cep}/json/`)
        setBuscaCep(response.data)
    }   

    useEffect(() => {
        function addBuscaCep() {
            setRua(buscaCep.logradouro || rua)
            setBairro(buscaCep.bairro || bairro)
            setCidade(buscaCep.localidade || cidade)
            setEstado(buscaCep.uf || estado)
        }
        addBuscaCep()
    }, [handleBuscaCep])

   async function handleCadastrar(event) {
        event.preventDefault()
        if(nome === '' || telCel === '' || cep === '' || rua === '' 
        || numero === '' || bairro === '' || cidade === '' || estado === ''){
            alert('Existe campos em Branco')
        }

        //const resposta = await apiBack.post('/cadastroClientes', {
        await apiBack.post('/cadastroClientes', {
            codCliente,
            nome,
            telFixo,
            telCel,
            cep,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })
       // console.log(resposta.data.nome)
    }



    return (
        <div className='containerContato'>
            <h1>Cadastro</h1>
            <div >
                <form className='containerForm formulario' onSubmit={handleCadastrar}>
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
                            onBlur={handleBuscaCep}
                        />
                        <label>Rua:</label>
                        <input
                            type='text'
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
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
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                        />
                        <label>Cidade:</label>
                        <input
                            type='text'
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                        <label>Estado:</label>
                        <input
                            type='text'
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
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