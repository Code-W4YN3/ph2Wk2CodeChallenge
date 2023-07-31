import Bot from "./bot";

function BotCollection({ bots, handleAdd, removeFromArmy }){
  return(
  <>
  <h1 className="botCollection">Bot Collection</h1>
  <div className="botDiv">
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
  </>
  )
}

export default BotCollection
