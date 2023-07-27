import { useState } from 'react';
import './style.css';

function Main() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    setError('');
    setSuccess('');

    if (!name) {
      setError('Nome Obrigatório...');
      return;
    }

    if (age < 18) {
      setError('Deve ser maior de idade');
      return;
    }

    if (password.length < 8) {
      setError('Senha precisa ter 8 caracter');
      return;
    }

    setSuccess('Cadastro efetuado com sucesso');
  }

  return (
    <div className='container-main'>
      <form onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder='Digite seu nome'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder='Digite sua idade'
          value={age}
          onChange={(event) => setAge(event.target.valueAsNumber)}
        />
        <input
          type="password"
          placeholder='Digite a sua senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <span className='error'>{error}</span>}

        {success && <span className='success'>{success}</span>}

        <button type='submit'>Salvar</button>
      </form>
    </div>
  );
}

export default Main;
