//@flow
import { connect } from 'react-redux'
import Dashboard from '~/app/components/Dashboard'
import { createAction } from 'redux-actions'
import { SAGA_GET_STAR_WARS } from '~/app/reducers/Saga'

export const mapStateToProps = (_state: Object): Object => ({})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  getStarWars: () => dispatch(createAction(SAGA_GET_STAR_WARS)()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
