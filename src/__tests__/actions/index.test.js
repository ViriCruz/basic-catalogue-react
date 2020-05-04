import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/index'
import fetchMock from 'fetch-mock'
import pokeApi from '../../api/fetchPokemons'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_POKEMONS_SUCCESS when fetching pokemons has been done', () => {
  
    fetchMock.get('https://pokeapi.co/api/v2/type/normal', {
        pokemons: [
          {
            "pokemon": {
              "name": "pidgey",
              "url": "https://pokeapi.co/api/v2/pokemon/16/"
            },
            "slot": 1
          }
        ],
      },
      { delay: 1000, }
    );
     
    const expectedActions = [
      { type: actions.FETCH_POKEMONS_PENDING },
      { 
        type: actions.FETCH_POKEMONS_SUCCESS, 
        pokemons: undefined
      },
      { type: actions.FILTER_TYPE, category: 'normal' }
    ]
    const store = mockStore({ 
      data: {
        pokemons: [], 
        pending: true, 
        error: null 
      },
      filter: 'normal' 
    })

    
    return store.dispatch(pokeApi.fetchPokemons('normal')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})