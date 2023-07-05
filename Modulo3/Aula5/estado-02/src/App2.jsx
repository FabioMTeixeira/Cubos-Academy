import { useState } from 'react'
import './App.css'

function App2() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: 'filme 1',
      active: false
    },
    {
      id: 2,
      name: 'filme 2',
      active: true
    },
    {
      id: 3,
      name: 'filme 3',
      active: false
    },
    {
      id: 4,
      name: 'filme 4',
      active: true
    },
    {
      id: 5,
      name: 'filme 5',
      active: false
    },
    {
      id: 6,
      name: 'filme 6',
      active: true
    },
  ])

  function handleFilterOnlyActive() {

  }

  function handleChangeActive() {
    const localMovies = [...movies]

    localMovies.forEach((movie) => movie.active = true)

    setMovies(localMovies)
  }

  return (
    <div className='app'>
      <ul>
        {movies.map((movie) => (
          movie.active &&
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>

      <button onClick={() => handleFilterOnlyActive()}>Somente Ativos</button>
      <button onClick={() => handleChangeActive()}>Ativar todos</button>
    </div>
  )
}

export default App2
