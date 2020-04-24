import React from 'react'

const pokemon = ({pokemon}) => {
  return(
    <div>
      <h1>{pokemon.name}</h1>
      <div>
        <h2>Abilities:</h2>
        <ul className="stats">
          <li>Thunderbol</li>
        </ul>
      </div>
    </div>
  )
}

export default pokemon