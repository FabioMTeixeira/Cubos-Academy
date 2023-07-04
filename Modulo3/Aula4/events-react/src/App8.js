import './App.css';
import { useRef } from 'react';

const musicUrl = 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/The%20Von%20Trapp%20Family%20Choir%20-%20Alge.mp3';

export default function App8() {
  const audioRef = useRef(null);

  function handlePlay() {
    audioRef.current.play();

  }

  function handlePause() {
    audioRef.current.pause();
  }

  function handleStop() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  return (
    <div className="App">
      <audio src={musicUrl} ref={audioRef} />
      <button onClick={() => handlePlay()}>Play</button>
      <button onClick={() => handlePause()}>Pause</button>
      <button onClick={() => handleStop()}>Stop</button>
    </div >
  );
}

