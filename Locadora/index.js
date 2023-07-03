const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
/*
app.get('/', (req, res) => {
    res.send('Node puro no Senac Bauru')
})
*/
app.post('/cadastroClientes', (req, res) => {
    const cod_cliente = req.body.codCliente
    const nome = req.body.nome
    
    res.send({cod_cliente, nome})
})

app.listen(3333, () => {
    console.log('Servidor Rodando na porta 3333')
})