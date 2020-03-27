import { generateApiActions } from 'utils/reduxHelper'

export const actions = {
    ...generateApiActions('species', ['GET'])
}
