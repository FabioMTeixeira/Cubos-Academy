import './App.css';
import { useRef } from 'react';

export default function App7() {
  let count = 0;
  const countRef = useRef(0);
  const spanRef = useRef(null);
  const spanLetRef = useRef(null);


  function incrementRef() {
    countRef.current = countRef.current + 1;
    spanRef.current.innerText = countRef.current;
  }

  function incrementLet() {
    count = count + 1;
    spanLetRef.current.innerText = count;
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => incrementRef()}>
          Incrementar useRef
        </button>
        <div>
          <strong style={{ marginRight: '10px' }}>Valor do UseRef</strong>
          <span ref={spanRef}>0</span>
        </div>
      </div>
      <div>
        <button onClick={() => incrementLet()}>
          Incrementar let
        </button>
        <div>
          <strong style={{ marginRight: '10px' }}>Valor do Let</strong>
          <span ref={spanLetRef}>0</span>
        </div>
      </div>
    </div >
  );
}

