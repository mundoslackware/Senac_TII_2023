import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './estilo.detalhes.css'
import api from '../../services/api'

import moment from 'moment'

export default function Filme() {
    const { id } = useParams()
    const [filme, setFilme] = useState({})
    const [filmes, setFilmes] = useState([''])

    useEffect(() => {

        async function loadFilmeDetail(){

            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'e3557a63a0916ff565660d0e9b496cba',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            setFilme(response.data)
            setFilmes(response.data.production_companies)
        }
        loadFilmeDetail()

        
    }, [])


    return (
        <div className='containerDetalhes'>
           {filmes.map((det) => {
            return(
                <div>
                    <h1>{det.name}</h1>
                </div>
            )
           })}
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}  />
            <h1>Nome: {filme.title}</h1><br />
            <h1>Descrição:  {filme.overview}</h1><br />
            <h1>Nota:  {Number(filme.vote_average).toFixed(1)}</h1>
            <h1>Nota: {moment(new Date(`${filme.release_date}`)).format('DD-MM-YYYY')}</h1>
        </div>
    )
}

