import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as alertActinos from '../../../actions/alert.action'

const initMapStateToProps = (store) => store.alertReducer
const initMapDispatchToProps = (dispatch) => ({
  actions: {
    alert: bindActionCreators(alertActinos, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
