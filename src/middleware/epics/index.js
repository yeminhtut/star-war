import { combineEpics } from 'redux-observable'
import _ from 'lodash'
import * as speciesEpics from './speciesEpics'

const combineEpicFunctions = epics => {
    return epics.reduce((arr, epic) => {
        return arr.concat(_.keysIn(epic).map(key => epic[key]))
    }, [])
}

const epics = combineEpicFunctions([speciesEpics])

export const rootEpic = combineEpics(...epics)
