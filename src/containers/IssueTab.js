import { connect } from 'react-redux'
import IssueTab from '../components/templates/Issue'
import { ISSUE_ADD, ISSUE_REMOVE, ISSUE_UPDATE } from '../actions'

const mapStateToProps = ({ issue }) => {
  return {
    data: issue.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: ISSUE_ADD }),
    update: () => dispatch({ type: ISSUE_REMOVE }),
    remove: () => dispatch({ type: ISSUE_UPDATE })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTab)
