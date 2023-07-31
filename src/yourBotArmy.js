import Bot from "./bot";

function BotArmy({ army, handleRemove, removeFromArmy }){
  return(
  <>
  <h1 className="botCollection">Your Army</h1>
  <div className="botDiv">
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
  </>
  )
}

export default BotArmy
