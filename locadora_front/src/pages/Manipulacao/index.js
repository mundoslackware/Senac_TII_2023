import React, { useEffect, useState } from 'react'
import apiBack from '../../services/apiBack'

export default function Manipulacao(){

    const [ dados, setDados] = useState([''])

    useEffect(() => {
        async function recuperadados(){
            const response = await apiBack.get('/visualizaDados')
            setDados(response.data)            
        }
        recuperadados()
    }, [dados])

    return(
        <div>
            <h1>Manipulação e Visualização de Dados</h1>
            {dados.map((dado) => {
                return(
                <article key={dado.id_cliente}>
                    <strong>
                        {dado.nome}
                        {dado.rua}
                        {dado.numero}
                        {dado.bairro}
                        {dado.cidade}
                    </strong>
                </article>)
            })}
        </div>
    )
}