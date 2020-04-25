import React from 'react'
import whoIs from '../assets/who-is.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

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

pokemonItem.defaultProps = {
  pokemon: {
    name: 'pikachu',
  }
}

pokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
  })
}

export default pokemonItem