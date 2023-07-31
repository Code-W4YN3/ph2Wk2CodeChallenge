import './App.css';
import { useState, useEffect} from 'react';
import BotLists from './botLists';
import BotCollection from './botCollection';

function App() {
  const [ bots, setBots ] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((res)=> res.json())
    .then(data => setBots(data))
  }, [])
  return (
    <>
      <h1>Bot Battlr</h1>
      <BotLists />
      
    </>
  );
}

export default App;
