import { generateReduxActions } from './utils/reduxHelper'
import { actions as specieActions } from './modules/starWar/action'
const { actions, actionTypes } = generateReduxActions([
    {
        namespace: 'SPECIES',
        actions: specieActions
    }
])

export { actions, actionTypes }
