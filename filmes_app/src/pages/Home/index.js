import { useState, useEffect } from 'react'
import api from '../../services/api.js'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import './style.home.css'

export default function Home() {

    const [filme, setFilme] = useState([''])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: '',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            setFilme(response.data.results)
            setLoading(false)
        }
        loadFilme()

    }, [filme])

    if (loading) {
        return (
            <div className='carregamento'>
                <div>
                    <h1>Carregando Filmes</h1>
                </div>
                <div>
                    <Spinner animation="border" variant="primary" />
                </div>
            </div>
        )
    }


    return (
        <div className='lfilmes'>
            {filme.map((filmes) => {
                return (
                    <article key={filmes.id}>
                        <strong >{filmes.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`} alt={filmes.title} />
                        <Link to={`/Detalhes/${filmes.id}`}>Detalhes</Link>
                    </article>
                )
            })}
        </div>

    )
}

