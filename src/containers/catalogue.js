import React from 'react'
import { connect } from 'react-redux'
import fetchPokemonsAction from '../api/fetch-pokemons'
import { bindActionCreators } from 'redux'
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokemon-reducer'

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemons: fetchPokemonsAction
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

  async componentDidMount() {
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
        <ul>
          {pokemons.map(pokemon =><li>{pokemon.pokemon.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)