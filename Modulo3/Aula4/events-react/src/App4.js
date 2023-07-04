import './App.css';

export default function App4() {

  function handleMouseOver() {
    const h1 = document.querySelector('h1');

    h1.innerText = 'Você passou o mouse';
  }

  function handleMouseLeave() {
    const h1 = document.querySelector('h1');

    h1.innerText = '';
  }

  return (
    <div className="App">
      <strong
        onMouseOver={() => handleMouseOver()}
        onMouseLeave={() => handleMouseLeave()}
      >
        Passe o mouse aqui...
      </strong>
      <h1></h1>
    </div>
  );
}

