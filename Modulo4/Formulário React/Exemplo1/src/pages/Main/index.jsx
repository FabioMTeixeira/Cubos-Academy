import { useState } from 'react';
import './style.css';

function Main() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    console.log('teste');
  }

  return (
    <div className='container-main'>
      <form onSubmit={handleSubmit}
      >
        <input type="text"
          placeholder='Digite seu nome'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input type="number"
          placeholder='Digite sua idade'
          value={age}
          onChange={(event) => setAge(event.target.valueAsNumber)}
        />
        <button type='submit'>Salvar</button>
      </form>
    </div>
  );
}

export default Main;
