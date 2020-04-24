import React from 'react'
import {useHistory} from 'react-router'


const Pokemon = ({pokemon}) => {
  const history = useHistory()

  const goBackHandle = () => {
    history.goBack()
  }

  return(
    <div>
      <div className="pokemon-container">
        <img src={pokemon.sprites['front_default']} alt={pokemon.name} />
        <h1>{pokemon.name}</h1>
      </div>
      
      <div>
        <h2>Abilities:</h2>
        <ul className="stats">
          {pokemon.abilities.map( ab => <li key={ab.ability.name}>{ab.ability.name}</li>)}
        </ul>
      </div>

      <div>
        <h2>Stats</h2>
        <ul>
          {pokemon.stats.map( stats => <li key={stats.stat.name}><span>{stats.stat.name}:</span> {stats.base_stat}</li>)}
        </ul>
      </div>
      <button onClick={goBackHandle}>Go back</button>
    </div>
  )
}

export default Pokemon