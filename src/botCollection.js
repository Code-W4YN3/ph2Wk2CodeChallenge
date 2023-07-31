import Bot from "./bot";

function BotCollection({ bots, handleAdd, removeFromArmy }){
  return(
  <div className="botDiv">
    <h1>Bot Collection</h1>
    {bots.map((bot, key) => (
      <Bot 
      key={key} 
      bot={bot} 
      handleAdd={handleAdd} 
      removeFromArmy={removeFromArmy} 
      inCollection={true}
      />
    ))
    }
  </div>
  )
}

export default BotCollection
