import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IssueTab from '../components/templates/Issue'
import { actionCreators } from '../actions'

const mapStateToProps = ({ user, issue }) => {
  return {
    data: issue.data,
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTab)
