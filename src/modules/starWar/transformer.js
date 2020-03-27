import listTransformer from './transformers/list'

const transformApiToState = (type, state = {}) => data => {
    switch (type) {
        case 'list':
            return listTransformer.toState(data, state)

        default:
            return {}
    }
}

export { transformApiToState }
