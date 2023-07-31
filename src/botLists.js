import { useState, useEffect } from "react";
import BotCollection from "./botCollection";
import BotArmy from "./yourBotArmy";


function BotLists(){
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([])

  //adds only once
  function addToArmy(bot) {
    if(!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  }
  //filters to stop displaying
  function removeFromArmy(bot){
    setArmy(army.filter(b => b !== bot));
  }

  //remove from db
  function removeFromArmy(bot){
    fetch(`http://localhost:3000/bots/${bot.id}`,{
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {

    setArmy(army.filter(b => b !== bot));
    setBots(bots.filter(b => b !== bot));
    })
  }

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
  }, [])


  return(
    <div>
      <BotArmy army={army} handleRemove={removeFromArmy} removeFromArmy={removeFromArmy}/>
      <BotCollection handleAdd={addToArmy} bots={bots} removeFromArmy={removeFromArmy}/>
    </div>
  )
}

export default BotLists
