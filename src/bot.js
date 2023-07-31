function Bot({ bot, handleAdd, removeFromArmy, inCollection }){
  return(
    <div className="botCard" key={bot.id} onClick={()=> handleAdd(bot)}>
      <img className="botImage" src={bot.avatar_url} alt={bot.name} id={bot.id}></img>
      <div className="cardText">
      <h2>{bot.name}</h2>
      <p className="catchP">{bot.catchphrase}</p>
      <p>H:{bot.health}  D:{bot.damage}  A:{bot.armor}</p>
      <button className="X" onClick={()=> removeFromArmy(bot)}> X </button>
      </div>
    </div>
  )
}

export default Bot