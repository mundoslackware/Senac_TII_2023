import React, { useState } from 'react'

import Contador from './Cantador'
import './estilo.app.css'

function App() {

  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')

  function handleCadastro() {
    alert(`Nome: ${nome} \nSenha: ${senha}`)
  }
  
  return (
    <div className='contador'>
      <div>
        <h1>Estados com Hooks</h1>
        <form onSubmit={handleCadastro}>
          <label>Nome: </label>
          <input type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          /><br />
          <label>Senha: </label>
          <input type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          /><br /><br />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div>
        <Contador />
      </div>
    </div>
  );
}
export default App;
