import { useState } from 'react'
import './App.css'

function App() {
  const [number, setnumber] = useState(0)
  const [name, setName] = useState('Fabio')
  const [open, setOpen] = useState(true)
  const [car, setCar] = useState({
    id: 1,
    name: 'Corolla',
    color: 'black'
  })
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
    }
  ])

  return (
    <div className='app'>
      <h1>{number}</h1>
      <h1>{name}</h1>
      <h1>{open ? 'true' : 'false'}</h1>
      <h1>{car.name}</h1>
      <h1>{movies[0].name}</h1>
    </div>
  )
}

export default App
