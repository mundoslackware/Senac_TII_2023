import './estilo.botao.css'
function Botao(props){
    return(
        <div>
            <button className='botao' onClick={props.acaoBtn}>{props.nome}</button>
        </div>
        
    )
}

export default Botao