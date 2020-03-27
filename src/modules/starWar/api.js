import { get } from 'utils/net'
const url = 'https://swapi.co/api'

export const getSpeciesList = page => get(`${url}/species/?page=${page}`).then(res => res.data)

export const getSpecie = peopleUrl => {
    return get(peopleUrl).then(res => res.data)
}
