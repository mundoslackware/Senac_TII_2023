import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiCep from '../../services/apiCep'
import apiBack from '../../services/apiBack'
import './estilo.index.css'

import { toast } from 'react-toastify'

export default function Altera() {
    const navigate = useNavigate()
    const { id } = useParams()

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
    const [recuperados, setRecuperados] = useState([''])

    useEffect(() => {
        async function pegaDados() {
            const response = await apiBack.get(`/visualizaDadosUnicos/${id}`)
            console.log(response)
            
         
        }
        pegaDados()
    }, [id])
    console.log(codCliente)



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

        console.log(codCliente)

        toast.success('Cadastro Alterado com Sucesso')
       //navigate('/Manipulacao')

    }

    return (
        <div className='containerContato'>
            <h1>Cadastro</h1>
            <div >
               
                <br />
                <Link to='/'>Voltar Inicio</Link>
            </div>
        </div>
    )
}