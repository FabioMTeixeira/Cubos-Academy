import './App.css';
import { UserCard } from './components/UserCard';
import { Avatar } from './components/Avatar';

const people = [
  {
    id: 1,
    name: 'Carla Rodrigues',
    avatar: 'https://cdn.pixabay.com/photo/2023/05/07/16/06/snail-7976692_1280.jpg',
    jobRole: 'Desenvolvedor Frontend',
    follow: false
  },
  {
    id: 2,
    name: 'Bruna Rodrigues',
    avatar: 'https://cdn.pixabay.com/photo/2023/05/10/11/48/plants-7983684_1280.jpg',
    jobRole: 'Desenvolvedor senior',
    follow: false
  },
  {
    id: 3,
    name: 'Jorge Rodrigues',
    avatar: 'https://cdn.pixabay.com/photo/2023/05/25/21/00/bird-8018305_1280.jpg',
    jobRole: 'Desenvolvedor Backend',
    follow: true
  },
  {
    id: 4,
    name: 'Vagner Rodrigues',
    avatar: 'https://cdn.pixabay.com/photo/2022/12/30/17/10/monstera-7687340_1280.jpg',
    jobRole: 'Desenvolvedor Fullstack',
    follow: false
  }
];

export default function App() {
  return (
    <div className='container'>

      <h1>Componentes e props</h1>
      <main>
        {people.map(person => (
          <UserCard
            key={person.id}
            name={person.name}
            jobRole={person.jobRole}
            following={person.follow}
          >
            <Avatar
              avatar={person.avatar}
            />
          </UserCard>
        ))}
      </main>
    </div >
  );
};;