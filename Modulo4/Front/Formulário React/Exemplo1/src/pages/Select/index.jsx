import { useState } from 'react';
import './style.css';

function Select() {
  const [select, setSelect] = useState({ id: '', name: '' });
  const [options, setOptions] = useState([{
    id: 1,
    name: 'maçã',
    value: 100
  },
  {
    id: 2,
    name: 'uva',
    value: 200
  },
  {
    id: 3,
    name: 'beterraba',
    value: 300
  },
  ]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function clearForm() {
    setError('');
    setSuccess('');
  }

  function handleChangeSelect(event) {
    const localOptions = [...options];

    const myOptions = localOptions.find((item) => item.id === parseInt(event.target.value));

    setSelect({ id: myOptions.id, name: myOptions.name });
  }

  function handleSubmit(event) {
    event.preventDefault();

  }

  return (
    <div className='container-main'>
      <form onSubmit={handleSubmit}>

        {select.name}

        <select
          value={select.id}
          onChange={(event) => handleChangeSelect(event)}
        >
          {options.map((item) => (
            <option
              value={item.id}
              key={item.id}>
              {item.name}
            </option>
          ))}
        </select>

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

export default Select;
