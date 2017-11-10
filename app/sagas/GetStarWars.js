//@flow
import { takeEvery } from 'redux-saga'
import { SAGA_GET_STAR_WARS } from '~/app/reducers/Saga'
import { getPeople } from '~/app/api/StarWars'
import { apolloClient } from '~/app/Apollo'

export function* perform(_a: Object): Generator<*, *, *> {
  const response = yield apolloClient.query({
    query: getPeople,
  })
  console.log('saga', response)
}

export function* watch(): Generator<*, *, *> {
  yield* takeEvery(SAGA_GET_STAR_WARS, perform)
}

export default watch
