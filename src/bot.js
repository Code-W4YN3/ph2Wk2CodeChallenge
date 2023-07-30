function Bot({ bot }){
  return(
    <div className="botCard">
      <img className="botImage" src={bot.avatar_url}></img>
      <div className="cardText">
      <h2>{bot.name}</h2>
      <p className="catchP">{bot.catchphrase}</p>
      <p>H:{bot.health}  D:{bot.damage}  A:{bot.armor}</p>
      </div>
    </div>
  )
}

export default Bot