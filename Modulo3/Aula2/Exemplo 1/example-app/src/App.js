import './App.css';
import Profile from './assets/101820586.jpeg'

export default function App() {
  return (
    <div className="container">
      <header>
        <h2>Fabio.dev</h2>
        <ul className = 'menu'>
          <li>Sobre Nós</li>
          <li>Artigos</li>
          <li>Contatos</li>
        </ul>
      </header>

      <section>
        <div className='left'>
          <img src = {Profile} alt='Imagem de perfil'/>
          <strong>Fabio Matos</strong>
          <span>
            <br/>
            Eu sou o Fabio matos e estou aprendendo sobre React 
          </span>
        </div>
        <div className ='right'>
          <strong>22 de Novembro de 2030</strong>
          <h2>Introdução ao React</h2>
          <span>Nesse post vamos falar sobre a importancia do react no futuro</span>
        </div>
      </section>

      <footer>
        <ul className='menu'>
            <li>Sobre Nós</li>
            <li>Artigos</li>
            <li>Contatos</li>
        </ul>
      </footer>
    </div>
  );
}


