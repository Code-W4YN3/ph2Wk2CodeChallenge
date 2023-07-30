import { useState, useEffect } from "react";
import BotCollection from "./botCollection";

function BotLists(){
  const [ bots, setBots ] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((res)=> res.json())
    .then(data => setBots(data))
  }, [])
  console.log(bots)

  return(
    <>
      <BotCollection bots={bots}/>
    </>
  )
}

export default BotLists
