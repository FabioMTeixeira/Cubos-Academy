import './App.css';
import Profile from './assets/img/101820586.jpeg';
import { UserCard } from './components/UserCard';
import { Avatar } from './components/Avatar';

export default function App() {
  return (
    <div className='container'>
      <h1>Componentes e props</h1>
      <main>
        <UserCard
          name='Fabio Matos'
          jobRole='aluno FullStack'
        >
          <Avatar
            avatar={Profile}
          />
        </UserCard >

        <UserCard
          name='Luciana teixeira'
          jobRole='Professora FullStack'
        >
          <Avatar
            avatar='https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg'
          />
        </UserCard >
      </main>
    </div >
  );
};