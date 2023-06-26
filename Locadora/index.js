const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Node puro no Senac Bauru')
})


app.listen(3333, () => {
    console.log('Servidor Rodando na porta 3333')
})