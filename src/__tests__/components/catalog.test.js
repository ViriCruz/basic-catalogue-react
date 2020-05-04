import { mount} from 'enzyme';
import { Catalog } from '../../containers/catalog'
import React from 'react'



describe('Catalog testing', () => {
  let wrapper;
  const mockFetchPokemonsfn = jest.fn();
  const data = {
    error: null,
    pending: true,
    pokemons: [
      {
        pokemon: {
          name: 'squirtle'
        }
      }
    ]
  }
  beforeEach(() => {
    wrapper = mount(<Catalog data={data} filter='normal' fetchPokemons={mockFetchPokemonsfn}/>)
  })
  
  it('should call the mock fetch pokemons function to populate data', () => {
    expect(mockFetchPokemonsfn.mock.calls.length).toBe(1)
  })

  it('renders error when fetching fails', () => {
    wrapper.setProps({ data: {error: 'Not Found' } });
    expect(wrapper.props().data['error']).toEqual('Not Found');
    expect(wrapper.find('div').text()).toEqual('Error!Not Found')
  });

})