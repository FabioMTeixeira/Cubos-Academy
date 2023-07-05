import { useState } from 'react';
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  
  function handleChangeValue(value) {
    const newSum = number + value;

    if(newSum < 0) {
      return
    }

    setNumber(newSum);
  }

  return (
    <div className='app'>
      <div className='container-btns'>
        <button 
        onClick={() => handleChangeValue(1)}
        >Incrementar
        </button>
        <h1>{number}</h1>
        <button 
        onClick={() => handleChangeValue(-1)}
        >Decrementar
        </button>
      </div>

      <div>
        <h2>{number}</h2>
      </div>
    </div>
  )
}

export default App
