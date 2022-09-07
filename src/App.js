
import './App.css';
import Button from "./components/Button"
import Input from "./components/Input"
import ClearButton from './components/ClearButton';
import Logo from "./components/Logo"
import freeCodecampLogo from "./images/FreeCodeCamp_logo.png"
import {useState} from "react";
import {evaluate} from "mathjs";

function App() {
  const [input, setInput] = useState('');

  const addInput = (val) => {
      //actualizo el input valor anterior concatenado con el siguiente valor
      //estoy uniendo las cadenas de caracteres
      setInput(input + val)
  };

  const clearInput = () =>{
    setInput("")
  };

  const calculate = () => {
    if (input)
      setInput(evaluate(input))
    else
      alert("Ingresar valores para realizar los calculos")
  };

  return (
    <div className="App">
      <Logo/>
      <div className="calculator-container">
      <Input input ={input}/>
        <div className='row'>
          <Button handleClick={addInput}>1 </Button>
          <Button handleClick={addInput}>2 </Button>
          <Button handleClick={addInput}>3 </Button>
          <Button handleClick={addInput}>+ </Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4 </Button>
          <Button handleClick={addInput}>5 </Button>
          <Button handleClick={addInput}>6 </Button>
          <Button handleClick={addInput}>- </Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7 </Button>
          <Button handleClick={addInput}>8 </Button>
          <Button handleClick={addInput}>9 </Button>
          <Button handleClick={addInput}>* </Button>
        </div>
        <div className='row' >
          <Button handleClick={calculate}>= </Button>
          <Button handleClick={addInput}>0 </Button>
          <Button handleClick={addInput}>. </Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row' >
        <ClearButton handleClick={clearInput}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
