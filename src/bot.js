function Bot({ bot }){
  return(
    <div className="botCard">
      <img className="botImage" src={bot.avatar_url} alt={bot.name}></img>
      <div className="cardText">
      <h2>{bot.name}</h2>
      <p className="catchP">{bot.catchphrase}</p>
      <p>H:{bot.health}  D:{bot.damage}  A:{bot.armor}</p>
      <button className="X"> X </button>
      </div>
    </div>
  )
}

export default Bot