import {  useState, useEffect } from 'react'

import api from '../../services/api'

export default function EmCartaz(){
    const [ filmes, setFilmes ] = useState([])

    
    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: "e3557a63a0916ff565660d0e9b496cba",
                    language: 'pt-BR'
                }
            })
            setFilmes(response.data.results)
        }
        loadFilmes()
    }, [filmes])



    return(
        <div>
            <h1>Em Cartaz</h1>
            {filmes.map((filme) => {
                return(
                    <article>
                        <strong>{filme.title}</strong>
                    </article>
                )
            })}
        </div>
    )
}