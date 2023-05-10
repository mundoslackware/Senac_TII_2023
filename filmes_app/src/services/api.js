import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1'
})

export default api