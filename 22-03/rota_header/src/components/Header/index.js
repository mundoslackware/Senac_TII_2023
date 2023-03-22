import './estilo.header.css'
export default function Header() {
    return (
        <div className='container'>
            <div className='logo'>
                <h1>Aulas Senac</h1>
            </div>
            <div className="links">
                <h2>Inicio</h2>
                <h2>Quem Somos</h2>
                <h2>Portifolio</h2>
                <h2>Contato</h2>
            </div>
        </div>
    )
}