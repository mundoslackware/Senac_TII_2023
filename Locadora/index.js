const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'locadora'
})

app.post('/cadastroClientes', (req, res) => {
    const cod_cliente = req.body.codCliente
    const nome = req.body.nome
    const telFixo = req.body.telFixo
    const telCel = req.body.telCel
    const cep = req.body.cep
    const rua = req.body.rua
    const numero = req.body.numero
    const complemento = req.body.complemento
    const bairro = req.body.bairro
    const cidade = req.body.cidade
    const estado = req.body.estado

    db.query(
        'INSERT INTO cliente(cod_cliente, nome, tel_fixo, tel_celular, rua, numero, complemento, cep, bairro, cidade, estado) VALUE(?,?,?,?,?,?,?,?,?,?,?)',
        [cod_cliente, nome, telFixo, telCel, rua, numero, complemento, cep, bairro, cidade, estado],
        (err) => {
            if (err) {
                res.send(err)
            }
            res.send({ msg: 'Registro Cadastrado com Sucesso' })
        }
    )
})

app.get('/visualizaDados', (req, res) => {
    db.query(
        'SELECT * FROM cliente',
        (err, result) => {
            if (err) {
                res.send({ msg: 'Dados Não Encontrados' })
            }
            res.send(result)
        }
    )

})

app.put('/alteraDados/:id', (req, res) => {

})

app.delete('/deleteUser/:id', (req, res) => {
    const {id} = req.params
    db.query(
        'DELETE FROM cliente WHERE id_cliente = ?',
        [id],
        (err) => {
            if(err){
                res.send(err)
            }
            res.send({msg: 'Apagado com sucesso'})
        } 
    )
})



app.listen(3333, () => {
    console.log('Servidor Rodando na porta 3333')
})