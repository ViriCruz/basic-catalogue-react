import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getPokemonsError, getPokemons, getPokemonPending } from '../reducers/pokemon-reducer';
import fetchPokemonsActions from '../api/fetch-pokemons';
import Pokemon from '../components/item-detailed-view';

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemon: fetchPokemonsActions.fetchPokemon,
}, dispatch);

const mapStatetoProps = state => ({
  data: {
    error: getPokemonsError(state.data),
    pokemons: getPokemons(state.data),
    pending: getPokemonPending(state.data),
  },
});

const DetailedView = ({ fetchPokemon, data }) => {
  const { error, pending, pokemons = [] } = data;

  const { name } = useParams();

  useEffect(() => {
    fetchPokemon(name);
  }, []);

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  if (pending) return <div>loading</div>;
  if (pokemons.length === 1) {
    return <Pokemon pokemon={pokemons[0]} />;
  }

  return <div>Data still loading</div>;
};

DetailedView.defaultProps = {
  data: {
    error: null,
    pending: true,
    pokemons: [],
  },
};

DetailedView.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }),
  fetchPokemon: PropTypes.func.isRequired,
};

export default connect(mapStatetoProps, mapDispatchToProps)(DetailedView);
