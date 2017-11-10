//@flow
import GetStarWars from '~/app/sagas/GetStarWars'

export default function* rootSaga(): Generator<any, any, any> {
  yield [GetStarWars()]
}
