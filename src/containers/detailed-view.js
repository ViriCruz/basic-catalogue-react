import React, { useEffect } from 'react'
import Pokemon from '../components/item-detailed-view'
import {useParams} from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPokemonsError, getPokemons, getPokemonPending } from '../reducers/pokemon-reducer'
import fetchPokemonsActions from '../api/fetch-pokemons'


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemon: fetchPokemonsActions.fetchPokemon
}, dispatch)

const mapStatetoProps = state => ({
  data: {
    error: getPokemonsError(state.data),
    pokemons: getPokemons(state.data),
    pending: getPokemonPending(state.data)
  }
})


const DetailedView = ({fetchPokemon, data}) => {
  const {error, pending, pokemons} = data
  console.log(pending, pokemons)
  const {name} = useParams()

  useEffect(() => {
    fetchPokemon(name)
  }, [])

  if(pending) return <div>loading</div>
  
  return <Pokemon pokemon={pokemons[0]} />
  // if(error) {
  //   return <div>Error! {error}</div>
  // }else if(pending){
  //   return <div>Loading..</div>
  // }else{
  //   return <Pokemon pokemon={pokemons[0]} />
  // }
}

export default connect(mapStatetoProps, mapDispatchToProps)(DetailedView)