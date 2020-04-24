import React from 'react'
import whoIs from '../assets/who-is.png'
import { Link } from 'react-router-dom'

const pokemonItem = ({ pokemon }) => {
  return(
    <li 
    className="pokemon">
      <Link to={`/pokemon/${pokemon.name}`}>
        <img className="pokemon-pic" src={whoIs}/>
        {pokemon.name}
      </Link>
    </li>
  )
}

export default pokemonItem