import React from 'react'
import { connect } from 'react-redux'
import fetchPokemonsAction from '../api/fetch-pokemons'
import { bindActionCreators } from 'redux'
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokemon-reducer'
import whoIs from '../assets/who-is.png'
import { Link } from 'react-router-dom'
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

  handleView(){
    console.log('handle view')
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
          {pokemons.map(pokemon => <li 
            className="pokemon" 
            onClick={this.handleView}>
            <Link to={`/pokemon/${pokemon.pokemon.name}`}>
              <img className="pokemon-pic" src={whoIs}/>
              {pokemon.pokemon.name}
            </Link>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)