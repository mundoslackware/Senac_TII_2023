import axios from 'axios'

const apiCep = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
    
})

export default apiCep