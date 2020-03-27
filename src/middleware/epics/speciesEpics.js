import { ofType } from 'redux-observable'
import { of, from, forkJoin } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { actionTypes, actions } from 'appActions'
import { transformApiToState } from 'modules/starWar/transformer'
import * as Api from 'modules/starWar/api'
import _map from 'lodash/map'

const getPeople = peopleArr => {
    return peopleArr.map(url => {
        return from(Api.getSpecie(url))
    })
}

export const getSpecieEpic = action$ =>
    action$.pipe(
        ofType(actionTypes.SPECIES.SPECIES_GET_REQUEST),
        switchMap(action => {
            return forkJoin(...getPeople(action.payload.people)).pipe(
                map(data => {
                    return actions.SPECIES.SPECIES_GET_RESPONSE(null, {
                        list: _map(data, transformApiToState('list'))
                    })
                }),
                catchError(error => of(actions.SPECIES.SPECIES_GET_RESPONSE(error)))
            )
        })
    )
