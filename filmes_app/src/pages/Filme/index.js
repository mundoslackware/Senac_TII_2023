import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Filme() {
    const { id } = useParams()
    const [filme, setFilme] = useState({})


    return (
        <div>
            <h1>Filme {id}</h1>
        </div>
    )
}

