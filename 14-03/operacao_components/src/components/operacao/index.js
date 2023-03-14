function Operacao(){
    function botao(){
        let x = 10
        let y = 5
        let resultado = x * y
        alert(resultado)
    }
    return(
        <div>
            <button onClick={botao}>Operação</button>
        </div>
    )
}
export default Operacao