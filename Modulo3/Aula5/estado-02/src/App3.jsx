import { useState } from 'react'
import './App.css'

function App3() {
  const [car, setCar] = useState({
    id: 1,
    name: 'Corolla',
    color: 'black',
    year: 2021
  })

  function handleChangeYear(year) {
    setCar({ ...car, year })
  }

  return (
    <div className='app'>
      <h1>{car.name}</h1>
      <h1>{car.color}</h1>
      <h1>{car.year}</h1>

      <button onClick={() => handleChangeYear(2019)}>2019</button>
      <button onClick={() => handleChangeYear(2020)}>2020</button>
      <button onClick={() => handleChangeYear(2021)}>2021</button>
      <button onClick={() => handleChangeYear(2022)}>2022</button>
    </div>
  )
}

export default App3
