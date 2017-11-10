//@flow
import { takeEvery } from 'redux-saga'
import { SAGA_GET_STAR_WARS } from '~/app/reducers/Saga'
import { getLuke } from '~/app/api/StarWars'
import { apolloClient } from '~/app/Apollo'

export function* perform(_a: Object): Generator<*, *, *> {
  const response = yield apolloClient.query({
    query: getLuke,
    variables: {id: 'cGVvcGxlOjE='}
  })
  console.log('saga', JSON.stringify(response))
}

export function* watch(): Generator<*, *, *> {
  yield* takeEvery(SAGA_GET_STAR_WARS, perform)
}

export default watch
