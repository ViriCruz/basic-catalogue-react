import React from 'react'
import { connect } from 'react-redux'
import fetchPokemonsActions from '../api/fetch-pokemons'
import { bindActionCreators } from 'redux'
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokemon-reducer'
import PokemonCompactView from '../components/item-compact-view'

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemons: fetchPokemonsActions.fetchPokemons
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state),
    pokemons: getPokemons(state),
    pending: getPokemonsPending(state)
  }
});

class Catalogue extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    const {fetchPokemons} = this.props
    fetchPokemons('normal')
  }


  render() {
    const {error, pending, pokemons} = this.props.data
    if(error) {
      return <div>Error! {error} </div>
    }

    if(pending) {
      return <div>loading..</div>
    }
    
    return(
      <div>
        <ul className="pokelist">
          {pokemons.map(pokemon => <PokemonCompactView 
            key={pokemon.pokemon.name} 
            pokemon={pokemon.pokemon}
          />)}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)