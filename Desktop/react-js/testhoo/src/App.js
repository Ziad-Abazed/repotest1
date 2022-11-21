import React from 'react'
import useLocalStorage from './useLocalStorage';

function App() {
  const [name,SetName]=useLocalStorage('name','')
  return (
    <div className="App">
    <input
    type="text"
    value={name}
    onChange={e=>SetName(e.target.value)}
    
    />
    </div>
  );
}

export default App;
