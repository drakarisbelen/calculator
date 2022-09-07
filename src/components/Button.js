import React from 'react';
import "../stylesheets/Button.css"
function Button(props){

    const isOperator = valor =>{
        //isNaN no es un numero
        return isNaN(valor) && (valor !=='.') && (valor !=='=')
    };

    return (
        <div
            className={`button-container ${isOperator(props.children)? 'operator':'' }`.trim()}
            onClick = {()=>props.handleClick(props.children)}
        >   
            {props.children}
        </div>
    )
}

export default Button;