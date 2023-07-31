import Bot from "./bot";

function BotArmy({ army, handleRemove, removeFromArmy }){
  return(
  <div className="botDiv">
    <h1>Your Army</h1>
    {army.map((bot, key) => (
      <Bot 
        key={key} 
        bot={bot} 
        handleAdd={handleRemove} 
        removeFromArmy={removeFromArmy} 
        inCollection={false}
      />
    ))
    }
  </div>
  )
}

export default BotArmy
