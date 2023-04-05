import React, {  useState } from 'react'

export default function Contador(){

    const [ valor, setValor] = useState(10)

    function aumentar(){
        setValor(valor + 2)
    }
    function diminuir(){
        if(valor === 0){
            return
        }
        setValor(valor - 1)
    }


    return(
        <div>
            <h1>
                <button onClick={aumentar}>+</button>
                <h2>{valor}</h2>
                <button onClick={diminuir}>-</button>
            </h1>
        </div>
    )
}