import { actionTypes } from 'appActions'
import { generateDefaultState, handleGeneratedApiActions } from 'utils/reduxHelper'

const defaultState = {
    ...generateDefaultState('species', ['GET'])
}

function speciesReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.SPECIES.SPECIES_GET_REQUEST:
            return {
                ...state,
                isLoadingGetSpecies: true,
                error: null
            }

        case actionTypes.SPECIES.SPECIES_GET_RESPONSE:
            return {
                ...state,
                isLoadingGetSpecies: false,
                error: action.error,
                speciesList: action.payload.list
            }

        default:
            return handleGeneratedApiActions(state, action, 'SPECIES')
    }
}

export { speciesReducer, defaultState }
