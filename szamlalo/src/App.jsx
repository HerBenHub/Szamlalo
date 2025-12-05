import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="szamlalo">
        <h1>Számláló alkalmazás</h1>
        <h2>Kattintások száma:</h2>
        <div className="szamol">
          <button className='count' onClick={() => setCount(count + 1)}>{count}</button>
        </div>
      </div>
    </>
  )
}

export default App