import { useState } from 'react'

export default function Favoritos(){

    const [filmes, setFilmes] = useState({})

    const minhaLista = localStorage.getItem('@filmesfavoritos')
    let filmesSalvos = JSON.parse(minhaLista)
    setFilmes(filmesSalvos)
    console.log(filmes)

    return(
        <div>
            <h1>Página de Favoritos</h1>
        </div>
    )
}