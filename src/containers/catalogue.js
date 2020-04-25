import React from 'react'
import { connect } from 'react-redux'
import fetchPokemonsActions from '../api/fetch-pokemons'
import { bindActionCreators } from 'redux'
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokemon-reducer'
import { getPokemonType } from '../reducers/filter-reducer'
import PokemonCompactView from '../components/item-compact-view'
import CategoryFilter from '../components/category-filter'
import PropTypes from 'prop-types';

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemons: fetchPokemonsActions.fetchPokemons
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state.data),
    pokemons: getPokemons(state.data),
    pending: getPokemonsPending(state.data)
  },
  filter: getPokemonType(state.filter)
});

class Catalogue extends React.Component {
  constructor(props){
    super(props)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  componentDidMount() {
    const {fetchPokemons} = this.props
    fetchPokemons('normal')
  }

  handleFilterChange(e) {
    const {fetchPokemons} = this.props
    if (e.target.value !== '') {
      fetchPokemons(e.target.value)
    }
    e.preventDefault();
  }


  render() {
    const {error, pending, pokemons} = this.props.data
    
    if(error) {
      return <div>Error! {error} </div>
    }

    if(pending) {
      return <div>loading..</div>
    }

    if(pokemons.length < 2){
      return <div>loading...</div>
    }
    
    return(
      <div>
        <CategoryFilter onClick={this.handleFilterChange} />
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

Catalogue.defaultProps = {
  data: {
    pending: true,
    error:null,
    pokemons: []
  },
  filter: 'normal'
}

Catalogue.propTypes = {
  data: PropTypes.shape({
    pending: PropTypes.bool,
    error: PropTypes.string,
    pokemons: PropTypes.arrayOf(PropTypes.object)
  }),
  filter: PropTypes.string,
  fetchPokemons: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)