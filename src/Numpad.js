import React from "react";
export default function Numpad(calc){
    return (
        <div className="numpad">
        <div id="7" className='numkeys keys' onClick={calc.func}>7</div>
        <div id="8" className='numkeys keys' onClick={calc.func}>8</div>
        <div id="9" className='numkeys keys' onClick={calc.func}>9</div>
        <div id="DEL" className='keys funckeys' onClick={calc.func}>DEL</div>
        <div id="4" className='numkeys keys' onClick={calc.func}>4</div>
        <div id="5" className='numkeys keys' onClick={calc.func}>5</div>
        <div id="6" className='numkeys keys' onClick={calc.func}>6</div>
        <div id="+" className='numkeys keys' onClick={calc.func}>+</div>
        <div id="1" className='numkeys keys' onClick={calc.func}>1</div>
        <div id="2" className='numkeys keys' onClick={calc.func}>2</div>
        <div id="3" className='numkeys keys' onClick={calc.func}>3</div>
        <div id="-" className='numkeys keys' onClick={calc.func}>-</div>
        <div id="." className='numkeys keys' onClick={calc.func}>.</div>
        <div id="0" className='numkeys keys' onClick={calc.func}>0</div>
        <div id="/" className='numkeys keys' onClick={calc.func}>/</div>
        <div id="*"className='numkeys keys' onClick={calc.func}>x</div>
        <div id="RESET"className='keys funckeys' onClick={calc.func}>RESET</div>
        <div id="=" className='keys equals' onClick={calc.func} 
        style = {calc.theme === "theme3"?{color:"var(--equal_key_val)"}:{color:"var(--func_key_val)"}}>=</div>
        </div>
    );
}