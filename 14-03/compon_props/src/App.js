import Equipe from './components/equipe'

function App() {
  return (
    <div>
     <h1>Componentes e Props</h1>
     <h2>Equipe:</h2>
     <Equipe nome='Luciano' cargo='Programador' />
     <Equipe nome='Marcos' cargo='Designer' />
     <Equipe nome='João' cargo='DevOps' />
     <Equipe nome='Camila' cargo='Gerente' />
    </div>
  )
}

export default App
