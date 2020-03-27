import { combineReducers } from 'redux'
import { speciesReducer } from './modules/starWar/reducer'

const appReducer = combineReducers({
    species: speciesReducer
})

export default appReducer
