import { useState } from 'react';
import './style.css';

function MultipleInput() {
  const [form, setForm] = useState({
    name: '',
    age: 0,
    address: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function clearForm() {
    setError('');
    setSuccess('');
    setForm({
      name: '',
      age: 0,
      address: '',
      password: ''
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError('');
    setSuccess('');

    if (!form.name) {
      setError('Nome Obrigatório...');
      return;
    }

    if (form.age < 18) {
      setError('Deve ser maior de idade');
      return;
    }

    if (!form.adress) {
      setError('Endereço Obrigatório...');
      return;
    }

    if (form.password.length < 8) {
      setError('Senha precisa ter 8 caracter');
      return;
    }

    setSuccess('Cadastro efetuado com sucesso');
  }

  function handleChangeForm(event) {
    const value = event.target.value;

    setForm({ ...form, [event.target.name]: value });
  }

  return (
    <div className='container-main'>
      <form onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder='Digite seu nome'
          name='name'
          value={form.name}
          onChange={(event) => handleChangeForm(event)}
        />

        <input
          type="number"
          placeholder='Digite sua idade'
          name='age'
          value={form.age}
          onChange={(event) => handleChangeForm(event)}
        />

        <input
          type="text"
          placeholder='Digite seu endereço'
          name='address'
          value={form.address}
          onChange={(event) => handleChangeForm(event)}
        />

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Digite a sua senha'
          name='password'
          value={form.password}
          onChange={(event) => handleChangeForm(event)}
        />

        <div>
          <input
            type="checkbox"
            name='show-password'
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="show-password">Mostrar senha</label>
        </div>

        {error && <span className='error'>{error}</span>}

        {success && <span className='success'>{success}</span>}

        <button type='submit'>Salvar</button>
        <button
          type='button'
          onClick={() => clearForm()}>
          Limpar
        </button>
      </form>
    </div>
  );
}

export default MultipleInput;
