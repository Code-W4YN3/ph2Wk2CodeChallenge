import { useState, useEffect } from "react";
import Bot from "./bot";

function BotCollection(){
  const [ bots, setBots ] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((res)=> res.json())
    .then(data => setBots(data))
  }, [])
  console.log(bots)

  return(
    <div className="botDiv">
      {bots.map((bot) => (
        <Bot 
          key={bot.id}
          bot={bot}
        />
      ))}
    </div>
  )
}

export default BotCollection