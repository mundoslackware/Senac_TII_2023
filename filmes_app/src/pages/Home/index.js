import { useState, useEffect } from 'react'
import api from '../../services/api.js'
import { Link } from 'react-router-dom'
import './style.home.css'

export default function Home() {

    const [filme, setFilme] = useState([''])

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: 'e3557a63a0916ff565660d0e9b496cba',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            setFilme(response.data.results)
        }
        loadFilme()
        
    }, [filme])
   

    
    return (
        <div className='lfilmes'>           
                {filme.map((filmes) => {
                    return (
                        <article key={filmes.id}>
                            <strong >{filmes.id}</strong>
                            <strong >{filmes.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`} alt={filmes.title} />
                            <Link to={`/Detalhes/${filmes.id}`}>Detalhes</Link>
                        </article>
                    )
                })}           
        </div>

    )
}

