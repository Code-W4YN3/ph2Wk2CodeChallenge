
import Bot from "./bot";

function BotCollection({ bots }){
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
